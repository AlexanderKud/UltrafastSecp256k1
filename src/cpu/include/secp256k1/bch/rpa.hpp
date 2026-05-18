#pragma once
// ============================================================================
// rpa.hpp — BCH Reusable Payment Addresses
// ============================================================================
// Specification: github.com/imaginaryusername/Reusable_specs
//
// Protocol summary:
//   Sender:
//     1. Grind EC signature until SHA256(SHA256(sig))[0:prefix_bits] == paycode.prefix
//     2. Derive shared secret: c = H(H(e·Q) + s)
//        where e = sender input privkey, Q = recipient scan pubkey, s = outpoint int
//     3. Derive payment address: CKDpub(spend_pubkey, c, index)
//
//   Receiver:
//     1. Filter txs where SHA256(SHA256(input_sig))[0:prefix_bits] == my prefix
//     2. Derive shared secret: c = H(H(d·P) + s)
//        where d = scan privkey, P = sender input pubkey, s = outpoint int
//     3. Check if CKDpub(spend_pubkey, c, 0..N) matches any output
// ============================================================================

#include "bch_types.hpp"
#include "../scalar.hpp"
#include "../point.hpp"
#include <functional>
#include <optional>

namespace secp256k1::bch {

// ── Paycode parsing ────────────────────────────────────────────────────────────

// Parse a "paycode:..." string into RpaPaycode.
[[nodiscard]] std::optional<RpaPaycode> rpa_parse_paycode(
    std::string_view paycode_str) noexcept;

// Encode RpaPaycode to "paycode:..." string.
[[nodiscard]] std::string rpa_encode_paycode(const RpaPaycode& pc) noexcept;

// ── Shared secret derivation ──────────────────────────────────────────────────

// Compute the ECDH shared secret for RPA (sender side):
//   c = H(H(e·Q) + s)
// where:
//   input_privkey  = e (sender's input private key)
//   scan_pubkey    = Q (recipient's scan public key, 33 bytes compressed)
//   outpoint_bytes = serialized outpoint (txid || vout) used as s
[[nodiscard]] RpaSharedSecret rpa_sender_shared_secret(
    const fast::Scalar&      input_privkey,
    const uint8_t*           scan_pubkey33,
    const uint8_t*           outpoint_bytes,
    size_t                   outpoint_len) noexcept;

// Compute the ECDH shared secret for RPA (receiver/scanner side):
//   c = H(H(d·P) + s)
// where:
//   scan_privkey   = d (receiver's scan private key)
//   input_pubkey33 = P (sender's input public key, from tx)
//   outpoint_bytes = serialized outpoint matching the input
[[nodiscard]] RpaSharedSecret rpa_receiver_shared_secret(
    const fast::Scalar&      scan_privkey,
    const uint8_t*           input_pubkey33,
    const uint8_t*           outpoint_bytes,
    size_t                   outpoint_len) noexcept;

// ── Payment address derivation ────────────────────────────────────────────────

// Derive the i-th payment address from the shared secret.
// R'i = CKDpub(spend_pubkey, c, i)
// Returns compressed 33-byte public key for address i.
[[nodiscard]] std::array<uint8_t, 33> rpa_derive_payment_pubkey(
    const uint8_t*       spend_pubkey33,
    const RpaSharedSecret& secret,
    uint32_t             index = 0) noexcept;

// ── EC Grinding (CPU) ─────────────────────────────────────────────────────────
// Sender grinds ECDSA signatures until the double-SHA256 prefix matches.
// Uses RFC6979 deterministic nonce + extra_data nonce counter for grinding.
//
// prefix_bits: number of bits to match (0, 4, 8, 12, or 16)
// prefix_data: the target prefix bytes (from paycode.scan_pubkey prefix)
// max_tries:   grinding attempts before giving up (0 = unlimited)

using GrindProgressFn = std::function<void(uint32_t nonce)>;

[[nodiscard]] GrindResult rpa_grind_cpu(
    const fast::Scalar&  input_privkey,
    const uint8_t*       msg32,           // message to sign (tx sighash)
    uint8_t              prefix_bits,
    const uint8_t*       prefix_data,     // first ceil(prefix_bits/8) bytes to match
    uint32_t             max_tries   = 0,
    GrindProgressFn      on_progress = nullptr) noexcept;

// ── Prefix matching ────────────────────────────────────────────────────────────

// Check if double-SHA256(sig64) matches the given prefix.
[[nodiscard]] bool rpa_prefix_matches(
    const uint8_t* sig64,
    uint8_t        prefix_bits,
    const uint8_t* prefix_data) noexcept;

// Compute double-SHA256 of a compact signature.
[[nodiscard]] std::array<uint8_t, 32> rpa_sig_hash(
    const uint8_t* sig64) noexcept;

} // namespace secp256k1::bch
