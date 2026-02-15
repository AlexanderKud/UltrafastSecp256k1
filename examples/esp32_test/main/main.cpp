/**
 * UltrafastSecp256k1 - ESP32 Integration Test
 *
 * Testing real secp256k1 library on ESP32 using the library's Selftest
 */

#include <stdio.h>
#include "esp_chip_info.h"
#include "esp_system.h"
#include "esp_timer.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"

// Include real secp256k1 library
#include "secp256k1/field.hpp"
#include "secp256k1/scalar.hpp"
#include "secp256k1/point.hpp"
#include "secp256k1/selftest.hpp"

// Constant-Time layer
#include "secp256k1/ct/point.hpp"
#include "secp256k1/ct/field.hpp"
#include "secp256k1/ct/scalar.hpp"
#include "secp256k1/ct/ops.hpp"

using namespace secp256k1::fast;

// Helper to get chip model name
static const char* get_chip_model_name(esp_chip_model_t model) {
    switch (model) {
        case CHIP_ESP32:   return "ESP32";
        case CHIP_ESP32S2: return "ESP32-S2";
        case CHIP_ESP32S3: return "ESP32-S3";
        case CHIP_ESP32C3: return "ESP32-C3";
        case CHIP_ESP32C2: return "ESP32-C2";
        case CHIP_ESP32C6: return "ESP32-C6";
        case CHIP_ESP32H2: return "ESP32-H2";
        default:           return "Unknown";
    }
}

extern "C" void app_main() {
    vTaskDelay(pdMS_TO_TICKS(1000));

    printf("\n");
    printf("============================================================\n");
    printf("   UltrafastSecp256k1 - ESP32 Library Test\n");
    printf("============================================================\n");
    printf("\n");

    // Platform information
    esp_chip_info_t chip_info;
    esp_chip_info(&chip_info);

    printf("Platform Information:\n");
    printf("  Chip Model:   %s\n", get_chip_model_name(chip_info.model));
    printf("  Cores:        %d\n", chip_info.cores);
    printf("  Revision:     %d.%d\n", chip_info.revision / 100, chip_info.revision % 100);
    printf("  Free Heap:    %lu bytes\n", (unsigned long)esp_get_free_heap_size());
    printf("  Build:        32-bit Portable (no __int128)\n");
    printf("\n");

    // Run the real library self-test
    printf("Running SECP256K1 Library Self-Test...\n");
    printf("(This may take a few seconds on ESP32)\n\n");

    // Quick field diagnostics BEFORE selftest
    printf("\n=== Field Arithmetic Diagnostics ===\n");
    {
        // (p-1)^2 should equal 1
        FieldElement pm1 = FieldElement::from_limbs({
            0xFFFFFFFEFFFFFC2EULL, 0xFFFFFFFFFFFFFFFFULL,
            0xFFFFFFFFFFFFFFFFULL, 0xFFFFFFFFFFFFFFFFULL
        });
        FieldElement pm1_mul = pm1 * pm1;
        printf("  (p-1)*(p-1)==1?  %s\n", (pm1_mul == FieldElement::one()) ? "PASS" : "FAIL");
        if (pm1_mul != FieldElement::one()) {
            printf("    Got: %s\n", pm1_mul.to_hex().c_str());
        }
        FieldElement pm1_sq = pm1; pm1_sq.square_inplace();
        printf("  (p-1).sq()==1?   %s\n", (pm1_sq == FieldElement::one()) ? "PASS" : "FAIL");
        if (pm1_sq != FieldElement::one()) {
            printf("    Got: %s\n", pm1_sq.to_hex().c_str());
        }
        printf("  sq==mul?         %s\n", (pm1_sq == pm1_mul) ? "PASS" : "FAIL");

        // Random-ish values
        FieldElement x = FieldElement::from_limbs({
            0xA1B2C3D4E5F60718ULL, 0x1928374655647382ULL,
            0xBBAACCDDEEFF0011ULL, 0x2233445566778899ULL
        });
        FieldElement y = FieldElement::from_limbs({
            0xFEDCBA9876543210ULL, 0x0123456789ABCDEFULL,
            0x1122334455667788ULL, 0x99AABBCCDDEEFF00ULL
        });
        FieldElement z = FieldElement::from_limbs({
            0x1111111122222222ULL, 0x3333333344444444ULL,
            0x5555555566666666ULL, 0x7777777788888888ULL
        });
        printf("  x*y==y*x?        %s\n", (x*y == y*x) ? "PASS" : "FAIL");
        printf("  (x*y)*z==x*(y*z)? %s\n", ((x*y)*z == x*(y*z)) ? "PASS" : "FAIL");
        FieldElement xsq = x; xsq.square_inplace();
        FieldElement xmul = x * x;
        printf("  x.sq==x*x?       %s\n", (xsq == xmul) ? "PASS" : "FAIL");
        if (xsq != xmul) {
            printf("    sq:  %s\n", xsq.to_hex().c_str());
            printf("    mul: %s\n", xmul.to_hex().c_str());
        }
        printf("  x*(y+z)==x*y+x*z? %s\n", (x*(y+z) == x*y + x*z) ? "PASS" : "FAIL");
    }
    printf("=== End Diagnostics ===\n\n");

    bool test_passed = Selftest(true);  // verbose = true

    printf("\n");
    if (test_passed) {
        printf("============================================================\n");
        printf("   SUCCESS: All library tests passed on ESP32!\n");
        printf("============================================================\n");
    } else {
        printf("============================================================\n");
        printf("   FAILURE: Some tests failed. Check output above.\n");
        printf("============================================================\n");
    }

    // Simple performance benchmark
    printf("\n");
    printf("==============================================\n");
    printf("  Basic Performance Benchmark\n");
    printf("==============================================\n");

    const int iterations = 1000;
    FieldElement a = FieldElement::from_limbs({0x12345678, 0xABCDEF01, 0x11223344, 0x55667788});
    FieldElement b = FieldElement::from_limbs({0x87654321, 0xFEDCBA98, 0x99AABBCC, 0xDDEEFF00});

    // Field Multiplication
    {
        int64_t start = esp_timer_get_time();
        FieldElement result = a;
        for (int i = 0; i < iterations; i++) {
            result = result * b;
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  Field Mul:    %5lld ns/op\n", (elapsed * 1000) / iterations);
        // Force use of result to prevent optimization
        if (result == FieldElement::zero()) printf("!");
    }

    // Field Squaring
    {
        int64_t start = esp_timer_get_time();
        FieldElement result = a;
        for (int i = 0; i < iterations; i++) {
            result = result.square();
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  Field Square: %5lld ns/op\n", (elapsed * 1000) / iterations);
        if (result == FieldElement::zero()) printf("!");
    }

    // Field Addition
    {
        int64_t start = esp_timer_get_time();
        FieldElement result = a;
        for (int i = 0; i < iterations; i++) {
            result = result + b;
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  Field Add:    %5lld ns/op\n", (elapsed * 1000) / iterations);
        if (result == FieldElement::zero()) printf("!");
    }

    // Field Inversion
    {
        int64_t start = esp_timer_get_time();
        FieldElement result = a;
        for (int i = 0; i < 100; i++) {
            result = result.inverse();
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  Field Inv:    %5lld us/op\n", elapsed / 100);
        if (result == FieldElement::zero()) printf("!");
    }

    // Scalar Multiplication (full 256-bit scalar)
    if (test_passed) {
        printf("\n  Scalar Mul benchmark (full 256-bit scalar):\n");
        Scalar k = Scalar::from_hex("4727daf2986a9804b1117f8261aba645c34537e4474e19be58700792d501a591");
        Point G = Point::generator();

        // Warmup
        volatile uint64_t sink = 0;
        Point warmup = G.scalar_mul(k);
        sink = warmup.x().limbs()[0];

        int64_t start = esp_timer_get_time();
        Point result = G;
        for (int i = 0; i < 5; i++) {
            result = G.scalar_mul(k);
        }
        int64_t elapsed = esp_timer_get_time() - start;
        sink = result.x().limbs()[0];
        printf("  Scalar*G:     %5lld us/op\n", elapsed / 5);
        (void)sink;
    }

    // ─── Constant-Time (CT) Layer Tests & Benchmarks ─────────────────────
    printf("\n");
    printf("==============================================\n");
    printf("  Constant-Time (CT) Layer Tests\n");
    printf("==============================================\n");

    int ct_pass = 0;
    int ct_fail = 0;

    // CT Test 1: ct::scalar_mul(G, k) == fast::G.scalar_mul(k)
    {
        Scalar k = Scalar::from_hex("4727daf2986a9804b1117f8261aba645c34537e4474e19be58700792d501a591");
        Point G = Point::generator();
        Point fast_result = G.scalar_mul(k);
        Point ct_result = secp256k1::ct::scalar_mul(G, k);
        bool ok = (fast_result.x() == ct_result.x()) && (fast_result.y() == ct_result.y());
        printf("  CT scalar_mul == fast:   %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 2: ct::generator_mul(k) == fast::G.scalar_mul(k)
    {
        Scalar k = Scalar::from_hex("a1b2c3d4e5f6071819283746556473829aabbccddeeff00112233445566778899");
        Point G = Point::generator();
        Point fast_result = G.scalar_mul(k);
        Point ct_result = secp256k1::ct::generator_mul(k);
        bool ok = (fast_result.x() == ct_result.x()) && (fast_result.y() == ct_result.y());
        printf("  CT generator_mul == fast: %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 3: k=1 => result == G
    {
        Scalar one = Scalar::from_hex("0000000000000000000000000000000000000000000000000000000000000001");
        Point G = Point::generator();
        Point ct_result = secp256k1::ct::scalar_mul(G, one);
        bool ok = (ct_result.x() == G.x()) && (ct_result.y() == G.y());
        printf("  CT k=1 => G:             %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 4: k=2 => result == G+G
    {
        Scalar two = Scalar::from_hex("0000000000000000000000000000000000000000000000000000000000000002");
        Point G = Point::generator();
        Point ct_result = secp256k1::ct::scalar_mul(G, two);
        Point expected = G.add(G);
        bool ok = (ct_result.x() == expected.x()) && (ct_result.y() == expected.y());
        printf("  CT k=2 => G+G:           %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 5: point_is_on_curve for generator
    {
        Point G = Point::generator();
        uint64_t on_curve = secp256k1::ct::point_is_on_curve(G);
        bool ok = (on_curve == UINT64_MAX);
        printf("  CT G on_curve:           %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 6: point_eq
    {
        Point G = Point::generator();
        Scalar k = Scalar::from_hex("4727daf2986a9804b1117f8261aba645c34537e4474e19be58700792d501a591");
        Point p1 = secp256k1::ct::scalar_mul(G, k);
        Point p2 = G.scalar_mul(k);
        uint64_t eq = secp256k1::ct::point_eq(p1, p2);
        bool ok = (eq == UINT64_MAX);
        printf("  CT point_eq:             %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 7: ct::ops - field_cmov
    {
        FieldElement a = FieldElement::from_limbs({1, 2, 3, 4});
        FieldElement b = FieldElement::from_limbs({5, 6, 7, 8});
        FieldElement r = a;
        secp256k1::ct::field_cmov(&r, b, UINT64_MAX); // mask all-ones => r = b
        bool ok1 = (r == b);
        r = a;
        secp256k1::ct::field_cmov(&r, b, 0); // mask zero => r stays a
        bool ok2 = (r == a);
        bool ok = ok1 && ok2;
        printf("  CT field_cmov:           %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    // CT Test 8: complete addition (doubling case)
    {
        Point G = Point::generator();
        auto jG = secp256k1::ct::CTJacobianPoint::from_point(G);
        auto jGG = secp256k1::ct::point_add_complete(jG, jG);
        Point ctGG = jGG.to_point();
        Point fastGG = G.add(G);
        bool ok = (ctGG.x() == fastGG.x()) && (ctGG.y() == fastGG.y());
        printf("  CT complete_add (dbl):   %s\n", ok ? "PASS" : "FAIL");
        ok ? ct_pass++ : ct_fail++;
    }

    printf("\n  CT Results: %d/%d PASS\n", ct_pass, ct_pass + ct_fail);

    // ─── CT Performance Benchmarks ───────────────────────────────────────
    printf("\n");
    printf("==============================================\n");
    printf("  CT Performance Benchmark\n");
    printf("==============================================\n");

    // CT scalar_mul benchmark
    {
        Scalar k = Scalar::from_hex("4727daf2986a9804b1117f8261aba645c34537e4474e19be58700792d501a591");
        Point G = Point::generator();

        // Warmup
        volatile uint64_t ct_sink = 0;
        Point wp = secp256k1::ct::scalar_mul(G, k);
        ct_sink = wp.x().limbs()[0];

        int64_t start = esp_timer_get_time();
        Point ct_r = G;
        for (int i = 0; i < 3; i++) {
            ct_r = secp256k1::ct::scalar_mul(G, k);
        }
        int64_t elapsed = esp_timer_get_time() - start;
        ct_sink = ct_r.x().limbs()[0];
        printf("  CT Scalar*G:  %5lld us/op\n", elapsed / 3);
        (void)ct_sink;
    }

    // CT complete addition benchmark
    {
        Point G = Point::generator();
        auto jG = secp256k1::ct::CTJacobianPoint::from_point(G);

        int64_t start = esp_timer_get_time();
        auto r = jG;
        for (int i = 0; i < iterations; i++) {
            r = secp256k1::ct::point_add_complete(r, jG);
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  CT Add(compl):%5lld ns/op\n", (elapsed * 1000) / iterations);
        if (r.x == FieldElement::zero()) printf("!");
    }

    // CT doubling benchmark
    {
        Point G = Point::generator();
        auto jG = secp256k1::ct::CTJacobianPoint::from_point(G);

        int64_t start = esp_timer_get_time();
        auto r = jG;
        for (int i = 0; i < iterations; i++) {
            r = secp256k1::ct::point_dbl(r);
        }
        int64_t elapsed = esp_timer_get_time() - start;
        printf("  CT Dbl:       %5lld ns/op\n", (elapsed * 1000) / iterations);
        if (r.x == FieldElement::zero()) printf("!");
    }

    // Fast vs CT comparison
    {
        Scalar k = Scalar::from_hex("4727daf2986a9804b1117f8261aba645c34537e4474e19be58700792d501a591");
        Point G = Point::generator();

        volatile uint64_t cmp_sink = 0;
        // Fast
        int64_t t1 = esp_timer_get_time();
        Point fr = G.scalar_mul(k);
        int64_t t_fast = esp_timer_get_time() - t1;
        cmp_sink = fr.x().limbs()[0];
        // CT
        int64_t t2 = esp_timer_get_time();
        Point cr = secp256k1::ct::scalar_mul(G, k);
        int64_t t_ct = esp_timer_get_time() - t2;
        cmp_sink = cr.x().limbs()[0];
        (void)cmp_sink;

        printf("\n  -- Fast vs CT Comparison --\n");
        printf("  Fast scalar*G: %lld us\n", t_fast);
        printf("  CT scalar*G:   %lld us\n", t_ct);
        if (t_fast > 0) {
            printf("  CT/Fast ratio: %.1fx\n", (double)t_ct / (double)t_fast);
        }
    }

    printf("\n");
    printf("============================================================\n");
    printf("   UltrafastSecp256k1 on ESP32 - Test Complete\n");
    printf("   CT Tests: %d/%d PASS\n", ct_pass, ct_pass + ct_fail);
    printf("============================================================\n");

    while (1) {
        vTaskDelay(pdMS_TO_TICKS(10000));
    }
}
