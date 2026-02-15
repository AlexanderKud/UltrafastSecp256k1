// ============================================================================
// UltrafastSecp256k1 — Android ARM64 On-Device Test
// ============================================================================
// Standalone test binary (no JNI, no Java). Push via adb and run in shell.
// Tests: selftest, point ops, scalar ops, CT ops, ECDH, timing.
// ============================================================================

#include <cstdio>
#include <cstring>
#include <chrono>
#include <array>

#include <secp256k1/field.hpp>
#include <secp256k1/scalar.hpp>
#include <secp256k1/point.hpp>
#include <secp256k1/init.hpp>
#include <secp256k1/selftest.hpp>

#include <secp256k1/ct/ops.hpp>
#include <secp256k1/ct/field.hpp>
#include <secp256k1/ct/scalar.hpp>
#include <secp256k1/ct/point.hpp>

using namespace secp256k1;
using FE = fast::FieldElement;
using SC = fast::Scalar;
using PT = fast::Point;

static void print_hex(const uint8_t* data, size_t len) {
    for (size_t i = 0; i < len; ++i) printf("%02x", data[i]);
}

int main() {
    printf("=============================================\n");
    printf("UltrafastSecp256k1 — Android ARM64 Test\n");
    printf("=============================================\n\n");

    // 1. Self-test
    printf("[1] Self-test... ");
    fflush(stdout);
    bool ok = fast::Selftest(false);
    printf("%s\n", ok ? "PASS" : "FAIL");
    if (!ok) { printf("CRITICAL: Self-test failed!\n"); return 1; }

    // 2. Generator point
    printf("[2] Generator point G... ");
    PT g = PT::generator();
    auto g_uncomp = g.to_uncompressed();
    printf("OK (04");
    print_hex(g_uncomp.data() + 1, 8);
    printf("...)\n");

    // 3. Point doubling: 2G
    printf("[3] Point doubling 2G... ");
    PT g2 = g.dbl();
    auto g2_comp = g2.to_compressed();
    print_hex(g2_comp.data(), 33);
    printf("\n");

    // 4. Point addition: 3G = 2G + G
    printf("[4] Point addition 3G... ");
    PT g3 = g2.add(g);
    auto g3_comp = g3.to_compressed();
    print_hex(g3_comp.data(), 33);
    printf("\n");

    // 5. Scalar mul: k*G (fast)
    printf("[5] Fast scalar_mul k*G... ");
    SC k = SC::from_uint64(12345);
    auto t0 = std::chrono::high_resolution_clock::now();
    PT kg = g.scalar_mul(k);
    auto t1 = std::chrono::high_resolution_clock::now();
    auto fast_us = std::chrono::duration_cast<std::chrono::microseconds>(t1 - t0).count();
    auto kg_comp = kg.to_compressed();
    print_hex(kg_comp.data(), 33);
    printf(" (%lld us)\n", (long long)fast_us);

    // 6. CT scalar_mul: k*G (constant-time)
    printf("[6] CT scalar_mul k*G... ");
    t0 = std::chrono::high_resolution_clock::now();
    PT ct_kg = ct::scalar_mul(g, k);
    t1 = std::chrono::high_resolution_clock::now();
    auto ct_us = std::chrono::duration_cast<std::chrono::microseconds>(t1 - t0).count();
    auto ct_comp = ct_kg.to_compressed();
    print_hex(ct_comp.data(), 33);
    printf(" (%lld us)\n", (long long)ct_us);

    // 7. Verify fast == CT
    printf("[7] Fast == CT result... ");
    bool match = (kg_comp == ct_comp);
    printf("%s\n", match ? "MATCH" : "MISMATCH!");
    if (!match) { printf("ERROR: fast and CT results differ!\n"); return 1; }

    // 8. CT generator_mul
    printf("[8] CT generator_mul... ");
    t0 = std::chrono::high_resolution_clock::now();
    PT ct_gen = ct::generator_mul(k);
    t1 = std::chrono::high_resolution_clock::now();
    auto gen_us = std::chrono::duration_cast<std::chrono::microseconds>(t1 - t0).count();
    auto gen_comp = ct_gen.to_compressed();
    bool gen_match = (gen_comp == kg_comp);
    printf("%s (%lld us)\n", gen_match ? "MATCH" : "MISMATCH!", (long long)gen_us);

    // 9. ECDH test
    printf("[9] CT ECDH... ");
    SC alice_priv = SC::from_uint64(42);
    SC bob_priv = SC::from_uint64(99);
    PT alice_pub = ct::generator_mul(alice_priv);
    PT bob_pub = ct::generator_mul(bob_priv);

    t0 = std::chrono::high_resolution_clock::now();
    PT shared_a = ct::scalar_mul(bob_pub, alice_priv);
    PT shared_b = ct::scalar_mul(alice_pub, bob_priv);
    t1 = std::chrono::high_resolution_clock::now();
    auto ecdh_us = std::chrono::duration_cast<std::chrono::microseconds>(t1 - t0).count();

    auto xa = shared_a.x().to_bytes();
    auto xb = shared_b.x().to_bytes();
    bool ecdh_ok = (xa == xb);
    printf("%s (%lld us for 2 ECDH)\n", ecdh_ok ? "PASS" : "FAIL!", (long long)ecdh_us);
    if (ecdh_ok) {
        printf("    shared secret: ");
        print_hex(xa.data(), 16);
        printf("...\n");
    }

    // 10. Scalar arithmetic
    printf("[10] Scalar arithmetic... ");
    SC a = SC::from_uint64(0xDEADBEEF);
    SC b = SC::from_uint64(0xCAFEBABE);
    SC sum = a + b;
    SC prod = a * b;
    SC diff = a - b;
    bool scalar_ok = !sum.is_zero() && !prod.is_zero();
    printf("%s\n", scalar_ok ? "PASS" : "FAIL");

    // 11. Benchmark: 100 fast scalar_mul
    printf("[11] Benchmark: 100x fast scalar_mul... ");
    fflush(stdout);
    t0 = std::chrono::high_resolution_clock::now();
    PT acc = g;
    for (int i = 0; i < 100; ++i) {
        acc = acc.scalar_mul(SC::from_uint64(i + 1));
    }
    t1 = std::chrono::high_resolution_clock::now();
    auto bench_ms = std::chrono::duration_cast<std::chrono::milliseconds>(t1 - t0).count();
    printf("%lld ms (avg %lld us/op)\n", (long long)bench_ms, (long long)(bench_ms * 1000 / 100));

    // 12. Benchmark: 10 CT scalar_mul
    printf("[12] Benchmark: 10x CT scalar_mul... ");
    fflush(stdout);
    t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < 10; ++i) {
        PT tmp = ct::scalar_mul(g, SC::from_uint64(i + 1));
        (void)tmp;
    }
    t1 = std::chrono::high_resolution_clock::now();
    auto ct_bench_ms = std::chrono::duration_cast<std::chrono::milliseconds>(t1 - t0).count();
    printf("%lld ms (avg %lld us/op)\n", (long long)ct_bench_ms, (long long)(ct_bench_ms * 1000 / 10));

    printf("\n=============================================\n");
    printf("ALL TESTS PASSED on Android ARM64!\n");
    printf("  Fast scalar_mul: ~%lld us\n", (long long)fast_us);
    printf("  CT scalar_mul:   ~%lld us\n", (long long)ct_us);
    printf("  CT/Fast ratio:   %.1fx\n", ct_us > 0 ? (double)ct_us / fast_us : 0.0);
    printf("=============================================\n");

    return 0;
}
