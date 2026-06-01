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
