# Bitcoin Knots Integration Guide

How to use UltrafastSecp256k1 as the secp256k1 backend in **Bitcoin Knots** — with
**zero Bitcoin Knots source changes**.

> Like Bitcoin Core, this is an optional compile-time backend swap, not a replacement.
> Knots' default build keeps its vendored `src/secp256k1` unless you opt in.

---

## TL;DR

Bitcoin Knots already exposes the perfect seam: `-DWITH_SYSTEM_LIBSECP256K1=ON` makes its
top-level CMake do
```cmake
pkg_check_modules(libsecp256k1 REQUIRED IMPORTED_TARGET libsecp256k1)
add_library(secp256k1 ALIAS PkgConfig::libsecp256k1)
```
So you just **install this project's shim as a `libsecp256k1` pkg-config package** and point
Knots at it — **no patch to Knots**.

```bash
# 1. Build + install the shim as a drop-in libsecp256k1 (self-contained .so + headers + .pc)
cmake -S UltrafastSecp256k1 -B build-shim -G Ninja -DCMAKE_BUILD_TYPE=Release \
      -DSECP256K1_USE_ULTRAFAST=ON \
      -DSECP256K1_SHIM_BUILD_SHARED=ON \
      -DCMAKE_INSTALL_PREFIX=$HOME/.local/ufsecp
cmake --build build-shim --target ultrafast_secp256k1_shared -j"$(nproc)"
cmake --install build-shim

# 2. Configure Bitcoin Knots against it — no source change
export PKG_CONFIG_PATH=$HOME/.local/ufsecp/lib/pkgconfig:$PKG_CONFIG_PATH
cmake -S bitcoin-knots -B build-knots -DWITH_SYSTEM_LIBSECP256K1=ON
cmake --build build-knots -j"$(nproc)"
# at runtime: LD_LIBRARY_PATH=$HOME/.local/ufsecp/lib (or install the .so to a system libdir)
```

`-DSECP256K1_USE_ULTRAFAST=ON` turns on `SECP256K1_BUILD_SHIM`, `SECP256K1_CORE_BACKEND_MODE`
(CT-mandatory + strict BIP-340 + reproducible), and the shim build. `SECP256K1_SHIM_BUILD_SHARED`
adds the self-contained `libultrafast_secp256k1.so` (the libsecp256k1 ABI whole-archived from the
engine), and the install step ships `libsecp256k1.pc` + the `secp256k1*.h` headers.

---

## Why this works (verified)

Bitcoin Knots **v29.3.knots20260508** (Bitcoin Core 29 base) vendors **libsecp256k1 0.6.0** and
enables exactly: ECDSA (core), **recovery (ON)**, schnorrsig, extrakeys, ellswift; ECDH and MuSig
are **OFF**. That is a strict subset of the shim's ABI surface, so the swap is total.

When configured with `WITH_SYSTEM_LIBSECP256K1=ON` against this shim, Knots' own
module-presence check reports (real output):

```
-- Checking for module 'libsecp256k1'
--   Found libsecp256k1, version 0.6.0
-- Checking for required libsecp256k1 modules
--   Looking for secp256k1_ellswift_create - found
--   Looking for secp256k1_xonly_pubkey_parse - found
--   Looking for secp256k1_ecdsa_recover - found
--   Looking for secp256k1_schnorrsig_verify - found
-- Checking for required libsecp256k1 modules - all were found
```
…and the configure completes successfully. A C consumer exercising Knots' exact API set
(`secp256k1_ecdsa_sign`/`_verify`, `_ecdsa_sign_recoverable`, `_schnorrsig_sign32`/`_verify`,
`_keypair_xonly_pub`, `_ellswift_encode`) compiles, links, and runs against the installed
`libsecp256k1.pc`.

The secp256k1 0.6.0 subtree Knots vendors is the same one Bitcoin Core uses; the shim is already
differential-tested and passes Bitcoin Core's full `test_bitcoin` suite (749/749 — see
`docs/BITCOIN_CORE_INTEGRATION.md`). Knots adds node-level features but does not change the
secp256k1 API surface.

---

## Covered API surface (vs. what Knots requires)

| Module | Knots | Shim |
|--------|-------|------|
| ECDSA (sign/verify/parse/normalize/DER) | required | ✅ |
| `recovery` | **ON** | ✅ |
| `schnorrsig` (BIP-340) | required | ✅ |
| `extrakeys` (x-only / keypair, BIP-340/341) | required | ✅ |
| `ellswift` (BIP-324) | required | ✅ |
| `ecdh` | OFF | ✅ (present, unused) |
| `musig` | OFF | ✅ (present, unused) |

---

## Two integration styles

1. **System libsecp256k1 (recommended for Knots — no patch).** The TL;DR above. Uses Knots'
   built-in `WITH_SYSTEM_LIBSECP256K1` + pkg-config. Nothing in Knots changes.
2. **Bundled-tree replacement (same as Bitcoin Core).** If you prefer to mirror the Core PR
   approach, add a `SECP256K1_BACKEND={bundled,ultrafast}` option that, when `ultrafast`, builds
   `compat/libsecp256k1_shim` and `add_library(secp256k1 ALIAS secp256k1_shim)` instead of
   `add_subdirectory(src/secp256k1)`. See `docs/BITCOIN_CORE_INTEGRATION.md`. For Knots the
   system-libsecp256k1 route (style 1) is simpler because the seam already exists.

---

## Notes

- **Version:** the `libsecp256k1.pc` reports `0.6.0` to match the Knots/Core subtree; Knots'
  `pkg_check_modules(libsecp256k1 ...)` carries no minimum-version constraint.
- **Runtime:** ship `libultrafast_secp256k1.so` next to `bitcoind`/`bitcoin-qt` (or install it
  into a system libdir / set `RPATH`). It is self-contained (the engine is whole-archived in).
- **Constant-time / strict encoding:** `SECP256K1_USE_ULTRAFAST=ON` forces CT-mandatory signing
  and strict BIP-340 (reject `r>=p`, `s>=n`), matching consensus expectations.
- **Determinism:** `SECP256K1_CORE_BACKEND_MODE` implies reproducible-build flags.
- This guide and `libsecp256k1.pc` were verified against Bitcoin Knots
  `v29.3.knots20260508` on GCC 14.
