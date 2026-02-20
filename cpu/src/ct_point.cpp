// ============================================================================
// Constant-Time Point Arithmetic — Implementation (5×52 Optimized)
// ============================================================================
// Complete addition formula + CT scalar multiplication for secp256k1.
//
// INTERNAL REPRESENTATION: FieldElement52 (5×52-bit limbs with lazy reduction)
// This eliminates the function-call overhead of ct::field_* wrappers and
// leverages the ~3.6× faster force-inlined 5×52 multiply/square kernels.
//
// Conversion to/from 4×64 FieldElement occurs only at API boundaries
// (from_point / to_point). All internal arithmetic stays in 5×52.
//
// Magnitude tracking: mul/sqr produce magnitude 1 output.
// Lazy adds accumulate magnitude. Max magnitude in point ops ≈ 30,
// well within the 4096 headroom (12 bits per limb).
//
// Complete addition:
//   Handles P+Q, P+P, P+O, O+Q, P+(-P) in a single branchless codepath.
//   Based on: "Complete addition formulas for prime order elliptic curves"
//   (Renes, Costello, Bathalter 2016), adapted for a=0 (secp256k1).
//
// CT scalar multiplication (GLV-OPTIMIZED):
//   Uses GLV endomorphism φ(x,y)=(β·x,y) to split 256-bit scalar
//   into two 128-bit halves: k = k1 + k2·λ (mod n).
//   Strauss interleaving: 32 windows × (4 dbl + 2 mixed_add).
//   Total: 128 doublings + 64 mixed_complete additions.
//
// CT generator multiplication (OPTIMIZED):
//   Uses precomputed table of 64×16 affine G-multiples.
//   Runtime: 64 mixed Jacobian+Affine additions + 64 CT lookups(16).
//   NO doublings needed.
// ============================================================================

#include "secp256k1/ct/point.hpp"
#include "secp256k1/ct/field.hpp"
#include "secp256k1/ct/scalar.hpp"
#include "secp256k1/ct/ops.hpp"
#include "secp256k1/field_52.hpp"
#include "secp256k1/glv.hpp"

#include <mutex>

namespace secp256k1::ct {

// ─── Type aliases ────────────────────────────────────────────────────────────
using FE52 = secp256k1::fast::FieldElement52;

// ─── secp256k1 curve constant b = 7 (4×64 for API-boundary functions) ────────
static const FieldElement B7 = FieldElement::from_uint64(7);

// ─── 5×52 CT Helper Functions ────────────────────────────────────────────────
// All operations on FieldElement52 are inherently constant-time:
//   - mul/sqr: fixed __int128 multiply chain → MULX (data-independent)
//   - add: 5 plain uint64_t additions (no branches)
//   - negate: (m+1)*p - a (no branches)
//   - normalize: branchless mask-based conditional subtract
// Value barriers are applied in mask generation (is_zero_mask etc.)

namespace /* FE52 CT helpers */ {

// CT conditional move for 5×52 field element
inline void fe52_cmov(FE52* dst, const FE52& src, std::uint64_t mask) noexcept {
    dst->n[0] ^= (dst->n[0] ^ src.n[0]) & mask;
    dst->n[1] ^= (dst->n[1] ^ src.n[1]) & mask;
    dst->n[2] ^= (dst->n[2] ^ src.n[2]) & mask;
    dst->n[3] ^= (dst->n[3] ^ src.n[3]) & mask;
    dst->n[4] ^= (dst->n[4] ^ src.n[4]) & mask;
}

// CT select: returns a if mask==all-ones, else b
inline FE52 fe52_select(const FE52& a, const FE52& b, std::uint64_t mask) noexcept {
    FE52 r;
    r.n[0] = (a.n[0] & mask) | (b.n[0] & ~mask);
    r.n[1] = (a.n[1] & mask) | (b.n[1] & ~mask);
    r.n[2] = (a.n[2] & mask) | (b.n[2] & ~mask);
    r.n[3] = (a.n[3] & mask) | (b.n[3] & ~mask);
    r.n[4] = (a.n[4] & mask) | (b.n[4] & ~mask);
    return r;
}

// CT zero check: normalizes then checks. Returns all-ones if zero.
inline std::uint64_t fe52_is_zero(const FE52& a) noexcept {
    FE52 tmp = a;
    tmp.normalize();
    std::uint64_t z = tmp.n[0] | tmp.n[1] | tmp.n[2] | tmp.n[3] | tmp.n[4];
    return is_zero_mask(z);
}

// CT equality: normalizes both, then compares. Returns all-ones if equal.
inline std::uint64_t fe52_eq(const FE52& a, const FE52& b) noexcept {
    FE52 ta = a; ta.normalize();
    FE52 tb = b; tb.normalize();
    std::uint64_t diff = (ta.n[0] ^ tb.n[0]) | (ta.n[1] ^ tb.n[1]) |
                         (ta.n[2] ^ tb.n[2]) | (ta.n[3] ^ tb.n[3]) |
                         (ta.n[4] ^ tb.n[4]);
    return is_zero_mask(diff);
}

// CT conditional negate: if mask==all-ones, return -a; else a.
// 'mag' is the current magnitude of a.
inline FE52 fe52_cneg(const FE52& a, std::uint64_t mask, unsigned mag) noexcept {
    FE52 neg = a.negate(mag);
    return fe52_select(neg, a, mask);
}

} // anonymous namespace (FE52 CT helpers)


// ─── CTJacobianPoint helpers ─────────────────────────────────────────────────

CTJacobianPoint CTJacobianPoint::from_point(const Point& p) noexcept {
    CTJacobianPoint r;
    if (p.is_infinity()) {
        r = make_infinity();
    } else {
        r.x = FE52::from_fe(p.X());
        r.y = FE52::from_fe(p.Y());
        r.z = FE52::from_fe(p.z());
        r.infinity = 0;
    }
    return r;
}

Point CTJacobianPoint::to_point() const noexcept {
    if (infinity != 0) {
        return Point::infinity();
    }
    return Point::from_jacobian_coords(x.to_fe(), y.to_fe(), z.to_fe(), false);
}

CTJacobianPoint CTJacobianPoint::make_infinity() noexcept {
    CTJacobianPoint r;
    r.x = FE52::zero();
    r.y = FE52::one();
    r.z = FE52::zero();
    r.infinity = ~static_cast<std::uint64_t>(0);
    return r;
}

// ─── CT Conditional Operations on Points ─────────────────────────────────────

void point_cmov(CTJacobianPoint* r, const CTJacobianPoint& a,
                std::uint64_t mask) noexcept {
    fe52_cmov(&r->x, a.x, mask);
    fe52_cmov(&r->y, a.y, mask);
    fe52_cmov(&r->z, a.z, mask);
    r->infinity = ct_select(a.infinity, r->infinity, mask);
}

CTJacobianPoint point_select(const CTJacobianPoint& a, const CTJacobianPoint& b,
                             std::uint64_t mask) noexcept {
    CTJacobianPoint r;
    r.x = fe52_select(a.x, b.x, mask);
    r.y = fe52_select(a.y, b.y, mask);
    r.z = fe52_select(a.z, b.z, mask);
    r.infinity = ct_select(a.infinity, b.infinity, mask);
    return r;
}

CTJacobianPoint point_neg(const CTJacobianPoint& p) noexcept {
    CTJacobianPoint r;
    r.x = p.x;
    // normalize_weak before negate to ensure magnitude 1
    FE52 yn = p.y; yn.normalize_weak();
    r.y = yn.negate(1);  // -(Y) mod p; magnitude 2
    r.z = p.z;
    r.infinity = p.infinity;
    return r;
}

CTJacobianPoint point_table_lookup(const CTJacobianPoint* table,
                                   std::size_t table_size,
                                   std::size_t index) noexcept {
    CTJacobianPoint result = CTJacobianPoint::make_infinity();
    for (std::size_t i = 0; i < table_size; ++i) {
        std::uint64_t mask = eq_mask(static_cast<std::uint64_t>(i),
                                     static_cast<std::uint64_t>(index));
        point_cmov(&result, table[i], mask);
    }
    return result;
}

// ─── CT Conditional Operations on Affine Points ──────────────────────────────

void affine_cmov(CTAffinePoint* r, const CTAffinePoint& a,
                 std::uint64_t mask) noexcept {
    fe52_cmov(&r->x, a.x, mask);
    fe52_cmov(&r->y, a.y, mask);
    r->infinity = ct_select(a.infinity, r->infinity, mask);
}

CTAffinePoint affine_table_lookup(const CTAffinePoint* table,
                                  std::size_t table_size,
                                  std::size_t index) noexcept {
    CTAffinePoint result = CTAffinePoint::make_infinity();
    for (std::size_t i = 0; i < table_size; ++i) {
        std::uint64_t mask = eq_mask(static_cast<std::uint64_t>(i),
                                     static_cast<std::uint64_t>(index));
        affine_cmov(&result, table[i], mask);
    }
    return result;
}

// ─── Complete Addition (Jacobian, a=0, 5×52) ────────────────────────────────
// Complete formula for y²=x³+b on Jacobian coordinates.
// Handles all cases without branches:
//   P+Q (general), P+P (doubling), P+O, O+Q, P+(-P)=O
//
// Strategy: compute both general-add and doubling results,
// then CT-select the correct one based on whether H==0 / R==0.
// Also handles infinity via cmov at the end.

CTJacobianPoint point_add_complete(const CTJacobianPoint& p,
                                   const CTJacobianPoint& q) noexcept {
    // Normalize inputs to guarantee magnitude 1 (previous ops may leave M>1)
    FE52 X1 = p.x; X1.normalize_weak();
    FE52 Y1 = p.y; Y1.normalize_weak();
    FE52 Z1 = p.z; Z1.normalize_weak();
    FE52 X2 = q.x; X2.normalize_weak();
    FE52 Y2 = q.y; Y2.normalize_weak();
    FE52 Z2 = q.z; Z2.normalize_weak();

    // ── 1. General Jacobian addition ──
    FE52 z1z1 = Z1.square();                           // M=1
    FE52 z2z2 = Z2.square();                           // M=1
    FE52 u1   = X1 * z2z2;                             // M=1
    FE52 u2   = X2 * z1z1;                             // M=1
    FE52 s1   = (Y1 * Z2) * z2z2;                      // M=1
    FE52 s2   = (Y2 * Z1) * z1z1;                      // M=1

    FE52 h    = u2 + u1.negate(1);                      // H = U2 - U1; M=3
    FE52 r    = s2 + s1.negate(1);                      // R = S2 - S1; M=3

    // Detect special cases via CT masks
    std::uint64_t h_is_zero = fe52_is_zero(h);
    std::uint64_t r_is_zero = fe52_is_zero(r);
    std::uint64_t is_double  = h_is_zero & r_is_zero;
    std::uint64_t is_inverse = h_is_zero & ~r_is_zero;

    FE52 hh   = h.square();                            // M=1
    FE52 hhh  = h * hh;                                // M=1
    FE52 v    = u1 * hh;                               // M=1

    FE52 rr       = r.square();                         // M=1
    FE52 vv       = v + v;                              // M=2
    FE52 x3_add   = rr + hhh.negate(1) + vv.negate(2); // M=1+2+3=6
    FE52 vx3      = v + x3_add.negate(6);              // M=1+7=8
    FE52 y3_add   = (r * vx3) + (s1 * hhh).negate(1);  // M=1+2=3
    FE52 z3_add   = (Z1 * Z2) * h;                     // M=1

    // ── 2. Doubling of P (dbl-2007-a for a=0) ──
    FE52 A   = X1.square();                            // M=1
    FE52 B   = Y1.square();                            // M=1
    FE52 C   = B.square();                             // M=1

    FE52 xb  = X1 + B;                                // M=2
    FE52 AC  = A + C;                                  // M=2
    FE52 D   = xb.square() + AC.negate(2);             // M=1+3=4
    D = D + D;                                         // M=8

    FE52 E   = (A + A) + A;                            // M=3
    FE52 F   = E.square();                             // M=1

    FE52 DD  = D + D;                                  // M=16
    FE52 x3_dbl = F + DD.negate(16);                   // M=18

    FE52 C8  = C + C;                                  // M=2
    C8 = C8 + C8;                                      // M=4
    C8 = C8 + C8;                                      // M=8

    FE52 Dx  = D + x3_dbl.negate(18);                  // M=8+19=27
    FE52 y3_dbl = (E * Dx) + C8.negate(8);             // M=1+9=10

    FE52 yz_dbl = Y1 * Z1;
    FE52 z3_dbl = yz_dbl + yz_dbl;                     // M=2

    // ── 3. Select result via CT masks ──
    FE52 x3 = fe52_select(x3_dbl, x3_add, is_double);
    FE52 y3 = fe52_select(y3_dbl, y3_add, is_double);
    FE52 z3 = fe52_select(z3_dbl, z3_add, is_double);

    // If P == -Q → infinity (0:1:0)
    FE52 zero52 = FE52::zero();
    FE52 one52  = FE52::one();
    fe52_cmov(&x3, zero52, is_inverse);
    fe52_cmov(&y3, one52,  is_inverse);
    fe52_cmov(&z3, zero52, is_inverse);

    // If P is infinity → result = Q
    fe52_cmov(&x3, X2, p.infinity);
    fe52_cmov(&y3, Y2, p.infinity);
    fe52_cmov(&z3, Z2, p.infinity);

    // If Q is infinity → result = P
    fe52_cmov(&x3, X1, q.infinity);
    fe52_cmov(&y3, Y1, q.infinity);
    fe52_cmov(&z3, Z1, q.infinity);

    // Compute infinity flag for result
    std::uint64_t result_inf = is_inverse & ~p.infinity & ~q.infinity;
    result_inf |= p.infinity & q.infinity;

    CTJacobianPoint result;
    result.x = x3;
    result.y = y3;
    result.z = z3;
    result.infinity = result_inf;
    return result;
}

// ─── Mixed Jacobian+Affine Complete Addition (a=0, 5×52) ─────────────────────
// P = (X1:Y1:Z1) Jacobian, Q = (x2, y2) affine (implied Z2=1).
// Z2=1 optimizations: no Z2²/Z2³, U1=X1, S1=Y1, Z3_add=Z1·H.

CTJacobianPoint point_add_mixed_complete(const CTJacobianPoint& p,
                                          const CTAffinePoint& q) noexcept {
    // Normalize inputs to guarantee magnitude 1
    FE52 X1 = p.x; X1.normalize_weak();
    FE52 Y1 = p.y; Y1.normalize_weak();
    FE52 Z1 = p.z; Z1.normalize_weak();
    FE52 x2 = q.x; x2.normalize_weak();
    FE52 y2 = q.y; y2.normalize_weak();

    // ── 1. General Jacobian+Affine addition (Z2=1) ──
    FE52 z1z1 = Z1.square();                          // M=1
    FE52 u2   = x2 * z1z1;                            // M=1
    FE52 z1cu = z1z1 * Z1;                             // M=1
    FE52 s2   = y2 * z1cu;                             // M=1

    FE52 h    = u2 + X1.negate(1);                     // H = U2 - X1; M=3
    FE52 r    = s2 + Y1.negate(1);                     // R = S2 - Y1; M=3

    // Detect special cases via CT masks
    std::uint64_t h_is_zero = fe52_is_zero(h);
    std::uint64_t r_is_zero = fe52_is_zero(r);
    std::uint64_t is_double  = h_is_zero & r_is_zero;
    std::uint64_t is_inverse = h_is_zero & ~r_is_zero;

    FE52 hh   = h.square();                           // M=1
    FE52 hhh  = h * hh;                               // M=1
    FE52 v    = X1 * hh;                              // M=1

    FE52 rr       = r.square();                        // M=1
    FE52 vv       = v + v;                             // M=2
    FE52 x3_add   = rr + hhh.negate(1) + vv.negate(2); // M=6
    FE52 vx3      = v + x3_add.negate(6);             // M=8
    FE52 y3_add   = (r * vx3) + (Y1 * hhh).negate(1); // M=3
    FE52 z3_add   = Z1 * h;                           // M=1

    // ── 2. Doubling of P (dbl-2007-a for a=0) ──
    FE52 A   = X1.square();                           // M=1
    FE52 B   = Y1.square();                           // M=1
    FE52 C   = B.square();                            // M=1

    FE52 xb  = X1 + B;                               // M=2
    FE52 AC  = A + C;                                 // M=2
    FE52 D   = xb.square() + AC.negate(2);            // M=4
    D = D + D;                                        // M=8

    FE52 E   = (A + A) + A;                           // M=3
    FE52 F   = E.square();                            // M=1

    FE52 DD  = D + D;                                 // M=16
    FE52 x3_dbl = F + DD.negate(16);                  // M=18

    FE52 C8  = C + C;                                 // M=2
    C8 = C8 + C8;                                     // M=4
    C8 = C8 + C8;                                     // M=8

    FE52 Dx  = D + x3_dbl.negate(18);                 // M=27
    FE52 y3_dbl = (E * Dx) + C8.negate(8);            // M=10
    FE52 yz_mix = Y1 * Z1;
    FE52 z3_dbl = yz_mix + yz_mix;                    // M=2

    // ── 3. Select result via CT masks ──
    FE52 x3 = fe52_select(x3_dbl, x3_add, is_double);
    FE52 y3 = fe52_select(y3_dbl, y3_add, is_double);
    FE52 z3 = fe52_select(z3_dbl, z3_add, is_double);

    // If P == -Q → infinity (0:1:0)
    FE52 zero52 = FE52::zero();
    FE52 one52  = FE52::one();
    fe52_cmov(&x3, zero52, is_inverse);
    fe52_cmov(&y3, one52,  is_inverse);
    fe52_cmov(&z3, zero52, is_inverse);

    // If P is infinity → result = Q (affine, so Z=1)
    fe52_cmov(&x3, x2, p.infinity);
    fe52_cmov(&y3, y2, p.infinity);
    fe52_cmov(&z3, one52, p.infinity);

    // If Q is infinity → result = P
    fe52_cmov(&x3, X1, q.infinity);
    fe52_cmov(&y3, Y1, q.infinity);
    fe52_cmov(&z3, Z1, q.infinity);

    // Compute infinity flag for result
    std::uint64_t result_inf = is_inverse & ~p.infinity & ~q.infinity;
    result_inf |= p.infinity & q.infinity;

    CTJacobianPoint result;
    result.x = x3;
    result.y = y3;
    result.z = z3;
    result.infinity = result_inf;
    return result;
}

// ─── CT Point Doubling (5×52) ────────────────────────────────────────────────

CTJacobianPoint point_dbl(const CTJacobianPoint& p) noexcept {
    // Normalize inputs to guarantee magnitude 1
    FE52 X1 = p.x; X1.normalize_weak();
    FE52 Y1 = p.y; Y1.normalize_weak();
    FE52 Z1 = p.z; Z1.normalize_weak();

    FE52 A = X1.square();           // M=1
    FE52 B = Y1.square();           // M=1
    FE52 C = B.square();            // M=1

    FE52 xb = X1 + B;              // M=2
    FE52 AC = A + C;               // M=2
    FE52 D = xb.square() + AC.negate(2); // M=4
    D = D + D;                     // M=8

    FE52 E = (A + A) + A;          // M=3
    FE52 F = E.square();           // M=1

    FE52 DD = D + D;               // M=16
    FE52 x3 = F + DD.negate(16);   // M=18

    FE52 C8 = C + C;               // M=2
    C8 = C8 + C8;                  // M=4
    C8 = C8 + C8;                  // M=8

    FE52 Dx = D + x3.negate(18);   // M=27
    FE52 y3 = (E * Dx) + C8.negate(8); // M=10

    FE52 z3 = Y1 * Z1;            // M=1
    z3 = z3 + z3;                  // M=2

    // If P is infinity, result is infinity
    CTJacobianPoint inf = CTJacobianPoint::make_infinity();
    CTJacobianPoint result;
    result.x = x3;
    result.y = y3;
    result.z = z3;
    result.infinity = 0;

    point_cmov(&result, inf, p.infinity);
    return result;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CT GLV Endomorphism — Helpers & Decomposition
// ═══════════════════════════════════════════════════════════════════════════════

namespace /* GLV CT helpers */ {

// ─── Local sub256 (needed for ct_scalar_is_high) ─────────────────────────────
static inline std::uint64_t local_sub256(std::uint64_t r[4],
                                          const std::uint64_t a[4],
                                          const std::uint64_t b[4]) noexcept {
    std::uint64_t borrow = 0;
    for (int i = 0; i < 4; ++i) {
        std::uint64_t diff = a[i] - b[i];
        std::uint64_t b1 = static_cast<std::uint64_t>(a[i] < b[i]);
        std::uint64_t result = diff - borrow;
        std::uint64_t b2 = static_cast<std::uint64_t>(diff < borrow);
        r[i] = result;
        borrow = b1 + b2;
    }
    return borrow;
}

// ─── CT scalar > n/2 check ──────────────────────────────────────────────────
static std::uint64_t ct_scalar_is_high(const Scalar& s) noexcept {
    static constexpr std::uint64_t HALF_N[4] = {
        0xDFE92F46681B20A0ULL,
        0x5D576E7357A4501DULL,
        0xFFFFFFFFFFFFFFFFULL,
        0x7FFFFFFFFFFFFFFFULL
    };
    std::uint64_t tmp[4];
    std::uint64_t borrow = local_sub256(tmp, HALF_N, s.limbs().data());
    return is_nonzero_mask(borrow);
}

// ─── CT 256×256→512 multiply, shift >>384 with rounding ─────────────────────
static std::array<std::uint64_t, 4> ct_mul_shift_384(
    const std::array<std::uint64_t, 4>& a,
    const std::array<std::uint64_t, 4>& b) noexcept
{
    std::uint64_t prod[8] = {};
    for (int i = 0; i < 4; ++i) {
        unsigned __int128 carry = 0;
        for (int j = 0; j < 4; ++j) {
            unsigned __int128 t = static_cast<unsigned __int128>(a[i]) * b[j]
                                + prod[i + j] + carry;
            prod[i + j] = static_cast<std::uint64_t>(t);
            carry = t >> 64;
        }
        prod[i + 4] = static_cast<std::uint64_t>(carry);
    }

    std::array<std::uint64_t, 4> result{};
    result[0] = prod[6];
    result[1] = prod[7];

    std::uint64_t round = prod[5] >> 63;
    std::uint64_t old = result[0];
    result[0] += round;
    std::uint64_t carry = static_cast<std::uint64_t>(result[0] < old);
    result[1] += carry;

    return result;
}

// ─── CT scalar multiplication mod n ──────────────────────────────────────────
static Scalar ct_scalar_mul_mod(const Scalar& a, const Scalar& b) noexcept {
    static constexpr std::uint64_t ORDER[4] = {
        0xBFD25E8CD0364141ULL,
        0xBAAEDCE6AF48A03BULL,
        0xFFFFFFFFFFFFFFFEULL,
        0xFFFFFFFFFFFFFFFFULL
    };
    static constexpr std::uint64_t MU[5] = {
        0x402DA1732FC9BEC0ULL,
        0x4551231950B75FC4ULL,
        0x0000000000000001ULL,
        0x0000000000000000ULL,
        0x0000000000000001ULL
    };

    // Step 1: Schoolbook 4×4 → 512-bit product
    std::uint64_t prod[8] = {};
    for (int i = 0; i < 4; ++i) {
        unsigned __int128 carry = 0;
        for (int j = 0; j < 4; ++j) {
            unsigned __int128 t = static_cast<unsigned __int128>(a.limbs()[i]) * b.limbs()[j]
                                + prod[i + j] + carry;
            prod[i + j] = static_cast<std::uint64_t>(t);
            carry = t >> 64;
        }
        prod[i + 4] = static_cast<std::uint64_t>(carry);
    }

    // Step 2: Barrett approximation
    std::uint64_t qmu[9] = {};
    for (int i = 0; i < 4; ++i) {
        unsigned __int128 carry = 0;
        for (int j = 0; j < 5; ++j) {
            unsigned __int128 t = static_cast<unsigned __int128>(prod[4 + i]) * MU[j]
                                + qmu[i + j] + carry;
            qmu[i + j] = static_cast<std::uint64_t>(t);
            carry = t >> 64;
        }
        qmu[i + 5] = static_cast<std::uint64_t>(carry);
    }

    std::uint64_t qn[5] = {};
    for (int i = 0; i < 4; ++i) {
        unsigned __int128 carry = 0;
        for (int j = 0; j < 4; ++j) {
            if (i + j >= 5) break;
            unsigned __int128 t = static_cast<unsigned __int128>(qmu[4 + i]) * ORDER[j]
                                + qn[i + j] + carry;
            qn[i + j] = static_cast<std::uint64_t>(t);
            carry = t >> 64;
        }
        if (i + 4 < 5) {
            qn[i + 4] = static_cast<std::uint64_t>(carry);
        }
    }

    std::uint64_t r[4];
    std::uint64_t bw = 0;
    for (int i = 0; i < 4; ++i) {
        std::uint64_t diff = prod[i] - qn[i];
        std::uint64_t b1 = static_cast<std::uint64_t>(prod[i] < qn[i]);
        std::uint64_t res = diff - bw;
        std::uint64_t b2 = static_cast<std::uint64_t>(diff < bw);
        r[i] = res;
        bw = b1 + b2;
    }
    std::uint64_t r4 = prod[4] - qn[4] - bw;

    // Step 3: CT conditional subtract
    std::uint64_t r_sub1[4];
    std::uint64_t bw1 = 0;
    for (int i = 0; i < 4; ++i) {
        std::uint64_t diff = r[i] - ORDER[i];
        std::uint64_t b1 = static_cast<std::uint64_t>(r[i] < ORDER[i]);
        std::uint64_t res = diff - bw1;
        std::uint64_t b2 = static_cast<std::uint64_t>(diff < bw1);
        r_sub1[i] = res;
        bw1 = b1 + b2;
    }
    std::uint64_t r4_sub1 = r4 - bw1;
    std::uint64_t need_sub1 = is_nonzero_mask(r4) | is_zero_mask(bw1 & is_zero_mask(r4));
    cmov256(r, r_sub1, need_sub1);
    r4 = ct_select(r4_sub1, r4, need_sub1);

    std::uint64_t r_sub2[4];
    std::uint64_t bw2 = 0;
    for (int i = 0; i < 4; ++i) {
        std::uint64_t diff = r[i] - ORDER[i];
        std::uint64_t b1 = static_cast<std::uint64_t>(r[i] < ORDER[i]);
        std::uint64_t res = diff - bw2;
        std::uint64_t b2 = static_cast<std::uint64_t>(diff < bw2);
        r_sub2[i] = res;
        bw2 = b1 + b2;
    }
    std::uint64_t r4_sub2 = r4 - bw2;
    std::uint64_t need_sub2 = is_nonzero_mask(r4) | is_zero_mask(bw2 & is_zero_mask(r4));
    cmov256(r, r_sub2, need_sub2);
    (void)r4_sub2;

    return Scalar::from_limbs({r[0], r[1], r[2], r[3]});
}

// ─── β (beta) as FE52 — cube root of unity mod p ────────────────────────────
static const FE52& get_beta_fe52() noexcept {
    static const FE52 beta = FE52::from_fe(
        FieldElement::from_bytes(secp256k1::fast::glv_constants::BETA));
    return beta;
}

// ─── GLV lattice constants ───────────────────────────────────────────────────
static constexpr std::array<std::uint64_t, 4> kG1{{
    0xE893209A45DBB031ULL, 0x3DAA8A1471E8CA7FULL,
    0xE86C90E49284EB15ULL, 0x3086D221A7D46BCDULL
}};
static constexpr std::array<std::uint64_t, 4> kG2{{
    0x1571B4AE8AC47F71ULL, 0x221208AC9DF506C6ULL,
    0x6F547FA90ABFE4C4ULL, 0xE4437ED6010E8828ULL
}};
static constexpr std::array<std::uint8_t, 32> kMinusB1Bytes{{
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    0xE4,0x43,0x7E,0xD6,0x01,0x0E,0x88,0x28,
    0x6F,0x54,0x7F,0xA9,0x0A,0xBF,0xE4,0xC3
}};
static constexpr std::array<std::uint8_t, 32> kMinusB2Bytes{{
    0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,
    0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFE,
    0x8A,0x28,0x0A,0xC5,0x07,0x74,0x34,0x6D,
    0xD7,0x65,0xCD,0xA8,0x3D,0xB1,0x56,0x2C
}};
static constexpr std::array<std::uint8_t, 32> kLambdaBytes{{
    0x53,0x63,0xAD,0x4C,0xC0,0x5C,0x30,0xE0,
    0xA5,0x26,0x1C,0x02,0x88,0x12,0x64,0x5A,
    0x12,0x2E,0x22,0xEA,0x20,0x81,0x66,0x78,
    0xDF,0x02,0x96,0x7C,0x1B,0x23,0xBD,0x72
}};

} // anonymous namespace (GLV CT helpers)

// ─── CT GLV Endomorphism (5×52) ──────────────────────────────────────────────

CTJacobianPoint point_endomorphism(const CTJacobianPoint& p) noexcept {
    CTJacobianPoint r;
    r.x = p.x * get_beta_fe52();
    r.y = p.y;
    r.z = p.z;
    r.infinity = p.infinity;
    return r;
}

CTAffinePoint affine_endomorphism(const CTAffinePoint& p) noexcept {
    CTAffinePoint r;
    r.x = p.x * get_beta_fe52();
    r.y = p.y;
    r.infinity = p.infinity;
    return r;
}

CTAffinePoint affine_neg(const CTAffinePoint& p) noexcept {
    CTAffinePoint r;
    r.x = p.x;
    FE52 yn = p.y; yn.normalize_weak();
    r.y = yn.negate(1);
    r.infinity = p.infinity;
    return r;
}

// ─── CT GLV Decomposition ────────────────────────────────────────────────────

CTGLVDecomposition ct_glv_decompose(const Scalar& k) noexcept {
    static const Scalar minus_b1 = Scalar::from_bytes(kMinusB1Bytes);
    static const Scalar minus_b2 = Scalar::from_bytes(kMinusB2Bytes);
    static const Scalar lambda   = Scalar::from_bytes(kLambdaBytes);

    auto k_limbs = k.limbs();
    auto c1_limbs = ct_mul_shift_384({k_limbs[0], k_limbs[1], k_limbs[2], k_limbs[3]}, kG1);
    auto c2_limbs = ct_mul_shift_384({k_limbs[0], k_limbs[1], k_limbs[2], k_limbs[3]}, kG2);

    Scalar c1 = Scalar::from_limbs(c1_limbs);
    Scalar c2 = Scalar::from_limbs(c2_limbs);

    Scalar k2_part1 = ct_scalar_mul_mod(c1, minus_b1);
    Scalar k2_part2 = ct_scalar_mul_mod(c2, minus_b2);
    Scalar k2_mod   = scalar_add(k2_part1, k2_part2);

    std::uint64_t k2_high = ct_scalar_is_high(k2_mod);
    Scalar k2_abs = scalar_cneg(k2_mod, k2_high);

    Scalar k2_signed = scalar_cneg(k2_abs, k2_high);

    Scalar lambda_k2 = ct_scalar_mul_mod(lambda, k2_signed);
    Scalar k1_mod = scalar_sub(k, lambda_k2);

    std::uint64_t k1_high = ct_scalar_is_high(k1_mod);
    Scalar k1_abs = scalar_cneg(k1_mod, k1_high);

    CTGLVDecomposition result;
    result.k1     = k1_abs;
    result.k2     = k2_abs;
    result.k1_neg = k1_high;
    result.k2_neg = k2_high;
    return result;
}

// ─── CT GLV Scalar Multiplication (5×52) ─────────────────────────────────────

Point scalar_mul(const Point& p, const Scalar& k) noexcept {
    constexpr unsigned W = 4;
    constexpr unsigned GLV_WINDOWS = 32;
    constexpr std::size_t TABLE_SIZE = 1u << W;

    // GLV Decomposition (CT)
    auto [k1, k2, k1_neg, k2_neg] = ct_glv_decompose(k);

    // Endomorphism: φ(P) = (β·Px, Py, Pz)
    Point phiP = secp256k1::fast::apply_endomorphism(p);

    // Build affine precomputation tables (public data, fast-path)
    CTAffinePoint T1[TABLE_SIZE];
    CTAffinePoint T2[TABLE_SIZE];

    T1[0] = CTAffinePoint::make_infinity();
    T1[1] = CTAffinePoint::from_point(p);
    {
        Point p2 = p;
        p2.dbl_inplace();
        T1[2] = CTAffinePoint::from_point(p2);
        Point running = p2;
        for (std::size_t i = 3; i < TABLE_SIZE; ++i) {
            running = running.add(p);
            T1[i] = CTAffinePoint::from_point(running);
        }
    }

    T2[0] = CTAffinePoint::make_infinity();
    T2[1] = CTAffinePoint::from_point(phiP);
    {
        Point phiP2 = phiP;
        phiP2.dbl_inplace();
        T2[2] = CTAffinePoint::from_point(phiP2);
        Point running = phiP2;
        for (std::size_t i = 3; i < TABLE_SIZE; ++i) {
            running = running.add(phiP);
            T2[i] = CTAffinePoint::from_point(running);
        }
    }

    // CT sign handling: if k1/k2 was negated, negate table Y-coords
    for (std::size_t i = 1; i < TABLE_SIZE; ++i) {
        T1[i].y = fe52_cneg(T1[i].y, k1_neg, 1);
        T2[i].y = fe52_cneg(T2[i].y, k2_neg, 1);
    }

    SECP256K1_DECLASSIFY(T1, sizeof(T1));
    SECP256K1_DECLASSIFY(T2, sizeof(T2));

    // Strauss interleaving (32 windows × 2 lookups)
    CTJacobianPoint R = CTJacobianPoint::make_infinity();

    for (int i = static_cast<int>(GLV_WINDOWS) - 1; i >= 0; --i) {
        R = point_dbl(R);
        R = point_dbl(R);
        R = point_dbl(R);
        R = point_dbl(R);

        std::uint64_t w1 = scalar_window(k1, static_cast<std::size_t>(i) * W, W);
        std::uint64_t w2 = scalar_window(k2, static_cast<std::size_t>(i) * W, W);

        CTAffinePoint A1 = affine_table_lookup(T1, TABLE_SIZE, w1);
        CTAffinePoint A2 = affine_table_lookup(T2, TABLE_SIZE, w2);

        R = point_add_mixed_complete(R, A1);
        R = point_add_mixed_complete(R, A2);
    }

    Point result = R.to_point();
    SECP256K1_DECLASSIFY(&result, sizeof(result));
    return result;
}

// ─── CT Generator Multiplication (5×52) ──────────────────────────────────────

namespace {

constexpr unsigned GEN_W = 4;
constexpr unsigned GEN_WINDOWS = 64;
constexpr std::size_t GEN_TABLE_SIZE = 1u << GEN_W;

struct alignas(64) GenPrecompTable {
    CTAffinePoint entries[GEN_WINDOWS][GEN_TABLE_SIZE];
    bool initialized = false;
};

static GenPrecompTable g_gen_table;
static std::once_flag g_gen_table_once;

void build_gen_table() noexcept {
    Point G = Point::generator();
    Point base = G;

    for (unsigned w = 0; w < GEN_WINDOWS; ++w) {
        g_gen_table.entries[w][0] = CTAffinePoint::make_infinity();
        g_gen_table.entries[w][1] = CTAffinePoint::from_point(base);

        Point doubled = base;
        doubled.dbl_inplace();
        g_gen_table.entries[w][2] = CTAffinePoint::from_point(doubled);

        Point running = doubled;
        for (std::size_t j = 3; j < GEN_TABLE_SIZE; ++j) {
            running = running.add(base);
            g_gen_table.entries[w][j] = CTAffinePoint::from_point(running);
        }

        base.dbl_inplace();
        base.dbl_inplace();
        base.dbl_inplace();
        base.dbl_inplace();
    }

    g_gen_table.initialized = true;
}

} // anonymous namespace

void init_generator_table() noexcept {
    std::call_once(g_gen_table_once, build_gen_table);
}

Point generator_mul(const Scalar& k) noexcept {
    init_generator_table();

    CTJacobianPoint R = CTJacobianPoint::make_infinity();

    for (unsigned i = 0; i < GEN_WINDOWS; ++i) {
        std::uint64_t digit = scalar_window(k, static_cast<std::size_t>(i) * GEN_W, GEN_W);

        CTAffinePoint T = affine_table_lookup(g_gen_table.entries[i],
                                              GEN_TABLE_SIZE, digit);

        R = point_add_mixed_complete(R, T);
    }

    Point result = R.to_point();
    SECP256K1_DECLASSIFY(&result, sizeof(result));
    return result;
}

// ─── CT Curve Check (uses 4×64 FieldElement at API boundary) ─────────────────

std::uint64_t point_is_on_curve(const Point& p) noexcept {
    if (p.is_infinity()) {
        return ~static_cast<std::uint64_t>(0);
    }

    FieldElement x = p.x();
    FieldElement y = p.y();

    FieldElement y2 = field_sqr(y);
    FieldElement x2 = field_sqr(x);
    FieldElement x3 = field_mul(x, x2);
    FieldElement rhs = field_add(x3, B7);

    return field_eq(y2, rhs);
}

// ─── CT Point Equality (uses 4×64 at API boundary) ──────────────────────────

std::uint64_t point_eq(const Point& a, const Point& b) noexcept {
    if (a.is_infinity() && b.is_infinity()) {
        return ~static_cast<std::uint64_t>(0);
    }
    if (a.is_infinity() || b.is_infinity()) {
        return 0;
    }

    FieldElement z1sq = field_sqr(a.z());
    FieldElement z2sq = field_sqr(b.z());
    FieldElement u1 = field_mul(a.X(), z2sq);
    FieldElement u2 = field_mul(b.X(), z1sq);

    FieldElement z1cu = field_mul(z1sq, a.z());
    FieldElement z2cu = field_mul(z2sq, b.z());
    FieldElement s1 = field_mul(a.Y(), z2cu);
    FieldElement s2 = field_mul(b.Y(), z1cu);

    return field_eq(u1, u2) & field_eq(s1, s2);
}

} // namespace secp256k1::ct
