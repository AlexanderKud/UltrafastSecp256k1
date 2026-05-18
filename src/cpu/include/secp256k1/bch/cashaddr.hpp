#pragma once
// ============================================================================
// cashaddr.hpp — CashAddr encode/decode for BCH addresses
// ============================================================================
// Implements the CashAddr address format used by Bitcoin Cash.
// Reference: https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md
//
// Prefixes:
//   mainnet  → "bitcoincash:"
//   testnet  → "bchtest:"
//   chipnet  → "chipnet:"
//   regtest  → "bchreg:"
// ============================================================================

#include "bch_types.hpp"
#include <string>
#include <optional>
#include <cstdint>

namespace secp256k1::bch {

// ── Constants ─────────────────────────────────────────────────────────────────
constexpr std::string_view CASHADDR_PREFIX_MAINNET = "bitcoincash";
constexpr std::string_view CASHADDR_PREFIX_TESTNET = "bchtest";
constexpr std::string_view CASHADDR_PREFIX_CHIPNET = "chipnet";
constexpr std::string_view CASHADDR_PREFIX_REGTEST = "bchreg";

// ── Encode ────────────────────────────────────────────────────────────────────

// Encode a hash160 (20 bytes) or hash256 (32 bytes) as a CashAddr string.
// Returns "bitcoincash:qp..." style string with prefix.
[[nodiscard]] std::string cashaddr_encode(
    const uint8_t* hash,
    size_t         hash_len,    // 20 or 32
    AddrType       type,
    Network        network = Network::Mainnet) noexcept;

// Convenience: encode from array
template<size_t N>
[[nodiscard]] std::string cashaddr_encode(
    const std::array<uint8_t, N>& hash,
    AddrType type,
    Network  network = Network::Mainnet) noexcept {
    return cashaddr_encode(hash.data(), N, type, network);
}

// ── Decode ────────────────────────────────────────────────────────────────────

// Decode a CashAddr string (with or without prefix) into hash + type + network.
// Returns nullopt on invalid input (bad checksum, unknown version, etc).
[[nodiscard]] std::optional<CashAddr> cashaddr_decode(
    std::string_view addr) noexcept;

// ── Pubkey → P2PKH address ────────────────────────────────────────────────────

// Derive P2PKH CashAddr from a 33-byte compressed public key.
// hash160 = RIPEMD160(SHA256(pubkey))
[[nodiscard]] std::string cashaddr_from_pubkey(
    const uint8_t* pubkey33,
    Network        network = Network::Mainnet) noexcept;

// ── Script hash → P2SH address ───────────────────────────────────────────────

[[nodiscard]] std::string cashaddr_from_script_hash(
    const uint8_t* hash20,
    Network        network = Network::Mainnet) noexcept;

// ── Validation ────────────────────────────────────────────────────────────────

[[nodiscard]] bool cashaddr_is_valid(std::string_view addr) noexcept;

} // namespace secp256k1::bch
