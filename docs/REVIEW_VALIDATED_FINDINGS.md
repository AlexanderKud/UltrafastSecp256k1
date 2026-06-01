# Review-Validated Findings — Do Not Re-Flag

This is a ledger of audit/review findings that have been **adversarially validated
against the actual code** and resolved (fixed, or confirmed false-positive /
intentional). Each entry says *why* — so the same finding does not get re-raised
on every fresh review pass.

> **For review agents / models:** before reporting a finding, check this file AND
> the knowledge base (`python3 tools/knowledge_base/knowledge_base.py for <symbol>`,
> or `query --tag review-validated-fp`). If a finding here matches your candidate,
> do **not** re-report it — either cite this ledger as "already validated" or, if
> you believe the code has since changed, quote the *current* code that contradicts
> the entry. A finding without current contradicting code is a regression of a
> known false-positive and must be suppressed.

## How validation is done

Findings are checked by reading the **actual files** (not the review summary),
quoting the verbatim code, and reasoning about intent. Review summaries routinely
mis-characterize code (e.g. inferring a "stale version" from a throughput value,
or a "secret-dependent branch" from a constant-outcome guard). The verdict is set
from the code, not the claim.

---

## 2026-06-01 — 10-Pass Multi-Agent Review (commit 40d7e92)

Of the 6 P1 findings, **2 were real (fixed)** and **4 were false-positive /
intentional**. One P2 (BENCH-001) was also a false-positive.

| ID | Claim | Verdict | Why | KB id |
|----|-------|---------|-----|-------|
| RED-001 | `ufsecp_schnorr_sign_batch` doc says `aux_rands32=NULL` allowed, impl rejects | **REAL → fixed** (5ab0ce27) | Impl deliberately requires non-NULL (SEC-006). Doc was wrong; corrected in `ufsecp.h` + `API_REFERENCE.md`. `aux_rands32` is **required** (pass a zero-filled buffer to opt out of hedging). | `AUX-RANDS-REQUIRED-FIXED` |
| TQ-001 | Wycheproof ECDSA/ECDH tests `(void)ecdsa_verify(...)` "no crash = pass" | **REAL → fixed** (5ab0ce27) | 6 edge probes now assert: tampered sigs → `CHECK(!ecdsa_verify)`, off-curve ECDH → `CHECK(determinism)`. Verified ECDSA 89/0, ECDH 36/0. | `WYCHEPROOF-ASSERTS-FIXED` |
| RED-002 | Zero-count batch sign accepts `sigs64_out==NULL` | **FALSE POSITIVE** | NULL check returns `UFSECP_ERR_NULL_ARG` *before* the `count==0 → UFSECP_ERR_BAD_INPUT` check (Rule 15). Fail-closed ordering is intentional. | `BATCH-SIGN-NULL-COUNT-ORDERING` |
| RED-003 | Batch `count==0` path skips output `memset` | **FALSE POSITIVE / non-issue** | `count==0` ⇒ output region is 0 bytes (nothing to expose) and the function returns `BAD_INPUT`. Cosmetic asymmetry only. | `BATCH-ZEROCOUNT-OUTPUT-NONISSUE` |
| COMPAT-001 | `secp256k1_ec_pubkey_serialize` flag check diverges from libsecp | **FALSE POSITIVE** | The shim tests `flags & SECP256K1_FLAGS_BIT_COMPRESSION` (bit `0x100`) — **byte-identical** to upstream `secp256k1.c`. Same output for `0x02`, `0x102`, and invalid `0xDEAD`. Not a divergence. | `PUBKEY-SERIALIZE-FLAG-MATCHES-UPSTREAM` |
| CT-001 | `if (!R.is_infinity())` in `ecdsa_sign` branches on secret nonce | **FALSE POSITIVE** | `R = k·G`, `k ∈ [1,n-1]` (rfc6979 strict-nonzero) ⇒ on the prime-order group `R` is **never** infinity, so the branch outcome is constant (always false) regardless of the secret value → leaks nothing. Defensive guard matching RFC6979/libsecp; removing it would be the real risk. | `CT-INFINITY-GUARD-BENIGN` |
| BENCH-001 | `docs/BENCHMARKS.md` shows "stale version 3.14.0" | **FALSE POSITIVE** | The `3.14` is a throughput value (`field_add … 3.14 M/s`, line 911), not a version. The header carries no version string. | — |

### CodeQL code-scanning (12 alerts, all `note` severity — dismissed)

All dismissed with documented reasons (GitHub code-scanning, 2026-05-31):

- **8× `cpp/include-non-header`** (`ufsecp_impl.cpp`): intentional **unity build** (the file `#include`s the domain impl `.cpp` files — see the comment at its line 405). `won't fix`.
- **`cpp/unused-local-variable` point.cpp**: variable is already `[[maybe_unused]]`. `false positive`.
- **`cpp/unused-local-variable` taproot.cpp / adaptor.cpp**: structured binding — the parity element *is* used; the first element is an unavoidable binding artifact. `false positive`.
- **`cpp/unused-local-variable` address.cpp**: `s_base_state` *is* used — captured by-reference in the `compress_to_scalar` lambda (`s_base_state.data()` memcpy). CodeQL missed the lambda capture. `false positive`. (A naive "remove the dead variable" fix would break the build.)

---

## 2026-06-01 — 10-Pass Multi-Agent Review (commit d3313068)

| ID | Claim | Verdict | Why | KB id |
|----|-------|---------|-----|-------|
| SHIM-001 | `secp256k1_schnorrsig_sign_custom` rejects `msglen != 32` while header/tests/upstream expect varlen | **REAL → fixed** (2026-06-01) | Confirmed against code: `shim_schnorr.cpp` did `if (msglen != 32) return 0;` (AUDIT-003 left-over), while upstream `secp256k1_schnorrsig_sign_custom` → `sign_internal(…, msg, msglen, …)` accepts any length, the shim header point 3 promised varlen, and `test_regression_schnorr_varlen_ct_fixes` (VCS-1..5) + `test_shim_security_edge_cases:265` asserted success. The rejection was added only because shim *verify* was 32-only at the time; verify is now varlen (SHIM-004), so the asymmetry is gone. Restored varlen signing via a new `ct::schnorr_sign(kp,msg,msglen,aux)` overload (mirror of the fixed-32 CT path); header comments corrected; VCS-7 round-trip added. | `SHIM-SCHNORR-VARLEN-RESTORED` |
| TEST-003 | `valgrind_ct_check.sh` verdict ignores `UNINIT_ERRORS`/`VG_EXIT` (CT false-green) | **OPEN (real, not yet fixed)** | Separate finding from the same review; tracked in `workingdocs/REVIEW_2026-05-31_coder_report.md` §3 (P1-2). Not addressed in the SHIM-001 commit. | — |

> Note: a separate observation surfaced while verifying SHIM-001 — the shim-linked
> `test_shim_security_edge_cases_standalone` has **pre-existing** failures unrelated to this
> fix: `secp256k1_schnorrsig_verify_batch` returns 0 for a valid `sign32` signature (PERF-003,
> line 465; batch-varlen, line 276) and the 4 `*_precomp` calls return 0 with a valid ctx
> (SHIM-004-PRECOMP, lines 400-412). These reproduce with the untouched `sign32` path, so they
> are not caused by the varlen change. Filed for the owner; out of scope for SHIM-001.

> **Update 2026-06-01 (SHIM-001 test now actually executes):** `test_regression_schnorr_varlen_ct_fixes`
> used **wrong libsecp context-flag constants** (`CTX_SIGN=0x0101`, `CTX_VERIFY=0x0102`); `0x0102`
> sets the COMPRESSION type bit, so `secp256k1_context_create(SIGN|VERIFY=0x0103)` fired the
> illegal callback and **aborted before any VCS assertion ran** — and in the unified runner the
> module advisory-skips because the shim weak symbols are not linked into the audit binary. So the
> varlen path had **never been functionally validated**. Corrected to the real values
> (`VERIFY=0x0101`, `SIGN=0x0201` → `SIGN|VERIFY=0x0301`). With the fix, a standalone build linked
> against the shim runs **VCS-1..7 ALL PASS** (64/33/256/300-byte msgs, determinism, 32-byte
> fast-path delegation, sign/verify round-trip) — the varlen `ct::schnorr_sign` is now genuinely
> verified, not just asserted-on-paper.
