// =============================================================================
// ltc_sp.cpp — Litecoin Silent Payments implementation
// =============================================================================
// Protocol: identical to BIP-352 except for two tagged hash domain strings.
//
// Tag differences (prevent cross-chain replay):
//   BTC: "BIP0352/SharedSecret" (20 bytes), "BIP0352/Inputs" (14 bytes)
//   LTC: "LTCSP/SharedSecret"   (18 bytes), "LTCSP/Inputs"   (12 bytes)
//
// Tagged hash construction (BIP-340 §D):
//   H_tag(x) = SHA256(SHA256(tag) || SHA256(tag) || x)
//
// All other protocol steps are identical to BIP-352 §3.
// =============================================================================

#include "secp256k1/ltc/ltc_sp.hpp"
#include "secp256k1/sha256.hpp"
#include "secp256k1/address.hpp"   // bech32_encode, bech32_decode
#include "secp256k1/scalar.hpp"
#include "secp256k1/point.hpp"
#include "secp256k1/field.hpp"
#include "secp256k1/ct/point.hpp"  // ct::scalar_mul, ct::generator_mul
#include "secp256k1/detail/secure_erase.hpp"
#include <cstring>

namespace secp256k1::ltc {

using fast::Point;
using fast::Scalar;

// -- LTC-SP tagged hash constants (computed once at first use) ----------------

// "LTCSP/SharedSecret" — 18 bytes
static const SHA256::digest_type& ltcsp_shared_secret_tag() {
    static const auto tag = SHA256::hash(
        reinterpret_cast<const std::uint8_t*>("LTCSP/SharedSecret"), 18);
    return tag;
}

// H_LTCSP/SharedSecret(data) = SHA256(tag || tag || data)
static SHA256::digest_type ltcsp_hash_shared_secret(const std::array<std::uint8_t, 33>& S_comp,
                                                     std::uint32_t k) {
    const auto& tag = ltcsp_shared_secret_tag();
    SHA256 h;
    h.update(tag.data(), 32);
    h.update(tag.data(), 32);
    h.update(S_comp.data(), 33);
    std::uint8_t k_be[4] = {
        std::uint8_t(k >> 24), std::uint8_t(k >> 16),
        std::uint8_t(k >> 8),  std::uint8_t(k)
    };
    h.update(k_be, 4);
    return h.finalize();
}

// -- Paycode encoding ---------------------------------------------------------

std::string LtcSpAddress::encode() const {
    // Payload: version(1) + scan_pubkey(33) + spend_pubkey(33) = 67 bytes
    // Encode as bech32m with HRP "ltcsp" and witness_version=0
    auto scan_c  = scan_pubkey.to_compressed();
    auto spend_c = spend_pubkey.to_compressed();

    // Payload: scan_pubkey(33) + spend_pubkey(33) = 66 bytes
    // Encoded as bech32m (witness_version=1 → BIP-350 bech32m, no size restriction)
    std::array<std::uint8_t, 66> payload{};
    std::memcpy(payload.data(),      scan_c.data(),  33);
    std::memcpy(payload.data() + 33, spend_c.data(), 33);

    return bech32_encode("ltcsp", 1, payload.data(), 66);
}

// Parse a 33-byte compressed pubkey into a Point
static std::pair<fast::Point, bool> parse_compressed(const std::uint8_t* b33) {
    if (b33[0] != 0x02 && b33[0] != 0x03) return {{}, false};
    fast::FieldElement x;
    if (!fast::FieldElement::parse_bytes_strict(b33 + 1, x)) return {{}, false};
    auto y2 = x * x * x + fast::FieldElement::from_uint64(7);
    auto y  = y2.sqrt();
    if (!(y * y == y2)) return {{}, false};
    bool y_is_odd = (y.limbs()[0] & 1u) != 0;
    if (y_is_odd != (b33[0] == 0x03)) y = fast::FieldElement::zero() - y;
    return {fast::Point::from_affine(x, y), true};
}

std::pair<LtcSpAddress, bool> LtcSpAddress::decode(const std::string& paycode) {
    auto res = bech32m_paycode_decode(paycode);
    if (!res.valid || res.hrp != "ltcsp") return {{}, false};
    if (res.witness_program.size() != 66) return {{}, false};

    const auto* p = res.witness_program.data();
    // p[0..32] = scan_pubkey(33), p[33..65] = spend_pubkey(33)

    auto [scan_pt,  scan_ok]  = parse_compressed(p);
    auto [spend_pt, spend_ok] = parse_compressed(p + 33);
    if (!scan_ok || !spend_ok) return {{}, false};
    if (scan_pt.is_infinity() || spend_pt.is_infinity()) return {{}, false};

    LtcSpAddress addr;
    addr.scan_pubkey  = scan_pt;
    addr.spend_pubkey = spend_pt;
    return {addr, true};
}

// -- API implementations ------------------------------------------------------

LtcSpAddress ltcsp_address(const fast::Scalar& scan_privkey,
                            const fast::Scalar& spend_privkey) {
    LtcSpAddress addr;
    addr.scan_pubkey  = ct::generator_mul(scan_privkey);
    addr.spend_pubkey = ct::generator_mul(spend_privkey);
    return addr;
}

std::pair<fast::Point, fast::Scalar>
ltcsp_create_output(const std::vector<fast::Scalar>& input_privkeys,
                    const LtcSpAddress& recipient,
                    std::uint32_t k) {
    // Aggregate input private keys: a_sum = Σ a_i
    Scalar a_sum = Scalar::zero();
    for (const auto& a : input_privkeys) a_sum = a_sum + a;

    // Shared secret: S = a_sum × B_scan  (CT: a_sum is secret)
    Point S = ct::scalar_mul(recipient.scan_pubkey, a_sum);
    auto S_comp = S.to_compressed();

    // t_k = H_LTCSP/SharedSecret(ser(S) || ser32(k))
    auto t_hash = ltcsp_hash_shared_secret(S_comp, k);
    Scalar t_k = Scalar::from_bytes(t_hash);

    // Output key: P = B_spend + t_k × G
    Point P_output = recipient.spend_pubkey.add(ct::generator_mul(t_k));

    // Erase secret-derived material
    detail::secure_erase(&a_sum,   sizeof(a_sum));
    detail::secure_erase(S_comp.data(), S_comp.size());
    detail::secure_erase(t_hash.data(), t_hash.size());

    return {P_output, t_k};
}

std::vector<std::pair<std::uint32_t, fast::Scalar>>
ltcsp_scan(const fast::Scalar& scan_privkey,
           const fast::Scalar& spend_privkey,
           const std::vector<fast::Point>& input_pubkeys,
           const std::vector<std::array<std::uint8_t, 32>>& output_pubkeys) {
    std::vector<std::pair<std::uint32_t, Scalar>> results;

    // Aggregate input public keys: A_sum = Σ A_i
    Point A_sum = Point::infinity();
    for (const auto& A : input_pubkeys) A_sum = A_sum.add(A);
    if (A_sum.is_infinity()) return results;

    // Shared secret: S = b_scan × A_sum  (CT: b_scan is secret)
    Point S = ct::scalar_mul(A_sum, scan_privkey);
    auto S_comp = S.to_compressed();

    // Spend pubkey: B_spend = b_spend × G  (CT: b_spend is secret)
    Point B_spend = ct::generator_mul(spend_privkey);

    // Pre-build SHA256 midstate over tag || tag || S_comp
    // Avoids recomputing the constant prefix in the per-output loop.
    const auto& tag = ltcsp_shared_secret_tag();
    SHA256 h_base;
    h_base.update(tag.data(), 32);
    h_base.update(tag.data(), 32);
    h_base.update(S_comp.data(), 33);

    // Scan each output
    for (std::uint32_t k = 0; k < static_cast<std::uint32_t>(output_pubkeys.size()); ++k) {
        // t_k = H_LTCSP/SharedSecret(S_comp || ser32(k))
        SHA256 h = h_base;  // clone midstate (40-byte copy)
        std::uint8_t k_be[4] = {
            std::uint8_t(k >> 24), std::uint8_t(k >> 16),
            std::uint8_t(k >> 8),  std::uint8_t(k)
        };
        h.update(k_be, 4);
        auto t_hash = h.finalize();
        Scalar t_k = Scalar::from_bytes(t_hash);

        // Expected output: P = B_spend + t_k × G
        Point P_expected = B_spend.add(ct::generator_mul(t_k));
        if (P_expected.is_infinity()) continue;

        // Compare x-only output key
        auto P_x = P_expected.x().to_bytes();
        if (P_x == output_pubkeys[k]) {
            // Match: spend privkey = b_spend + t_k
            Scalar spend_key = spend_privkey + t_k;
            results.emplace_back(k, spend_key);
        }

        detail::secure_erase(t_hash.data(), t_hash.size());
    }

    // Erase secret-derived material
    detail::secure_erase(S_comp.data(), S_comp.size());

    return results;
}

} // namespace secp256k1::ltc
