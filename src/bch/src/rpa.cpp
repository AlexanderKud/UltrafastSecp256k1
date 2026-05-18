// ============================================================================
// rpa.cpp — BCH Reusable Payment Addresses implementation
// ============================================================================
#include "secp256k1/bch/rpa.hpp"
#include "secp256k1/sha256.hpp"
#include "secp256k1/ecdsa.hpp"
#include "secp256k1/ct/point.hpp"
#include "secp256k1/ct/sign.hpp"
#include <cstring>
#include <vector>

namespace secp256k1::bch {

// ── SHA256 helpers ────────────────────────────────────────────────────────────

static SHA256::digest_type sha256_bytes(const uint8_t* data, size_t len) noexcept {
    SHA256 h;
    h.update(data, len);
    return h.final();
}

static SHA256::digest_type sha256_double(const uint8_t* data, size_t len) noexcept {
    auto first = sha256_bytes(data, len);
    return sha256_bytes(first.data(), first.size());
}

// ── Shared secret helpers ─────────────────────────────────────────────────────

// H(H(point_compressed) || outpoint_bytes)
static RpaSharedSecret derive_shared_secret(
    const fast::Point& ecdh_point,
    const uint8_t* outpoint_bytes,
    size_t outpoint_len) noexcept {

    // Inner: SHA256(compressed_point)
    auto compressed = ecdh_point.to_compressed();
    auto inner = sha256_bytes(compressed.data(), compressed.size());

    // Outer: SHA256(inner || outpoint)
    std::vector<uint8_t> outer_input(32 + outpoint_len);
    std::memcpy(outer_input.data(), inner.data(), 32);
    if (outpoint_len > 0)
        std::memcpy(outer_input.data() + 32, outpoint_bytes, outpoint_len);

    RpaSharedSecret result{};
    auto outer = sha256_bytes(outer_input.data(), outer_input.size());
    result.value = outer;
    return result;
}

// Parse compressed 33-byte pubkey → Point. Returns infinity on failure.
static fast::Point parse_pubkey(const uint8_t* pubkey33) noexcept {
    EcdsaPublicKey epk{};
    if (!secp256k1::ecdsa_pubkey_parse(epk, pubkey33, 33))
        return fast::Point::infinity();
    return epk.point;
}

RpaSharedSecret rpa_sender_shared_secret(
    const fast::Scalar& input_privkey,
    const uint8_t* scan_pubkey33,
    const uint8_t* outpoint_bytes,
    size_t outpoint_len) noexcept {

    fast::Point Q = parse_pubkey(scan_pubkey33);
    if (Q.is_infinity()) return {};
    // CT: input_privkey is secret
    fast::Point ecdh_point = secp256k1::ct::scalar_mul(Q, input_privkey);
    return derive_shared_secret(ecdh_point, outpoint_bytes, outpoint_len);
}

RpaSharedSecret rpa_receiver_shared_secret(
    const fast::Scalar& scan_privkey,
    const uint8_t* input_pubkey33,
    const uint8_t* outpoint_bytes,
    size_t outpoint_len) noexcept {

    fast::Point P = parse_pubkey(input_pubkey33);
    if (P.is_infinity()) return {};
    // CT: scan_privkey is secret
    fast::Point ecdh_point = secp256k1::ct::scalar_mul(P, scan_privkey);
    return derive_shared_secret(ecdh_point, outpoint_bytes, outpoint_len);
}

// ── Payment address derivation ────────────────────────────────────────────────

std::array<uint8_t, 33> rpa_derive_payment_pubkey(
    const uint8_t* spend_pubkey33,
    const RpaSharedSecret& secret,
    uint32_t index) noexcept {

    // Tweak = SHA256(spend_pubkey33 || secret.value || index_BE)
    std::array<uint8_t, 33 + 32 + 4> input{};
    std::memcpy(input.data(), spend_pubkey33, 33);
    std::memcpy(input.data() + 33, secret.value.data(), 32);
    input[65] = (index >> 24) & 0xff;
    input[66] = (index >> 16) & 0xff;
    input[67] = (index >>  8) & 0xff;
    input[68] =  index        & 0xff;

    auto tweak_bytes = sha256_bytes(input.data(), input.size());
    fast::Scalar t   = fast::Scalar::from_bytes(tweak_bytes.data());

    // child_pubkey = spend_pubkey + t*G (public data — variable-time ok)
    fast::Point P = parse_pubkey(spend_pubkey33);
    if (P.is_infinity()) return {};

    // t*G using generator mul (public scalar — fast path)
    fast::Point tG = fast::Point::generator_scalar_mul(t);
    fast::Point child = P.add(tG);
    if (child.is_infinity()) return {};

    auto comp = child.to_compressed();
    std::array<uint8_t, 33> result{};
    std::memcpy(result.data(), comp.data(), 33);
    return result;
}

// ── Prefix matching ────────────────────────────────────────────────────────────

std::array<uint8_t, 32> rpa_sig_hash(const uint8_t* sig64) noexcept {
    SHA256::digest_type inner = sha256_bytes(sig64, 64);
    return sha256_bytes(inner.data(), 32);
}

bool rpa_prefix_matches(const uint8_t* sig64,
                        uint8_t prefix_bits,
                        const uint8_t* prefix_data) noexcept {
    if (prefix_bits == 0) return true;
    auto hash = rpa_sig_hash(sig64);
    uint8_t full_bytes = prefix_bits / 8;
    uint8_t rem_bits   = prefix_bits % 8;
    if (std::memcmp(hash.data(), prefix_data, full_bytes) != 0) return false;
    if (rem_bits == 0) return true;
    uint8_t mask = static_cast<uint8_t>(0xff << (8 - rem_bits));
    return (hash[full_bytes] & mask) == (prefix_data[full_bytes] & mask);
}

// ── EC Grinding (CPU) ─────────────────────────────────────────────────────────

GrindResult rpa_grind_cpu(
    const fast::Scalar& input_privkey,
    const uint8_t* msg32,
    uint8_t prefix_bits,
    const uint8_t* prefix_data,
    uint32_t max_tries,
    GrindProgressFn on_progress) noexcept {

    GrindResult result{};

    for (uint32_t nonce = 0; max_tries == 0 || nonce < max_tries; ++nonce) {
        if (on_progress && (nonce & 0xfff) == 0)
            on_progress(nonce);

        // RFC6979 extra data = 4-byte nonce counter
        std::array<uint8_t, 4> extra = {
            uint8_t(nonce >> 24), uint8_t(nonce >> 16),
            uint8_t(nonce >>  8), uint8_t(nonce)
        };

        // CT ECDSA sign — nonce derived from RFC6979 + extra
        auto sig_opt = secp256k1::ct::ecdsa_sign(msg32, input_privkey, extra.data());
        if (!sig_opt) continue;

        auto compact = sig_opt->to_compact();
        if (rpa_prefix_matches(compact.data(), prefix_bits, prefix_data)) {
            result.found = true;
            result.nonce = nonce;
            std::memcpy(result.signature.data(), compact.data(), 64);
            result.input_hash = rpa_sig_hash(compact.data());
            return result;
        }
    }
    return result;
}

// ── Paycode parsing (stub) ────────────────────────────────────────────────────

std::optional<RpaPaycode> rpa_parse_paycode(std::string_view) noexcept {
    // TODO: base32 paycode parsing
    return std::nullopt;
}

std::string rpa_encode_paycode(const RpaPaycode&) noexcept {
    // TODO: base32 paycode encoding
    return {};
}

} // namespace secp256k1::bch
