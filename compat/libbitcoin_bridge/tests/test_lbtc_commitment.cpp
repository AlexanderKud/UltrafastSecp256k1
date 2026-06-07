/**
 * test_lbtc_commitment.cpp — BIP-341 Taproot commitment batch
 * (ufsecp_lbtc_verify_commitment).
 *
 * Each row checks: Q = lift_x(internal, even-y) + tweak*G has x(Q)==tweaked_x and
 * y-parity(Q)==parity. Ground truth is generated with, and cross-checked against,
 * the shim's native secp256k1_xonly_pubkey_tweak_add / _tweak_add_check (so the
 * batch is validated against the canonical per-call path, not against itself).
 *
 * Standalone:
 *   g++ -std=c++20 -I ../include -I ../../libsecp256k1_shim/include \
 *       -I ../../../include/ufsecp test_lbtc_commitment.cpp -lufsecp -o test_lbtc_commitment
 */
#include "ufsecp_libbitcoin.h"
#include "ufsecp.h"
#include "secp256k1.h"
#include "secp256k1_extrakeys.h"

#include <cstdint>
#include <cstdio>
#include <cstring>
#include <vector>

static int g_fail = 0;
#define CHECK(cond, msg)                                                        \
    do {                                                                        \
        if (!(cond)) { std::printf("  FAIL: %s\n", msg); ++g_fail; }            \
        else         { std::printf("  ok  : %s\n", msg); }                      \
    } while (0)

int main() {
    secp256k1_context* sctx =
        secp256k1_context_create(SECP256K1_CONTEXT_VERIFY | SECP256K1_CONTEXT_SIGN);
    ufsecp_ctx* uctx = nullptr;
    if (ufsecp_ctx_create(&uctx) != UFSECP_OK) { std::printf("ctx fail\n"); return 1; }
    ufsecp_lbtc_ctrl* ctrl = nullptr;
    if (ufsecp_lbtc_ctrl_create(&ctrl, UFSECP_LBTC_AUTO) != UFSECP_OK || !ctrl) {
        std::printf("ctrl fail\n"); return 1;
    }

    const size_t N = 1000;
    std::vector<uint8_t> ix(N*32), tw(N*32), tx(N*32), par(N);
    std::vector<secp256k1_xonly_pubkey> ixo(N);
    for (size_t i = 0; i < N; ++i) {
        uint8_t sk[32] = {0};
        sk[24]=(uint8_t)(i>>24); sk[25]=(uint8_t)(i>>16); sk[26]=(uint8_t)(i>>8); sk[31]=(uint8_t)(i|1u);
        uint8_t p33[33];
        if (ufsecp_pubkey_create(uctx, sk, p33) != UFSECP_OK) { ++g_fail; continue; }
        std::memcpy(ix.data()+i*32, p33+1, 32);              /* x-only internal */
        for (int b=0;b<32;++b) tw[i*32+b]=(uint8_t)(((i*2654435761u+b*7u+1)>>(b%24))|((b==31)?1u:0u));
        secp256k1_xonly_pubkey_parse(sctx, &ixo[i], ix.data()+i*32);
        secp256k1_pubkey twk;
        if (!secp256k1_xonly_pubkey_tweak_add(sctx, &twk, &ixo[i], tw.data()+i*32)) { ++g_fail; continue; }
        uint8_t c33[33]; size_t L=33;
        secp256k1_ec_pubkey_serialize(sctx, c33, &L, &twk, SECP256K1_EC_COMPRESSED);
        std::memcpy(tx.data()+i*32, c33+1, 32);
        par[i] = (c33[0]==0x03) ? 1 : 0;
    }

    /* (1) all-valid batch -> every result 1, and matches the shim per-call check */
    std::vector<uint8_t> res(N, 0);
    ufsecp_lbtc_verify_commitment(ctrl, ix.data(), tw.data(), tx.data(), par.data(), N, res.data());
    bool all_one = true, match_shim = true;
    for (size_t i = 0; i < N; ++i) {
        if (res[i] != 1) all_one = false;
        int shim = secp256k1_xonly_pubkey_tweak_add_check(sctx, tx.data()+i*32, par[i], &ixo[i], tw.data()+i*32);
        if ((res[i]==1) != (shim==1)) match_shim = false;
    }
    CHECK(all_one, "all-valid batch: every result == 1");
    CHECK(match_shim, "batch verdict matches shim tweak_add_check per row");

    /* (2) corrupt a subset of tweaked keys -> exactly those rows reject */
    const size_t bad[] = {0, 3, 17, 499, 999};
    for (size_t i : bad) tx[i*32] ^= 0x01;                    /* flip tweaked_x */
    std::fill(res.begin(), res.end(), 0xAA);
    ufsecp_lbtc_verify_commitment(ctrl, ix.data(), tw.data(), tx.data(), par.data(), N, res.data());
    auto is_bad = [&](size_t i){ for (size_t x:bad) if (x==i) return true; return false; };
    bool sel_ok = true;
    for (size_t i = 0; i < N; ++i) if ((res[i]==1) == is_bad(i)) sel_ok = false;
    CHECK(sel_ok, "corrupted rows reject, all others accept");
    for (size_t i : bad) tx[i*32] ^= 0x01;                    /* restore */

    /* (3) wrong parity -> reject */
    std::fill(res.begin(), res.end(), 0);
    std::vector<uint8_t> badpar = par; badpar[7] ^= 1;
    ufsecp_lbtc_verify_commitment(ctrl, ix.data(), tw.data(), tx.data(), badpar.data(), N, res.data());
    CHECK(res[7]==0 && res[6]==1 && res[8]==1, "flipped parity rejects only that row");

    /* (4) degenerate calls are fail-closed no-ops */
    std::vector<uint8_t> z(4, 0xCC);
    ufsecp_lbtc_verify_commitment(ctrl, ix.data(), tw.data(), tx.data(), par.data(), 0, z.data());
    CHECK(z[0]==0xCC, "n==0 is a no-op (results untouched)");
    std::vector<uint8_t> z2(4, 0xCC);
    ufsecp_lbtc_verify_commitment(ctrl, nullptr, tw.data(), tx.data(), par.data(), 4, z2.data());
    bool null_all_zeroed = true;
    for (uint8_t b : z2) if (b != 0) null_all_zeroed = false;  /* every byte zeroed = no row accepted */
    CHECK(null_all_zeroed, "NULL input zeroes every result byte (no row left accepted)");

    /* (5) GPU RLC aggregate fast-check (commitment_batch_ok). Skips when no GPU. */
    {
        int ok = ufsecp_lbtc_commitment_batch_ok(ctrl, ix.data(), tw.data(), tx.data(), par.data(), N);
        if (ok < 0) {
            std::printf("  skip: commitment_batch_ok — no GPU build/device (returned -1)\n");
        } else {
            CHECK(ok == 1, "GPU RLC: all-valid batch returns 1");
            uint8_t saved = tx[11*32]; tx[11*32] ^= 0x01;     /* one invalid row */
            int bad = ufsecp_lbtc_commitment_batch_ok(ctrl, ix.data(), tw.data(), tx.data(), par.data(), N);
            tx[11*32] = saved;
            CHECK(bad == 0, "GPU RLC: one corrupted row returns 0 (Fiat-Shamir catches it)");
            /* a second, different corrupted position also rejects */
            uint8_t s2 = tx[800*32]; tx[800*32] ^= 0x80;
            int bad2 = ufsecp_lbtc_commitment_batch_ok(ctrl, ix.data(), tw.data(), tx.data(), par.data(), N);
            tx[800*32] = s2;
            CHECK(bad2 == 0, "GPU RLC: a different corrupted row also returns 0");
        }
    }

    ufsecp_lbtc_ctrl_destroy(ctrl);
    ufsecp_ctx_destroy(uctx);
    secp256k1_context_destroy(sctx);
    std::printf("\n%s\n", g_fail==0 ? "ALL PASS" : "FAILURES PRESENT");
    return g_fail==0 ? 0 : 1;
}
