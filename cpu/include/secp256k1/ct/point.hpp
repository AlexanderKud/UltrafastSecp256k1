#ifndef SECP256K1_CT_POINT_HPP
#define SECP256K1_CT_POINT_HPP

// ============================================================================
// Constant-Time Point Arithmetic
// ============================================================================
// Side-channel resistant elliptic curve point operations for secp256k1.
// Uses secp256k1::fast::Point and FieldElement data types.
//
// Key differences from fast::Point:
//   1. COMPLETE addition formula — handles all cases (P+Q, P+P, P+O, O+Q,
//      P+(-P)) in a single codepath with NO branches on point values
//   2. CT scalar multiplication — fixed execution pattern:
//      - Always same number of doublings + additions
//      - CT table lookup (scans all entries)
//      - No early exit or conditional skip
//   3. CT table lookup for precomputed multiples
//
// The complete Jacobian addition for a=0 (secp256k1: y²=x³+7) uses
// the Renes-Costello-Bathalter (2016) formula adapted for a=0.
// Cost: 12M + 2S (vs 11M + 5S for fast incomplete)
// Advantage: No branch on P==Q, P==-Q, P==O
// ============================================================================

#include <cstdint>
#include <cstddef>
#include "secp256k1/field.hpp"
#include "secp256k1/scalar.hpp"
#include "secp256k1/point.hpp"
#include "secp256k1/ct/ops.hpp"
#include "secp256k1/ct/field.hpp"
#include "secp256k1/ct/scalar.hpp"

namespace secp256k1::ct {

using Point = secp256k1::fast::Point;
using FieldElement = secp256k1::fast::FieldElement;
using Scalar = secp256k1::fast::Scalar;

// ─── CT Jacobian Point (internal representation) ─────────────────────────────
// Uses uint64_t flag instead of bool for branchless operations
struct CTJacobianPoint {
    FieldElement x;
    FieldElement y;
    FieldElement z;
    std::uint64_t infinity;  // 0 = normal, 0xFFFF...F = infinity

    static CTJacobianPoint from_point(const Point& p) noexcept;
    Point to_point() const noexcept;
    static CTJacobianPoint make_infinity() noexcept;
};

// ─── Complete Addition ───────────────────────────────────────────────────────
// Handles ALL cases in a single branchless codepath:
//   P + Q,  P + P (doubling),  P + O,  O + Q,  P + (-P) = O
// No secret-dependent branches. Fixed 12M + 2S cost.

CTJacobianPoint point_add_complete(const CTJacobianPoint& p,
                                   const CTJacobianPoint& q) noexcept;

// ─── CT Point Doubling ───────────────────────────────────────────────────────
// Branchless doubling (handles identity via cmov, no branch)
CTJacobianPoint point_dbl(const CTJacobianPoint& p) noexcept;

// ─── CT Point Negation ───────────────────────────────────────────────────────
CTJacobianPoint point_neg(const CTJacobianPoint& p) noexcept;

// ─── CT Conditional Operations ───────────────────────────────────────────────
void point_cmov(CTJacobianPoint* r, const CTJacobianPoint& a,
                std::uint64_t mask) noexcept;

CTJacobianPoint point_select(const CTJacobianPoint& a, const CTJacobianPoint& b,
                             std::uint64_t mask) noexcept;

// ─── CT Table Lookup ─────────────────────────────────────────────────────────
// Always reads ALL table entries. Returns table[index].
// table_size must equal the actual table array length.
CTJacobianPoint point_table_lookup(const CTJacobianPoint* table,
                                   std::size_t table_size,
                                   std::size_t index) noexcept;

// ─── CT Scalar Multiplication ────────────────────────────────────────────────
// The core CT operation. Fixed execution trace regardless of scalar value.
//
// Method: Fixed-window (w=4) with CT table lookup
//   - 256/4 = 64 doublings + 64 additions (always, no skip)
//   - Each addition uses CT table lookup (scans all 16 entries)
//   - Complete addition formula (no special-case branches)
//   - Handles all edge cases: k=0, k=1, k=n-1, P=O
//
// Cost: ~64 * (4 dbl + 1 complete_add + 1 CT_lookup)
// Slower than fast:: (~2-3x) but constant-time.

Point scalar_mul(const Point& p, const Scalar& k) noexcept;

// CT generator multiplication: k * G
// Uses the same CT algorithm but with the standard generator point.
Point generator_mul(const Scalar& k) noexcept;

// ─── CT Verify (for ECDSA) ──────────────────────────────────────────────────
// Returns all-ones mask if point is on curve, else 0. CT.
std::uint64_t point_is_on_curve(const Point& p) noexcept;

// CT equality check
std::uint64_t point_eq(const Point& a, const Point& b) noexcept;

} // namespace secp256k1::ct

#endif // SECP256K1_CT_POINT_HPP
