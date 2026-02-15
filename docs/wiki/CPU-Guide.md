# CPU Guide

Detailed guide for the CPU implementation of UltrafastSecp256k1.

---

## Supported Platforms

| Platform | Assembly | SIMD | Status |
|----------|----------|------|--------|
| x86-64 Linux | BMI2/ADX | AVX2 | ✅ Production |
| x86-64 Windows | BMI2/ADX | AVX2 | ✅ Production |
| RISC-V 64 | RV64GC | RVV 1.0 | ✅ Production |
| ARM64 | - | NEON | 🚧 Planned |

---

## x86-64 Optimizations

### BMI2/ADX Instructions

The x86-64 implementation uses specialized instructions for 256-bit arithmetic:

- **MULX**: Multiply without affecting flags
- **ADCX**: Add with carry (carry chain)
- **ADOX**: Add with overflow (parallel chain)

These enable efficient carry-chain multiplication with two parallel addition chains.

### Build for x86-64

```bash
cmake -S . -B build -G Ninja \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_C_COMPILER=clang \
  -DCMAKE_CXX_COMPILER=clang++ \
  -DSECP256K1_USE_ASM=ON

cmake --build build -j
```

### Performance (x86-64)

| Operation | Time |
|-----------|------|
| Field Mul | 33 ns |
| Field Square | 32 ns |
| Field Add | 11 ns |
| Field Inverse | 5 μs |
| Point Add | 521 ns |
| Point Double | 278 ns |
| Scalar Mul | 110 μs |
| Generator Mul | 5 μs |

---

## RISC-V Optimizations

### Supported Extensions

- **RV64GC**: Base 64-bit with compressed instructions
- **RVV 1.0**: Vector extension for batch operations

### Assembly Optimizations

The RISC-V implementation includes hand-optimized assembly for:

1. **Field Multiplication** - Optimized carry chain
2. **Field Squaring** - Dedicated routine (25% fewer muls)
3. **Field Add/Sub** - Branchless implementation
4. **Modular Reduction** - Fast reduction for secp256k1

### Build for RISC-V

**Native build:**
```bash
cmake -S . -B build -G Ninja \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_C_COMPILER=clang-21 \
  -DCMAKE_CXX_COMPILER=clang++-21

cmake --build build -j
```

**Cross-compilation:**
```bash
cmake -S . -B build-riscv -G Ninja \
  -DCMAKE_SYSTEM_NAME=Linux \
  -DCMAKE_SYSTEM_PROCESSOR=riscv64 \
  -DCMAKE_C_COMPILER=riscv64-linux-gnu-gcc \
  -DCMAKE_CXX_COMPILER=riscv64-linux-gnu-g++

cmake --build build-riscv -j
```

### Performance (RISC-V)

| Operation | Time |
|-----------|------|
| Field Mul | 198 ns |
| Field Square | 177 ns |
| Field Add | 34 ns |
| Field Inverse | 18 μs |
| Point Add | 3 μs |
| Point Double | 1 μs |
| Scalar Mul | 672 μs |
| Generator Mul | 40 μs |

### RISC-V Build Options

| Option | Default | Description |
|--------|---------|-------------|
| `SECP256K1_RISCV_FAST_REDUCTION` | ON | Fast modular reduction |
| `SECP256K1_RISCV_USE_VECTOR` | ON | RVV vectorization |
| `SECP256K1_RISCV_USE_PREFETCH` | ON | Memory prefetch hints |

---

## Algorithm Details

### Scalar Multiplication

Uses GLV (Gallant-Lambert-Vanstone) endomorphism with wNAF encoding:

1. **GLV Decomposition**: Split k into k₁, k₂ where k = k₁ + λ·k₂
2. **wNAF Encoding**: Convert to signed digit form
3. **Shamir's Trick**: Compute k₁·P + k₂·φ(P) simultaneously

This reduces scalar multiplication from 256 to ~128 point operations.

### KPlan Optimization

For fixed-K × variable-Q pattern:

```cpp
// Precompute K-dependent work once
Scalar K = Scalar::from_hex("...");
KPlan plan = KPlan::from_scalar(K);

// Fast multiplication for each Q
for (auto& Q : points) {
    Point R = Q.scalar_mul_with_plan(plan);  // Uses cached decomposition
}
```

### Field Arithmetic

- **Representation**: 4 × 64-bit limbs (little-endian)
- **Reduction**: Exploits p = 2²⁵⁶ - 2³² - 977 structure
- **Montgomery**: Optional, disabled by default

---

## Memory Layout

### FieldElement
```
limbs[0]: bits   0-63  (least significant)
limbs[1]: bits  64-127
limbs[2]: bits 128-191
limbs[3]: bits 192-255 (most significant)
```

### Endianness

- **Internal**: Little-endian (native x86/RISC-V)
- **`from_limbs()`**: Little-endian input (for binary I/O)
- **`from_bytes()`**: Big-endian input (for hex/test vectors)

---

## Best Practices

### 1. Use In-Place Operations

```cpp
// Slower: creates temporary
point = point.add(other);

// Faster: no allocation (~12% speedup)
point.add_inplace(other);
```

### 2. Use KPlan for Fixed-K

```cpp
// If K is constant and Q varies
KPlan plan = KPlan::from_scalar(K);
for (auto& Q : points) {
    R = Q.scalar_mul_with_plan(plan);
}
```

### 3. Batch Inversions

```cpp
// Single inversion + 3(n-1) multiplications
// vs n inversions
std::vector<FieldElement> values = {...};
batch_invert(values);
```

### 4. Avoid Unnecessary Conversions

```cpp
// For binary files, use from_limbs (native)
FieldElement::from_limbs(limbs);

// Only use from_bytes for hex/test vectors
FieldElement::from_bytes(bytes);
```

---

## Constant-Time (CT) Layer

The CT layer provides **side-channel resistant** operations for use with secret data. It lives in `secp256k1::ct::` and is always compiled alongside `fast::` — no build flags needed.

### Architecture

```
secp256k1::fast::  ←── Maximum throughput (variable-time)
    FieldElement, Scalar, Point  ←── Shared data types
secp256k1::ct::    ←── Side-channel resistant (constant-time)
```

- **Same data types**: `ct::` functions accept and return `fast::FieldElement`, `fast::Scalar`, `fast::Point`
- **Freely mixable**: Use `fast::` for public data, `ct::` for secret-dependent operations
- **No compile flags**: Both namespaces always available on all platforms

### CT Guarantees

| Property | Guarantee |
|----------|-----------|
| Branches | No secret-dependent branches |
| Memory access | No secret-dependent access patterns |
| Instruction count | Fixed regardless of input |
| Compiler safety | `value_barrier()` prevents branch conversion |

### Key Algorithms

#### Complete Addition Formula

Unlike `fast::Point::add()` which has separate codepaths for P+Q vs P+P, the CT `point_add_complete()` handles **all cases** in a single branchless codepath:

- **P + Q** (general addition)
- **P + P** (doubling — detected via H==0 && R==0)
- **P + O** or **O + Q** (identity — selected via cmov)
- **P + (-P) = O** (inverse — detected via H==0 && R≠0)

Cost: ~16M + 6S (fixed, no branches on point values)

#### CT Scalar Multiplication

Fixed-window method (w=4) with CT table lookup:

1. Precompute table: T[0]=O, T[1]=P, ..., T[15]=15P
2. For each 4-bit window (64 windows, MSB to LSB):
   - 4 doublings
   - CT table lookup (always scans all 16 entries)
   - Complete addition
3. Total: **256 doublings + 64 additions** (always, no skip)

#### CT Field Inverse

Uses addition-chain Fermat's little theorem (a^(p-2) mod p):
- Fixed 255 squarings + 14 multiplications
- No secret-dependent branching

### Performance vs fast::

| Operation | fast:: | ct:: | Overhead |
|-----------|--------|------|----------|
| Field Add | 11 ns | ~15 ns | ~1.4× |
| Field Mul | 33 ns | ~35 ns | ~1.1× |
| Scalar Mul | 110 μs | ~250 μs | ~2.3× |
| Generator Mul | 5 μs | ~250 μs | ~50× |

> **Note:** `fast::generator_mul` uses massive precomputed tables — CT cannot use table shortcuts without leaking information. The CT overhead on regular `scalar_mul` is modest (~2-3×).

### When to Use CT

| Scenario | Recommended API |
|----------|-----------------|
| Private key × G (key generation) | `ct::generator_mul(secret_k)` |
| ECDH (secret × PubKey) | `ct::scalar_mul(pub_point, secret_k)` |
| ECDSA signing (k⁻¹, s computation) | `ct::field_inv()`, `ct::scalar_*()` |
| Public key validation | `ct::point_is_on_curve(p)` |
| Batch public key generation | `fast::` (no secret dependence) |
| Database search / scanning | `fast::` (public data only) |

---

## See Also

- [[API Reference]] - Function documentation
- [[CUDA Guide]] - GPU implementation
- [[Benchmarks]] - Performance data

