# Windows: MSVC vs Clang — CPU benchmark comparison & MSVC tuning

**Date:** 2026-06-14
**Host:** Intel Core i7-11700 (Rocket Lake, 8C/16T) — AVX2 + BMI2 + ADX + AVX-512F
**OS:** Windows 10 Pro (19045)
**Compilers:**
- **MSVC** 19.44.35227 (Visual Studio 2022 Enterprise)
- **Clang** 19.1.5 (`windows-msvc` target, GNU-style driver)

**Build:** CMake + Ninja, `Release`, CPU only, `SECP256K1_USE_LTO=OFF` for both
(clang ThinLTO is broken on `windows-msvc` here — COMDAT/`lld-link` bug). MSVC keeps
`/GL` whole-program optimization. Clang linked against its `compiler-rt` builtins
(`__umodti3`/`__multi3` are not auto-linked on `windows-msvc`).

**Benchmarks:** `bench_ct` (fast:: path), `bench_field_26` (4×64 field), `bench_hotpaths`.
RDTSCP timer, core-pinned, 11 passes, IQR outlier removal + median.

> All numbers are warm-cache, single core, same machine. The comparison is between
> **our library compiled by MSVC** and **the same library compiled by Clang** — it is
> not a library-vs-library comparison.

---

## 1. Why MSVC starts behind

| Factor | Clang (`-march=native`) | MSVC (default `/O2`) |
|---|---|---|
| 128-bit field arithmetic | native `unsigned __int128` → inlined `MULX`/`ADCX`/`ADOX` chains, zero call overhead | no `__int128`: 4×64 **MASM** asm (non-inlined `call`) + `u128_compat` struct (`_umul128`/`_addcarry_u64`) |
| ISA baseline | AVX2/BMI2/ADX/AVX-512 (native) | **SSE2** only — no AVX/BMI2 codegen for C++ glue |
| Cross-module inlining | propagated `-march` + `-O3` to consumers | `/O2` per-TU |

The dominant cost (field/scalar/point arithmetic and the batch/FROST glue built on it)
is limited by MSVC's inability to inline and schedule 64-bit big-integer code as tightly
as Clang's `__int128` + `MULX`.

## 2. Baseline gap (MSVC `/O2 /GL` vs Clang `-O3 -march=native`)

| metric | MSVC base | Clang | Clang advantage |
|---|--:|--:|--:|
| field_mul (ns) | 20 | 12 | 1.7× |
| field_square (ns) | 15 | 13 | 1.2× |
| field_inv (µs) | 1.40 | 0.88 | 1.6× |
| point_add (µs) | 1.62 | 0.98 | 1.7× |
| point_dbl (µs) | 0.20 | 0.08 | 2.5× |
| **scalar_mul k·P (µs)** | **100.0** | **25.7** | **3.9×** |
| generator_mul k·G (µs) | 5.9 | 4.9 | 1.2× |
| field26 mul 4×64 (ns) | 19.5 | 13.1 | 1.5× |
| **batch_verify (ms)** | **7.07** | **1.77** | **4.0×** |
| **frost_finalize (ms)** | **2.45** | **0.48** | **5.0×** |
| address_p2pkh (ns) | 1716 | 1390 | 1.2× |

## 3. MSVC tuning — isolation sweep

Each MSVC flag was tested independently (clean build + benchmark) to find what
actually helps. Result:

| toggle | verdict | evidence |
|---|---|---|
| **`/Ob3`** most-aggressive inlining | **WIN — keep ON** | field_mul 20→17, field_sqr 15→**13 (Clang parity)**, field_inv 1.40→1.29, point_add 1.62→1.45, scalar_mul 100→92, field26 add 6.3→**2.2**; nothing regressed |
| **WPO** (`/GL`+`/LTCG`+`/OPT:REF,ICF`) | **WIN — keep ON** | turning it OFF regressed field_inv 1.40→1.62, point_add 1.62→1.72, point_dbl, field_sqr |
| **`/arch:AVX2`** | neutral-to-negative — **default OFF** | no clear gains; regressed field_sqr and the auto-vectorized field add |
| **`/arch:AVX512`** | neutral-to-negative — **default OFF** | same vectorizer regression (field add 2.2→6.1), batch_verify −6% but most ops flat/worse |
| `/Oi /Gy /Gw` | neutral / harmless — kept | within noise of baseline |

**Winning config: SSE2 + `/Ob3` + WPO** (now the committed default — see
`SECP256K1_MSVC_OB3=ON`, `SECP256K1_MSVC_WPO=ON`, `SECP256K1_MSVC_ARCH=SSE2`).
`/arch` is still selectable via `-DSECP256K1_MSVC_ARCH=AVX2|AVX512` for users who
want to test it on their hardware.

## 4. Result — MSVC after tuning vs Clang

| metric | MSVC tuned | Clang | gap | vs MSVC base |
|---|--:|--:|--:|--:|
| field_mul (ns) | 17 | 12 | 1.42× | −15% |
| field_square (ns) | **13** | **13** | **1.00×** | −13% |
| field_inv (µs) | 1.29 | 0.88 | 1.47× | −8% |
| point_add (µs) | 1.45 | 0.98 | 1.48× | −10% |
| scalar_mul k·P (µs) | 92.4 | 25.7 | 3.6× | −8% |
| generator_mul k·G (µs) | 5.6 | 4.9 | 1.14× | −5% |
| field26 mul 4×64 (ns) | 17.3 | 13.1 | 1.32× | −12% |
| field26 add 4×64 (ns) | **2.2** | 6.3 | **0.35× (MSVC 2.8× faster)** | −65% |
| batch_verify (ms) | 7.22 | 1.77 | 4.07× | ≈flat |
| frost_finalize (ms) | 2.37 | 0.48 | 4.9× | −3% |
| address_p2wpkh (ns) | 770 | 742 | **1.04×** | −10% |

**Summary:** `/Ob3` + WPO buys a consistent **~8–15%** across the field/scalar/point
kernels (field squaring and p2wpkh reach Clang parity, field add overtakes it) at zero
correctness or portability cost. The **residual 1.4–5× gap on the compound paths**
(scalar_mul, batch_verify, frost) is **structural** and flags cannot close it (see §6).

## 6. The real answer on Windows: build with **clang-cl** 🏆

The structural gap is fundamental to the MSVC compiler, not a tuning miss — proven:

- The fast field kernel (`field_4x64_inline.hpp`, inline MULX/ADCX/ADOX, dual carry
  chains) is **Clang/GCC-only**: gated on `__ADX__ && __BMI2__` (macros MSVC never
  defines) *and* written in GCC `__asm__` inline asm (MSVC x64 has none). MSVC falls back
  to an external **MASM** `call` (no inlining, memory round-trips between field ops).
- A hand-written, **validated-correct** MSVC `_mulx_u64`/`_addcarry_u64` field multiply
  is **1.31× slower per-op than even the asm `call`** (94 vs 72 cycles) — MSVC intrinsics
  can't express the adcx/adox dual carry chains (`_addcarry_u64`→serial `adc`; no `adox`
  intrinsic).

So MSVC `cl` cannot reach Clang for this workload. **But `clang-cl` can** — it is a
drop-in, MSVC-ABI-compatible Clang driver (`link.exe`, MSVC CRT, `.pdb`, Visual Studio
"LLVM (clang-cl)" toolset) whose codegen **does** use the inline MULX field kernels:

| metric | MSVC cl (tuned) | **clang-cl** | clang++ | clang-cl vs cl | clang-cl vs clang++ |
|---|--:|--:|--:|--:|--:|
| field_mul (ns) | 17 | 16 | 12 | 1.06× | 0.75× |
| point_dbl (µs) | 0.19 | 0.10 | 0.08 | **1.97×** | 0.78× |
| scalar_mul k·P (µs) | 92.4 | **28.3** | 25.7 | **3.27×** | 0.91× |
| batch_verify (ms) | 7.22 | **2.08** | 1.77 | **3.48×** | 0.85× |
| frost_finalize (ms) | 2.37 | **0.66** | 0.48 | **3.58×** | 0.73× |

clang-cl is **3.3–3.6× faster than MSVC cl** on the compound paths and within
**~10–27%** of clang++ — i.e. it closes nearly the entire gap while staying in the MSVC
toolchain. Correctness verified: `run_selftest ci` = **31/31 modules, ALL TESTS PASSED**.

**Build it:**
```bat
cmake --preset windows-clang-cl          :: from a VS Developer Command Prompt
cmake --build out/windows-clang-cl
```
The preset sets `CMAKE_CXX_COMPILER=clang-cl` + `SECP256K1_USE_LTO=OFF`; the compiler-rt
builtins (`__modti3`/`__umodti3`) are **auto-located and linked** by CMake. In Visual
Studio, set the Platform Toolset to **LLVM (clang-cl)** for the same effect.

### Mixing clang(-cl) objects with `cl` objects
A `cl`-compiled **C++** caller of clang-built C++ (by-value `Point`/`Scalar` returns,
`alignas`'d field types) **crashes** (`0xC0000409`) — the C++ ABI is not interop-safe
across the two compilers. Two safe options:
1. **Build the whole target (lib + app) with clang-cl** — one compiler, no boundary. ✅
2. **Cross the boundary via the C ABI** (`ufsecp.h`, `extern "C"`, POD only) — a `cl` app
   linking a clang(-cl)-built `ufsecp` lib works and runs correctly. ✅

The flag tuning in §3 (`/Ob3`+WPO) remains the best option for builds that must use `cl`.

## 5. Reproduce

From a **Developer Command Prompt for VS 2022** (so `cl`, `ninja`, and the Windows
SDK are on `PATH`), in the library root:

```bat
:: MSVC, tuned default (SSE2 + /Ob3 + WPO)
cmake -S . -B out/msvc -G Ninja -DCMAKE_BUILD_TYPE=Release ^
      -DCMAKE_C_COMPILER=cl -DCMAKE_CXX_COMPILER=cl ^
      -DSECP256K1_BUILD_BENCH=ON -DSECP256K1_USE_LTO=OFF
cmake --build out/msvc --target bench_ct bench_field_26 bench_hotpaths
out\msvc\src\cpu\bench_ct.exe

:: To test the AVX2/AVX512 path:  -DSECP256K1_MSVC_ARCH=AVX2   (or AVX512)

:: Clang on windows-msvc needs its compiler-rt builtins linked
:: (__umodti3/__multi3 are not auto-linked):
cmake -S . -B out/clang -G Ninja -DCMAKE_BUILD_TYPE=Release ^
      -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ ^
      -DSECP256K1_BUILD_BENCH=ON -DSECP256K1_USE_LTO=OFF ^
      "-DCMAKE_EXE_LINKER_FLAGS=<llvm>/lib/clang/<ver>/lib/windows/clang_rt.builtins-x86_64.lib"
```

**Correctness:** the tuned MSVC config passes the full self-test
(`run_selftest ci` → 31/31 modules, ALL TESTS PASSED).
