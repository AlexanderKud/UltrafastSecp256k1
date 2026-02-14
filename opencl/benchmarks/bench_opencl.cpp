// =============================================================================
// UltrafastSecp256k1 OpenCL - Benchmark (Batch Throughput)
// =============================================================================
// All benchmarks use batch dispatch (same methodology as CUDA benchmarks)
// to measure true kernel throughput without API overhead.
// =============================================================================

#include "secp256k1_opencl.hpp"
#include <iostream>
#include <chrono>
#include <vector>
#include <iomanip>
#include <string>
#include <cstdlib>
#include <random>

using namespace secp256k1::opencl;

struct BenchResult {
    std::string name;
    double ns_per_op;
    double ops_per_sec;
};

// Batch benchmark helper: warmup, then measure over multiple iterations
template<typename F>
BenchResult bench_batch(const std::string& name, F&& func, std::size_t batch_size, int warmup_iters = 2, int measure_iters = 5) {
    // Warmup
    for (int i = 0; i < warmup_iters; ++i) func();

    auto start = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < measure_iters; ++i) {
        func();
    }
    auto end = std::chrono::high_resolution_clock::now();

    double total_ns = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();
    double total_ops = static_cast<double>(batch_size) * measure_iters;
    double ns_per_op = total_ns / total_ops;
    double ops_per_sec = total_ops / (total_ns * 1e-9);

    return {name, ns_per_op, ops_per_sec};
}

void print_result(const BenchResult& r) {
    std::cout << "  " << std::left << std::setw(20) << r.name;
    if (r.ns_per_op < 1000.0) {
        std::cout << std::right << std::setw(10) << std::fixed << std::setprecision(1) << r.ns_per_op << " ns/op";
    } else if (r.ns_per_op < 1000000.0) {
        std::cout << std::right << std::setw(10) << std::fixed << std::setprecision(1) << (r.ns_per_op / 1000.0) << " us/op";
    } else {
        std::cout << std::right << std::setw(10) << std::fixed << std::setprecision(2) << (r.ns_per_op / 1000000.0) << " ms/op";
    }
    // Throughput
    if (r.ops_per_sec >= 1e9) {
        std::cout << "  (" << std::setprecision(2) << (r.ops_per_sec / 1e6) << " M/s)";
    } else if (r.ops_per_sec >= 1e6) {
        std::cout << "  (" << std::setprecision(2) << (r.ops_per_sec / 1e6) << " M/s)";
    } else if (r.ops_per_sec >= 1e3) {
        std::cout << "  (" << std::setprecision(0) << (r.ops_per_sec / 1e3) << " K/s)";
    } else {
        std::cout << "  (" << std::setprecision(0) << r.ops_per_sec << " /s)";
    }
    std::cout << "\n";
}

int main(int argc, char* argv[]) {
    std::cout << "UltrafastSecp256k1 OpenCL Benchmark (Batch Throughput)\n";
    std::cout << "======================================================\n\n";

    int platform_id = -1;
    int device_id = 0;
    bool prefer_intel = false; // Default to NVIDIA for benchmark
    std::size_t batch_size = 65536; // Default batch size

    for (int i = 1; i < argc; i++) {
        std::string arg = argv[i];
        if (arg == "--platform" && i + 1 < argc) {
            platform_id = std::atoi(argv[++i]);
        } else if (arg == "--device" && i + 1 < argc) {
            device_id = std::atoi(argv[++i]);
        } else if (arg == "--intel") {
            prefer_intel = true;
        } else if (arg == "--nvidia") {
            prefer_intel = false;
        } else if (arg == "--batch" && i + 1 < argc) {
            batch_size = std::atoi(argv[++i]);
        }
    }

    // Create context
    DeviceConfig config;
    config.verbose = true;
    config.prefer_intel = prefer_intel;
    if (platform_id >= 0) {
        config.platform_id = platform_id;
        config.device_id = device_id;
    } else {
        config.platform_id = -1;
    }

    auto ctx = Context::create(config);
    if (!ctx) {
        std::cout << "Failed to create OpenCL context\n";
        return 1;
    }

    const auto& info = ctx->device_info();
    std::cout << "\nDevice: " << info.name << " (" << info.vendor << ")\n";
    std::cout << "Compute Units: " << info.compute_units << "\n";
    std::cout << "Global Memory: " << (info.global_mem_size / (1024*1024)) << " MB\n";
    std::cout << "Batch Size: " << batch_size << "\n\n";

    std::vector<BenchResult> results;

    // ==========================================================================
    // Prepare random test data
    // ==========================================================================
    std::mt19937_64 rng(42);

    std::vector<FieldElement> fe_a(batch_size);
    std::vector<FieldElement> fe_b(batch_size);
    std::vector<FieldElement> fe_r(batch_size);
    for (std::size_t i = 0; i < batch_size; ++i) {
        fe_a[i] = {{rng(), rng(), rng(), rng()}};
        fe_b[i] = {{rng(), rng(), rng(), rng()}};
    }

    // ==========================================================================
    // Field Arithmetic Benchmarks (Batch)
    // ==========================================================================
    std::cout << "Field Arithmetic (batch=" << batch_size << "):\n";
    std::cout << std::string(50, '-') << "\n";

    {
        auto r = bench_batch("Field Add", [&]() {
            ctx->batch_field_add(fe_a.data(), fe_b.data(), fe_r.data(), batch_size);
        }, batch_size);
        print_result(r);
        results.push_back(r);
    }

    {
        auto r = bench_batch("Field Sub", [&]() {
            ctx->batch_field_sub(fe_a.data(), fe_b.data(), fe_r.data(), batch_size);
        }, batch_size);
        print_result(r);
        results.push_back(r);
    }

    {
        auto r = bench_batch("Field Mul", [&]() {
            ctx->batch_field_mul(fe_a.data(), fe_b.data(), fe_r.data(), batch_size);
        }, batch_size);
        print_result(r);
        results.push_back(r);
    }

    {
        auto r = bench_batch("Field Sqr", [&]() {
            ctx->batch_field_sqr(fe_a.data(), fe_r.data(), batch_size);
        }, batch_size);
        print_result(r);
        results.push_back(r);
    }

    {
        auto r = bench_batch("Field Inv", [&]() {
            ctx->batch_field_inv(fe_a.data(), fe_r.data(), batch_size);
        }, batch_size);
        print_result(r);
        results.push_back(r);
    }

    // ==========================================================================
    // Point Operation Benchmarks (Batch)
    // ==========================================================================
    std::cout << "\nPoint Operations (batch=" << batch_size << "):\n";
    std::cout << std::string(50, '-') << "\n";

    // Generate random points by scalar-mul with G
    std::vector<Scalar> scalars(batch_size);
    std::vector<JacobianPoint> jac_points(batch_size);
    std::vector<JacobianPoint> jac_points2(batch_size);
    std::vector<JacobianPoint> jac_results(batch_size);

    for (std::size_t i = 0; i < batch_size; ++i) {
        scalars[i] = {{rng(), rng(), rng(), rng()}};
    }

    // Pre-generate points for point_double and point_add benchmarks
    // Use smaller batch for point generation (it's scalar_mul which is slow)
    std::size_t point_batch = std::min(batch_size, static_cast<std::size_t>(4096));
    std::vector<Scalar> point_scalars(point_batch);
    std::vector<JacobianPoint> pd_in(point_batch), pd_out(point_batch);
    std::vector<JacobianPoint> pa_in1(point_batch), pa_in2(point_batch), pa_out(point_batch);

    for (std::size_t i = 0; i < point_batch; ++i) {
        point_scalars[i] = {{rng(), rng(), rng(), rng()}};
    }
    ctx->batch_scalar_mul_generator(point_scalars.data(), pd_in.data(), point_batch);

    for (std::size_t i = 0; i < point_batch; ++i) {
        point_scalars[i] = {{rng(), rng(), rng(), rng()}};
    }
    ctx->batch_scalar_mul_generator(point_scalars.data(), pa_in2.data(), point_batch);
    pa_in1 = pd_in;

    {
        auto r = bench_batch("Point Double", [&]() {
            ctx->batch_point_double(pd_in.data(), pd_out.data(), point_batch);
        }, point_batch);
        print_result(r);
        results.push_back(r);
    }

    {
        auto r = bench_batch("Point Add", [&]() {
            ctx->batch_point_add(pa_in1.data(), pa_in2.data(), pa_out.data(), point_batch);
        }, point_batch);
        print_result(r);
        results.push_back(r);
    }

    // ==========================================================================
    // Scalar Multiplication Benchmarks (various batch sizes)
    // ==========================================================================
    std::cout << "\nScalar Multiplication:\n";
    std::cout << std::string(50, '-') << "\n";

    for (std::size_t bs : {256UL, 1024UL, 4096UL, 16384UL, 65536UL}) {
        if (bs > batch_size) break;

        std::vector<Scalar> sm_scalars(bs);
        std::vector<JacobianPoint> sm_results(bs);
        for (std::size_t i = 0; i < bs; ++i) {
            sm_scalars[i] = {{rng(), rng(), rng(), rng()}};
        }

        std::string name = "kG (batch=" + std::to_string(bs) + ")";
        auto r = bench_batch(name, [&]() {
            ctx->batch_scalar_mul_generator(sm_scalars.data(), sm_results.data(), bs);
        }, bs, 1, 3);
        print_result(r);
        results.push_back(r);
    }

    // ==========================================================================
    // Batch Inversion Benchmark (various batch sizes)
    // ==========================================================================
    std::cout << "\nBatch Field Inversion:\n";
    std::cout << std::string(50, '-') << "\n";

    for (std::size_t bs : {256UL, 1024UL, 4096UL, 16384UL}) {
        if (bs > batch_size) break;

        std::vector<FieldElement> inv_in(bs);
        std::vector<FieldElement> inv_out(bs);
        for (std::size_t i = 0; i < bs; ++i) {
            inv_in[i] = {{rng(), rng(), rng(), rng()}};
        }

        std::string name = "Inv (batch=" + std::to_string(bs) + ")";
        auto r = bench_batch(name, [&]() {
            ctx->batch_field_inv(inv_in.data(), inv_out.data(), bs);
        }, bs, 1, 3);
        print_result(r);
        results.push_back(r);
    }

    // ==========================================================================
    // Summary Table
    // ==========================================================================
    std::cout << "\n" << std::string(60, '=') << "\n";
    std::cout << "Summary:\n";
    std::cout << std::string(60, '-') << "\n";
    for (const auto& r : results) {
        print_result(r);
    }
    std::cout << std::string(60, '=') << "\n";
    std::cout << "\nBenchmark complete!\n";
    return 0;
}

