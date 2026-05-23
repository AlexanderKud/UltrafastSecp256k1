// ============================================================================
// test_regression_musig_noncegen_extra_input.cpp
// ============================================================================
// Behavioral freeze test for SHIM-NONCEGEN-001:
//
//   secp256k1_musig_nonce_gen() accepts extra_input32 but does NOT forward it
//   to the internal nonce derivation. Callers passing extra_input32 for
//   additional entropy receive nonces identical to callers passing NULL.
//
//   This is a documented limitation (SHIM_KNOWN_DIVERGENCES.md §SHIM-NONCEGEN-001).
//   Fix requires a non-trivial API change to the internal musig2_nonce_gen path.
//   For Bitcoin Core usage extra_input32 is NULL — no impact on production path.
//
// Sub-tests:
//   [1] Source scan: shim_musig.cpp has SHIM-NONCEGEN-001 marker
//   [2] Behavioral freeze: pubnonce with extra_input32=NULL == pubnonce with extra_input32=non-NULL
//   [3] Behavioral freeze: two non-NULL extra_input32 values produce identical pubnonces
//
// NOTE: All three tests assert that nonces ARE identical — this confirms the
// documented ignore-behavior. When SHIM-NONCEGEN-001 is fixed, [2] and [3]
// will start FAILING (pubnonces will differ), which will be the correct signal
// to remove the advisory flag and promote this to mandatory.
// ============================================================================

#ifndef UNIFIED_AUDIT_RUNNER
#define STANDALONE_TEST
#endif

#include "secp256k1.h"
#include "secp256k1_musig.h"

#include <cstdio>
#include <cstdint>
#include <cstring>
#include <fstream>
#include <string>

namespace {

static int g_pass = 0, g_fail = 0;

#define CHECK(cond, msg) do { \
    if (cond) { ++g_pass; } \
    else { ++g_fail; std::printf("  [FAIL] %s\n", (msg)); } \
} while(0)

// ── [1] Source scan: SHIM-NONCEGEN-001 marker ───────────────────────────────

static void test_source_marker_present() {
    std::printf("  [NONCEGEN-1] Source scan: SHIM-NONCEGEN-001 comment in shim_musig.cpp\n");

    const char* paths[] = {
        "compat/libsecp256k1_shim/src/shim_musig.cpp",
        "../compat/libsecp256k1_shim/src/shim_musig.cpp",
        "../../compat/libsecp256k1_shim/src/shim_musig.cpp",
        nullptr
    };
    std::string src;
    for (int i = 0; paths[i]; ++i) {
        std::ifstream f(paths[i]);
        if (f.is_open()) {
            src = {std::istreambuf_iterator<char>(f), std::istreambuf_iterator<char>()};
            break;
        }
    }
    if (src.empty()) {
        std::printf("  [SKIP] shim_musig.cpp not found — source scan skipped\n");
        return;
    }
    bool has_marker = src.find("SHIM-NONCEGEN-001") != std::string::npos;
    CHECK(has_marker, "shim_musig.cpp: SHIM-NONCEGEN-001 marker present (documents extra_input32 limitation)");
    bool has_todo = src.find("extra_input32") != std::string::npos;
    CHECK(has_todo, "shim_musig.cpp: extra_input32 referenced in code comment (SHIM-NONCEGEN-001)");
}

// ── [2] Behavioral freeze: NULL vs non-NULL extra_input32 ───────────────────

static void test_null_vs_nonnull_extra_input() {
    std::printf("  [NONCEGEN-2] Behavioral freeze: NULL vs non-NULL extra_input32 → identical pubnonce\n");
    std::printf("  (This PASSES when extra_input32 is ignored; FAILS if/when SHIM-NONCEGEN-001 is fixed)\n");

    secp256k1_context* ctx = secp256k1_context_create(SECP256K1_CONTEXT_SIGN);
    if (!ctx) {
        std::printf("  [SKIP] context creation failed\n");
        return;
    }

    // Fixed private key
    unsigned char sk[32] = {};
    sk[31] = 0x37;

    // Derive public key
    secp256k1_pubkey pubkey{};
    if (!secp256k1_ec_pubkey_create(ctx, &pubkey, sk)) {
        std::printf("  [SKIP] pubkey_create failed\n");
        secp256k1_context_destroy(ctx);
        return;
    }

    // Fixed session_id32 — deterministic nonce source
    unsigned char session_id[32] = {};
    for (int i = 0; i < 32; ++i) session_id[i] = (unsigned char)(i + 1);

    unsigned char msg[32] = {};
    msg[0] = 0xAB; msg[31] = 0xCD;

    // extra_input32 value (non-NULL)
    unsigned char extra[32] = {};
    for (int i = 0; i < 32; ++i) extra[i] = (unsigned char)(0x80 + i);

    // Call 1: extra_input32 = NULL
    secp256k1_musig_secnonce secnonce1{};
    secp256k1_musig_pubnonce pubnonce1{};
    int r1 = secp256k1_musig_nonce_gen(ctx, &secnonce1, &pubnonce1,
                                        session_id, sk, &pubkey, msg,
                                        nullptr, nullptr);

    // Call 2: extra_input32 = non-NULL
    secp256k1_musig_secnonce secnonce2{};
    secp256k1_musig_pubnonce pubnonce2{};
    int r2 = secp256k1_musig_nonce_gen(ctx, &secnonce2, &pubnonce2,
                                        session_id, sk, &pubkey, msg,
                                        nullptr, extra);

    CHECK(r1 == 1, "NONCEGEN-2: nonce_gen (NULL extra) returns 1");
    CHECK(r2 == 1, "NONCEGEN-2: nonce_gen (non-NULL extra) returns 1");

    // BEHAVIORAL FREEZE: pubnonces must be identical (extra_input32 is ignored)
    bool same = (std::memcmp(pubnonce1.data, pubnonce2.data, sizeof(pubnonce1.data)) == 0);
    CHECK(same, "NONCEGEN-2: pubnonce identical with NULL vs non-NULL extra_input32 (SHIM-NONCEGEN-001 freeze)");
    if (same) {
        std::printf("  OK: pubnonce is data-independent of extra_input32 (expected until SHIM-NONCEGEN-001 fixed)\n");
    } else {
        std::printf("  NOTE: pubnonce DIFFERS — SHIM-NONCEGEN-001 may be fixed; update test advisory flag\n");
    }

    secp256k1_context_destroy(ctx);
}

// ── [3] Behavioral freeze: two distinct non-NULL extra_input32 ──────────────

static void test_two_nonnull_extra_inputs() {
    std::printf("  [NONCEGEN-3] Behavioral freeze: two distinct non-NULL extra_input32 → identical pubnonces\n");

    secp256k1_context* ctx = secp256k1_context_create(SECP256K1_CONTEXT_SIGN);
    if (!ctx) {
        std::printf("  [SKIP] context creation failed\n");
        return;
    }

    unsigned char sk[32] = {};
    sk[31] = 0x5B;
    secp256k1_pubkey pubkey{};
    if (!secp256k1_ec_pubkey_create(ctx, &pubkey, sk)) {
        std::printf("  [SKIP] pubkey_create failed\n");
        secp256k1_context_destroy(ctx);
        return;
    }

    unsigned char session_id[32] = {};
    for (int i = 0; i < 32; ++i) session_id[i] = (unsigned char)(i + 7);

    unsigned char msg[32] = { 0x11 };

    unsigned char extra_a[32] = {};
    unsigned char extra_b[32] = {};
    for (int i = 0; i < 32; ++i) { extra_a[i] = (unsigned char)(i); extra_b[i] = (unsigned char)(255 - i); }

    secp256k1_musig_secnonce sna{}, snb{};
    secp256k1_musig_pubnonce pna{}, pnb{};
    int ra = secp256k1_musig_nonce_gen(ctx, &sna, &pna, session_id, sk, &pubkey, msg, nullptr, extra_a);
    int rb = secp256k1_musig_nonce_gen(ctx, &snb, &pnb, session_id, sk, &pubkey, msg, nullptr, extra_b);

    CHECK(ra == 1 && rb == 1, "NONCEGEN-3: both nonce_gen calls return 1");

    bool same = (std::memcmp(pna.data, pnb.data, sizeof(pna.data)) == 0);
    CHECK(same, "NONCEGEN-3: pubnonce identical for two distinct extra_input32 values (SHIM-NONCEGEN-001 freeze)");

    secp256k1_context_destroy(ctx);
}

} // anonymous namespace

// ── Entry point ─────────────────────────────────────────────────────────────

int test_regression_musig_noncegen_extra_input_run() {
    g_pass = 0; g_fail = 0;
    std::printf("======================================================================\n");
    std::printf("  Regression: musig_nonce_gen extra_input32 behavioral freeze (SHIM-NONCEGEN-001)\n");
    std::printf("  Documents that extra_input32 is silently ignored; pubnonce is data-\n");
    std::printf("  independent of this parameter until SHIM-NONCEGEN-001 is resolved.\n");
    std::printf("======================================================================\n\n");

    test_source_marker_present();
    std::printf("\n");
    test_null_vs_nonnull_extra_input();
    std::printf("\n");
    test_two_nonnull_extra_inputs();
    std::printf("\n");

    std::printf("[regression_musig_noncegen_extra_input] %d/%d checks passed\n",
               g_pass, g_pass + g_fail);
    return (g_fail > 0) ? 1 : 0;
}

#ifdef STANDALONE_TEST
int main() { return test_regression_musig_noncegen_extra_input_run(); }
#endif
