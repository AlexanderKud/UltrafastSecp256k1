// sp_scanner.cpp — SilentPaymentScanner implementation (isolated TU for LTO)
#include "secp256k1/address.hpp"
#include "secp256k1/sha256.hpp"
#include "secp256k1/ct/point.hpp"
#include "secp256k1/detail/secure_erase.hpp"
#include "secp256k1/precompute.hpp"  // KPlan, batch_scalar_mul_generator
#include <cstring>

namespace secp256k1 {

using fast::Scalar;
using fast::Point;

// ── SilentPaymentScanner ─────────────────────────────────────────────────────

SilentPaymentScanner::SilentPaymentScanner(const fast::Scalar& scan_sk,
                                            const fast::Scalar& spend_sk)
    : scan_privkey_(scan_sk)
    , spend_privkey_(spend_sk)
    , spend_pubkey_(ct::generator_mul(spend_sk))  // precompute B_spend once
{}

std::vector<std::pair<std::uint32_t, fast::Scalar>>
SilentPaymentScanner::scan_tx(const std::vector<fast::Point>& input_pubkeys,
                               const std::vector<std::array<std::uint8_t, 32>>& output_pubkeys) const {
    std::vector<std::pair<std::uint32_t, Scalar>> results;

    Point A_sum = Point::infinity();
    for (const auto& A : input_pubkeys) A_sum = A_sum.add(A);
    if (A_sum.is_infinity()) return results;

    // S = b_scan × A_sum  — variable-time GLV: A_sum is public on-chain,
    // timing leaks nothing about scan_privkey to an attacker without oracle.
    Point S = A_sum.scalar_mul(scan_privkey_);
    auto S_comp = S.to_compressed();

    // Static tag hash — computed once (same pattern as LtcSpScanner)
    static const auto s_tag =
        SHA256::hash(reinterpret_cast<const std::uint8_t*>("BIP0352/SharedSecret"), 20);
    // Pre-build midstate: tag||tag||S_comp — only 4-byte k appended per output
    SHA256 h_base;
    h_base.update(s_tag.data(), 32);
    h_base.update(s_tag.data(), 32);
    h_base.update(S_comp.data(), 33);

    for (std::uint32_t k = 0; k < static_cast<std::uint32_t>(output_pubkeys.size()); ++k) {
        SHA256 h = h_base;
        std::uint8_t k_be[4] = {
            std::uint8_t(k >> 24), std::uint8_t(k >> 16),
            std::uint8_t(k >> 8),  std::uint8_t(k)
        };
        h.update(k_be, 4);
        auto t_hash = h.finalize();
        Scalar t_k = Scalar::from_bytes(t_hash);

        // t_k is SHA256 output — uniform random, no CT needed here
        Point expected = spend_pubkey_.add(Point::generator().scalar_mul(t_k));
        if (!expected.is_infinity()) {
            auto expected_x = expected.x().to_bytes();
            if (expected_x == output_pubkeys[k])
                results.emplace_back(k, spend_privkey_ + t_k);
        }
        detail::secure_erase(t_hash.data(), t_hash.size());
    }

    detail::secure_erase(S_comp.data(), S_comp.size());
    return results;
}


// ── SilentPaymentScanner::scan_batch ─────────────────────────────────────────
// Same pipeline as LtcSpScanner::scan_batch with BIP0352/SharedSecret tag.

std::vector<SilentPaymentScanner::BatchMatch>
SilentPaymentScanner::scan_batch(
    const std::vector<std::vector<fast::Point>>& input_pubkeys_per_tx,
    const std::vector<std::vector<std::array<std::uint8_t, 32>>>& outputs_per_tx) const
{
    using fast::Point;
    using fast::Scalar;

    std::vector<BatchMatch> results;
    const std::size_t N = input_pubkeys_per_tx.size();
    if (N == 0) return results;

    // Thread-local scratch (no heap after first call per thread)
    static thread_local std::vector<Point>                    tl_a_sums;
    static thread_local std::vector<Point>                    tl_shared;
    static thread_local std::vector<std::array<uint8_t,33>>   tl_S_comps;
    static thread_local std::vector<uint64_t>                 tl_out_map;
    static thread_local std::vector<Scalar>                   tl_t_scalars;
    static thread_local std::vector<Point>                    tl_candidates;
    static thread_local std::vector<std::array<uint8_t,32>>   tl_x_bytes;

    tl_a_sums.assign(N, Point::infinity());
    for (std::size_t i = 0; i < N; ++i)
        for (const auto& P : input_pubkeys_per_tx[i])
            tl_a_sums[i] = tl_a_sums[i].add(P);

    fast::KPlan plan = fast::KPlan::from_scalar(scan_privkey_);
    tl_shared.resize(N);
    Point::batch_scalar_mul_fixed_k(plan, tl_a_sums.data(), N, tl_shared.data());

    tl_S_comps.resize(N);
    Point::batch_to_compressed(tl_shared.data(), N, tl_S_comps.data());

    static const std::array<std::uint32_t, 8> s_base = []() noexcept {
        const auto tag = SHA256::hash(
            reinterpret_cast<const std::uint8_t*>("BIP0352/SharedSecret"), 20);
        std::uint8_t blk[64];
        std::memcpy(blk,      tag.data(), 32);
        std::memcpy(blk + 32, tag.data(), 32);
        std::array<std::uint32_t, 8> st = {
            0x6a09e667u, 0xbb67ae85u, 0x3c6ef372u, 0xa54ff53au,
            0x510e527fu, 0x9b05688cu, 0x1f83d9abu, 0x5be0cd19u
        };
        detail::sha256_compress_dispatch(blk, st.data());
        return st;
    }();

    tl_out_map.clear();
    tl_t_scalars.clear();

    for (std::uint32_t tx = 0; tx < static_cast<std::uint32_t>(N); ++tx) {
        if (tl_shared[tx].is_infinity()) continue;
        const auto& S_comp = tl_S_comps[tx];
        std::uint8_t blk[64];
        std::memcpy(blk, S_comp.data(), 33);
        blk[37] = 0x80;
        std::memset(blk + 38, 0, 24);
        blk[62] = 0x03; blk[63] = 0x28;

        const auto& outs = outputs_per_tx[tx];
        for (std::uint32_t k = 0; k < static_cast<std::uint32_t>(outs.size()); ++k) {
            blk[33] = uint8_t(k>>24); blk[34] = uint8_t(k>>16);
            blk[35] = uint8_t(k>>8);  blk[36] = uint8_t(k);
            std::array<std::uint32_t,8> h;
            std::memcpy(h.data(), s_base.data(), 32);
            detail::sha256_compress_dispatch(blk, h.data());
            std::array<uint8_t,32> t_bytes;
            for (int b = 0; b < 8; ++b) {
                t_bytes[b*4+0]=uint8_t(h[b]>>24); t_bytes[b*4+1]=uint8_t(h[b]>>16);
                t_bytes[b*4+2]=uint8_t(h[b]>>8);  t_bytes[b*4+3]=uint8_t(h[b]);
            }
            tl_out_map.push_back((uint64_t(tx)<<32)|k);
            tl_t_scalars.push_back(Scalar::from_bytes(t_bytes));
        }
    }

    if (tl_t_scalars.empty()) return results;
    const std::size_t M = tl_t_scalars.size();

    std::vector<Point> out_jac(M);
    fast::batch_scalar_mul_generator(tl_t_scalars.data(), out_jac.data(), M);

    tl_candidates.resize(M);
    for (std::size_t i = 0; i < M; ++i)
        tl_candidates[i] = spend_pubkey_.add(out_jac[i]);

    tl_x_bytes.resize(M);
    Point::batch_x_only_bytes(tl_candidates.data(), M, tl_x_bytes.data());

    for (std::size_t i = 0; i < M; ++i) {
        std::uint32_t tx = uint32_t(tl_out_map[i]>>32);
        std::uint32_t k  = uint32_t(tl_out_map[i]&0xffffffff);
        if (tl_x_bytes[i] == outputs_per_tx[tx][k])
            results.push_back({tx, k, spend_privkey_ + tl_t_scalars[i]});
    }
    return results;
}

} // namespace secp256k1
