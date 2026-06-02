# UltrafastSecp256k1 v4.1.0

**Release date:** 2026-06-02
**ABI version:** 4 (no break — minor bump, fully compatible with v4.0.0)
**Compatibility:** drop-in libsecp256k1 ABI shim; CPU + CUDA + OpenCL + Metal

> **Theme — libbitcoin batch acceleration + audit / constant-time hardening + a
> consensus correctness fix.** This release adds the GPU/CPU batch
> script-signature "collect" path requested by the libbitcoin maintainer, closes
> a set of P1 security-review findings (including one consensus-relevant ECDSA
> recovery edge case), makes the public constant-time scalar multiply fully
> branchless on secret data, and lands the audit-hardening / benchmark-methodology
> work. It is API- and ABI-compatible with v4.0.0: existing callers need no
> source changes, and every new capability is additive and opt-in.

---

## Highlights

- **libbitcoin acceleration bridge — in-place "collect" batch verify** for ECDSA
  and BIP-340 Schnorr, with a dedicated on-device CUDA kernel and an automatic
  host-collapse fallback for OpenCL/Metal. (New, additive.)
- **Consensus fix:** ECDSA public-key recovery now rejects `r >= (p − n)` in the
  `recid & 2` branch (bbhunt-001).
- **Constant-time hardening:** `ct::scalar_mul` is now branchless on the secret
  GLV sign bit (CT-CRYPTO-001).
- **Shim fail-closed hygiene:** seckey / recover / x-only-tweak shim functions now
  zero their output buffers on failure, matching upstream libsecp256k1
  (PASS-COMPAT-001/002/004).
- **MuSig2 ABI hardening:** `musig2_partial_sign` fail-closes when the signer set
  is empty, closing an ABI-deserialized signer-index bypass (MED-3 / P1-SEC-01).
- **Assurance surface:** 419 audit modules (270 exploit PoCs + 149 non-exploit),
  Rule-16 advisory enforcement moved post-build, ABI hostile-caller manifest, and
  a fully regenerated external-audit evidence bundle.

---

## New feature — libbitcoin batch "collect" verify

A new, additive batch script-signature verification path for the libbitcoin
acceleration bridge (`compat/libbitcoin_bridge/`), developed with the libbitcoin
maintainer for IBD / historical-block validation.

**What it does.** Verify a homogeneous batch of ECDSA (or Schnorr) signatures and
collapse each row's verdict **in place** into that row's trailing correlation-key
cell — a valid row's key cell is zeroed, an invalid row keeps its caller id. The
caller then walks the buffer once and collects every row whose key cell is still
non-zero: that set *is* the rejected-id list. No separate results array, no second
side table.

**C ABI (returns void):**
```c
void ufsecp_lbtc_verify_ecdsa_collect (ufsecp_lbtc_ctrl* ctrl,
                                       uint8_t* rows, size_t n, size_t key_size);
void ufsecp_lbtc_verify_schnorr_collect(ufsecp_lbtc_ctrl* ctrl,
                                       uint8_t* rows, size_t n, size_t key_size);
```

**C++20 zero-copy wrapper** (mutable span — the in-place write requires it):
```cpp
std::span<ecdsa::triple> batch = ...;     // MUTABLE rows
ctrl.collect_ecdsa(batch);                // key_size derived from sizeof(Row)
for (auto& row : batch)
    if (key_cell_nonzero(row)) rejected.push_back(row.identifier);
```

**Properties:**
- The existing results-based `ufsecp_lbtc_verify_ecdsa/_schnorr(..., results)` API
  is **byte-for-byte unchanged** — only the new collect path is added.
- `key_size` must be `> 0` (it is the verdict channel); `key_size == 0`, NULL, or
  empty inputs are safe no-ops. **Fail-closed:** an unprocessed/degenerate row
  keeps its non-zero id (= rejected), never a false accept.
- `n` is unbounded — rows are walked in internal device-sized chunks, so there is
  no maximum and no size-mismatch error.
- **Dedicated CUDA kernel:** the GPU collect path uses a purpose-built on-device
  kernel (`ufsecp_gpu_ecdsa_verify_collect` / `_schnorr_verify_collect`) that is a
  verbatim copy of the verify kernel with only the output store changed (verdict
  written on-device). OpenCL and Metal inherit a safe `Unsupported` default and the
  bridge transparently falls back to the host-collapse path — all paths produce an
  identical rejected set.

**Consensus parity:** the collect rejected-set is proven **GPU == CPU ==
libsecp256k1 bit-for-bit** (and byte-for-byte on the row buffers) for both ECDSA
and Schnorr over a mixed corpus covering all rejection classes
(`tests/test_lbtc_consensus_diff.cpp`, validated on an NVIDIA RTX 5060 Ti). The CPU
reference is itself gated bit-for-bit against libsecp256k1.

**Performance:** the dedicated CUDA collect kernel measured **within noise** of the
host-collapse path on the test hardware (the elliptic-curve verify dominates the
runtime). **No throughput improvement is claimed for the collect kernel** in this
release — it ships as a consensus-neutral, correctly-specialized path and the
foundation for a future fully-on-device de-interleave. (See the project's strict
"no unverified benchmark numbers" policy.)

---

## Security & consensus fixes

- **bbhunt-001 — ECDSA recovery `r >= (p − n)` (consensus).** `ecdsa_recover` now
  rejects a recovery with `recid & 2` set when `r >= (p − n)`, where adding the
  curve order would overflow the field prime. Applied consistently across the CPU
  path, the libsecp256k1 shim, the C ABI, and the CUDA / OpenCL recovery kernels.
  Regression test `test_regression_recover_rplus_n_overflow` (8/8).
- **CT-CRYPTO-001 — branchless `ct::scalar_mul`.** The public variable-base
  constant-time scalar multiply no longer branches on the secret GLV sign bit; it
  uses the existing branchless masked-select helper (the same form already used by
  the four sibling `scalar_mul_*` variants). Reached from ECDH, ellswift XDH and
  secret-scalar tweak-mul. Regression test
  `test_regression_ct_glv_make_v_branchless` (256 random scalars, both polarities,
  bit-exact vs the variable-time reference).
- **bbhunt-002 — adaptor entropy erasure.** `aux_rand` (and the secret key on
  early-return paths) are now securely erased in the zero-knowledge adaptor path.
- **PASS-COMPAT-001/002/004 — shim fail-closed output zeroing.** The libsecp256k1
  shim seckey operations, `ecdsa_recover`, and `xonly_pubkey_tweak_add` now zero
  their output buffers on failure, matching upstream libsecp256k1 behavior.
- **MED-3 / P1-SEC-01 — MuSig2 signer-index bypass.** `musig2_partial_sign`
  fail-closes (`Scalar::zero()`) when the aggregated signer set is empty;
  `ufsecp_musig2_partial_sign` (v1 ABI) hard-fails with a migration message and
  `_v2` populates the signer set before signing. The MSI-4 regression is now
  mandatory (was advisory-skipped).

Every fix above lands with its regression test in the same change, per the
project's security-fix-has-test gate.

---

## Audit, assurance & CI

- **419 audit modules** (270 exploit PoCs + 149 non-exploit) in the unified audit
  runner, all wired and cataloged.
- **Rule 16 enforcement moved post-build** — the advisory-skip-return gate now runs
  after the runner is built in three independent CI choke points (preflight, gate
  shim-gate, release), where it can actually verify the `rc == 77` skip contract.
- **ABI hostile-caller manifest** extended to cover the new GPU collect functions
  with the full null / zero-edge / invalid / smoke quartet; misuse-resistance gate
  at 184/184 ABI functions.
- **External audit evidence bundle** regenerated (12/12 checks) over the new
  modules, claims, hostile-caller contract, and assurance ledger.
- **New / hardened CI gates** added during the cycle (ABI version sync, randomize-
  claim consistency, required-checks-match-jobs, advisory-JSON Rule 16, doc module
  counts) and a Scorecard `Pinned-Dependencies` fix (the NuGet workflow's
  chocolatey `ninja` install is now version-pinned).
- **55 CI workflows**; GPU backends remain local-only by design (no hosted GPU
  runners) — GPU correctness is gated by the differential consensus tests.

---

## Performance (measured)

All figures are measured on the release hardware under a hard turbo lock
(`intel_pstate/no_turbo=1`, `governor=performance`, `taskset -c 0 nice -20`),
warm-cache (500 warmup ops, 11 passes with IQR trimming), and are **vs
libsecp256k1**. They trace to the canonical artifacts noted; do not extrapolate to
other hardware.

| Operation | Result | Source (do not hand-copy ratios) |
|-----------|--------|----------------------------------|
| CT signing (GCC 14.2.0) | Faster than libsecp256k1 (CT-vs-CT) | Current measured ratios + methodology: `docs/canonical_numbers.json` (`ct_signing_gcc`) and `docs/bench_unified_2026-05-30_gcc14_x86-64.json` |
| Taproot signing | Faster than libsecp256k1 | `docs/canonical_numbers.json` (`taproot_signing`) and `docs/BITCOIN_CORE_BENCH_RESULTS.json` |

Per project policy, benchmark ratios are **not hand-copied into prose** — they live
in `docs/canonical_numbers.json` and the dated `docs/bench_unified_*.json` /
`docs/BITCOIN_CORE_BENCH_RESULTS.json` artifacts (the single source of truth, with
full methodology: hard turbo lock, warm-cache, GCC 14.2.0). Compiler matters for CT
signing (GCC vs Clang differ materially); ConnectBlock deltas remain within the
documented noise margin. The libbitcoin collect kernel: **no speedup claimed**
(within noise on the test GPU — see above).

---

## API / ABI

- **ABI version 4 — no break.** v4.0.0 callers need no changes; this is a SemVer
  minor bump (additive APIs + new fail-closed behavior on a previously deprecated
  v1 MuSig2 path; v2 callers unaffected). Language bindings expect ABI 4.
- **New (additive) C ABI:**
  - `ufsecp_lbtc_verify_ecdsa_collect` / `ufsecp_lbtc_verify_schnorr_collect`
    (libbitcoin bridge, in-place collect).
  - `ufsecp_gpu_ecdsa_verify_collect` / `ufsecp_gpu_schnorr_verify_collect`
    (engine GPU ABI; non-CUDA backends return `Unsupported`).
- The 80-function libsecp256k1-compatible shim API is unchanged.

---

## Backends & compatibility

| Backend | Status | Collect path |
|---------|--------|--------------|
| CPU (fast + CT) | Full assurance, gated vs libsecp256k1 | Reference |
| CUDA | Full GPU ABI; consensus-gated | Dedicated on-device kernel |
| OpenCL | ABI-complete | Host-collapse fallback (consensus-identical) |
| Metal | ABI-complete | Host-collapse fallback (consensus-identical) |

Drop-in libsecp256k1 ABI shim; usable as a secondary, compile-time-selectable
backend (e.g. behind a `WITH_ULTRAFAST` switch) — not a replacement.

---

## Upgrade notes

- **No action required** for existing v4.0.0 integrations — API and ABI compatible.
- The new collect API is opt-in. If you adopt it: the rows buffer must be
  **writable** (the verdict is written in place), `key_size` must be `> 0`, and you
  read results by scanning for non-zero key cells.
- v1 `ufsecp_musig2_partial_sign` now hard-fails; migrate to
  `ufsecp_musig2_partial_sign_v2` (populates the signer set).

## Known limitations

- The dedicated CUDA collect kernel shows no measurable speedup over host-collapse
  on the test hardware; native OpenCL/Metal collect kernels are a documented
  follow-up (they currently use the consensus-identical host-collapse fallback).
- GPU backends are validated locally only (no hosted-CI GPU); correctness is
  enforced by the GPU==CPU==libsecp256k1 differential tests.

## Acknowledgments

- libbitcoin (evoskuil) — design collaboration on the batch acceleration bridge
  and the collect API shape.
- Ongoing BIP-352 / silent-payments and Bitcoin Core integration discussions.

---

*Generated for release preparation. Benchmark figures trace to the canonical
`docs/bench_unified_*.json` and `docs/BITCOIN_CORE_BENCH_RESULTS.json` artifacts;
no figure in this document is an estimate or extrapolation.*
