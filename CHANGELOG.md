# Changelog

All notable changes to secp256k1-fast will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Shared POD types** (`include/secp256k1/types.hpp`): Canonical data layouts
  (`FieldElementData`, `ScalarData`, `AffinePointData`, `JacobianPointData`,
  `MidFieldElementData`) with `static_assert` layout guarantees across all backends
- **CUDA edge case tests** (10 new): zero scalar, order scalar, point cancellation,
  infinity operand, add/dbl consistency, commutativity, associativity, field inv
  edges, scalar mul cross-check, distributive — now 40/40 total
- **OpenCL edge case tests** (8 new): matching coverage — now 40/40 total
- **Shared test vectors** (`tests/test_vectors.hpp`): canonical K*G vectors,
  edge scalars, large scalar pairs, hex utilities
- **CTest integration for CUDA** (`cuda/CMakeLists.txt`)
- **CPU `data()`/`from_data()`** accessors on FieldElement and Scalar for
  zero-cost cross-backend interop

### Changed
- **CUDA**: `FieldElement`, `Scalar`, `AffinePoint` are now `using` aliases
  to shared POD types (zero overhead, no API change)
- **OpenCL**: Added `static_assert` layout compatibility checks + `to_data()`/
  `from_data()` conversion utilities
- **OpenCL point ops optimized**: 3-temp point doubling (was 12-temp),
  alias-safe mixed addition — OpenCL now **1.64× faster** than CUDA on kG
- **CUDA point ops optimized**: Same 3-temp doubling applied
- **PTX inline assembly** for NVIDIA OpenCL: Field ops now at parity with CUDA
- **Benchmarks updated**: Full CUDA + OpenCL numbers on RTX 5060 Ti

### Performance (RTX 5060 Ti, kernel-only)
- CUDA kG: 485.1 ns (2.06 M/s)
- OpenCL kG: 295.1 ns (3.39 M/s) — **1.64× faster**
- Point Double: CUDA 1.6 ns, OpenCL 0.9 ns
- Point Add: CUDA 2.1 ns, OpenCL 1.6 ns
- Field Mul: 0.2 ns on both (4,140 M/s)

## [1.0.0] - 2026-02-02

### Added
- Complete secp256k1 field arithmetic
- Point addition, doubling, and multiplication
- Scalar arithmetic
- GLV endomorphism optimization
- Assembly optimizations:
  - x86-64 BMI2/ADX (3-5× speedup)
  - RISC-V RV64GC (2-3× speedup)
  - RISC-V Vector Extension (RVV) support
- CUDA batch operations
- Memory-mapped database support
- Comprehensive documentation

### Performance
- x86-64 field multiplication: ~8ns (assembly)
- RISC-V field multiplication: ~75ns (assembly)
- CUDA batch throughput: 8M ops/s (RTX 4090)

---

**Legend:**
- `Added` - New features
- `Changed` - Changes in existing functionality
- `Deprecated` - Soon-to-be removed features
- `Removed` - Removed features
- `Fixed` - Bug fixes
- `Security` - Security fixes
