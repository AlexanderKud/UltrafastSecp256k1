// ============================================================================
// bch_scan.cpp — BCH RPA scan pipeline
// ============================================================================
#include "secp256k1/bch/bch_scan.hpp"
#include <cstring>

namespace secp256k1::bch {

RpaScanner::RpaScanner(const RpaPaycode& paycode,
                       const fast::Scalar& scan_privkey)
    : paycode_(paycode)
    , scan_privkey_(scan_privkey)
    , network_(paycode.network()) {}

bool RpaScanner::prefix_matches(const uint8_t* sig64) const noexcept {
    if (paycode_.prefix_bits == 0) return true;
    // prefix is derived from first prefix_bits bits of scan_pubkey
    return rpa_prefix_matches(sig64, paycode_.prefix_bits,
                              paycode_.scan_pubkey.data());
}

std::optional<ScanMatch> RpaScanner::scan_tx(
    const ScanTx& tx, uint32_t max_key_index) const noexcept {

    // Build outpoint bytes: txid(32) || vout(4 LE)
    uint8_t outpoint[36];
    std::memcpy(outpoint, tx.txid.data(), 32);
    outpoint[32] = tx.vout & 0xff;
    outpoint[33] = (tx.vout >> 8) & 0xff;
    outpoint[34] = (tx.vout >> 16) & 0xff;
    outpoint[35] = (tx.vout >> 24) & 0xff;

    // Derive shared secret: d · P
    auto secret = rpa_receiver_shared_secret(
        scan_privkey_,
        tx.input_pubkey.data(),
        outpoint, sizeof(outpoint));

    // Check each output against derived addresses
    for (uint32_t i = 0; i <= max_key_index; ++i) {
        auto payment_pubkey = rpa_derive_payment_pubkey(
            paycode_.spend_pubkey.data(), secret, i);
        if (payment_pubkey[0] == 0) continue;

        for (uint32_t j = 0; j < tx.outputs.size(); ++j) {
            if (std::memcmp(payment_pubkey.data(),
                            tx.outputs[j].data(), 33) == 0) {
                ScanMatch match;
                match.txid         = tx.txid;
                match.output_index = j;
                match.key_index    = i;
                match.payment_pubkey = payment_pubkey;
                match.cashaddr = cashaddr_from_pubkey(
                    payment_pubkey.data(), network_);
                return match;
            }
        }
    }
    return std::nullopt;
}

std::vector<ScanMatch> RpaScanner::scan_batch_cpu(
    const std::vector<ScanTx>& txs,
    uint32_t max_key_index) const noexcept {

    std::vector<ScanMatch> results;
    for (const auto& tx : txs) {
        if (auto m = scan_tx(tx, max_key_index))
            results.push_back(std::move(*m));
    }
    return results;
}

std::vector<ScanMatch> RpaScanner::scan_batch(
    const std::vector<ScanTx>& txs,
    uint32_t max_key_index) const noexcept {
    // GPU path: TODO (when SECP256K1_ENABLE_CUDA/OPENCL)
    return scan_batch_cpu(txs, max_key_index);
}

ScanRateEstimate estimate_scan_rate(uint8_t prefix_bits) noexcept {
    ScanRateEstimate est{};
    // Filter ratio: 1 / 2^prefix_bits txs pass prefix filter
    double filter_ratio = (prefix_bits == 0) ? 1.0
        : 1.0 / static_cast<double>(1ULL << prefix_bits);
    // Approximate: CPU can do ~100K ECDH/s, BCH ~1M tx/day
    est.cpu_tx_per_sec   = 100'000.0 * (1.0 / filter_ratio);
    est.gpu_tx_per_sec   = 0.0; // set when GPU kernel implemented
    est.chain_tx_per_day = 1'000'000.0;
    double scan_tx_per_day = est.cpu_tx_per_sec * 86400.0 * filter_ratio;
    est.days_to_full_sync = est.chain_tx_per_day / scan_tx_per_day;
    return est;
}

} // namespace secp256k1::bch
