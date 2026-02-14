# CUDA Benchmark — NVIDIA RTX 5060 Ti

**Date:** 2026-02-14  
**OS:** Linux x86_64 (Ubuntu)  
**Driver:** NVIDIA 580.126.09  
**CUDA:** 12.0, sm_89  
**Build:** GCC 14.2.0, Release, -O3 --use_fast_math  

## GPU Info

| Property | Value |
|----------|-------|
| Device | NVIDIA GeForce RTX 5060 Ti |
| Compute Capability | 12.0 |
| SM Count | 36 |
| Clock | 2602 MHz |
| Memory | 15847 MB |
| Memory Clock | 14001 MHz |
| Memory Bus | 128-bit |

## Results

| Operation | Time/Op | Throughput |
|-----------|---------|------------|
| Field Mul | 0.2 ns | 4,117.62 M/s |
| Field Add | 0.2 ns | 4,133.09 M/s |
| Field Inverse | 12.1 ns | 82.66 M/s |
| Point Add | 2.1 ns | 475.72 M/s |
| Point Double | 1.6 ns | 642.34 M/s |
| Scalar Mul (P×k) | 624.9 ns | 1.60 M/s |
| Generator Mul (G×k) | 591.5 ns | 1.69 M/s |

## Notes

- Batch size: 1,048,576 (1M) for field ops, 65K-131K for point/scalar ops
- Amortized per-element time (includes kernel launch cost spread over batch)
- Results consistent across 5 measurement iterations with 3 warmup passes
