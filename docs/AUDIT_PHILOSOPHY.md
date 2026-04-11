# Audit Philosophy — UltrafastSecp256k1

> **Core principle:** Every security claim must be backed by a concrete,
> executable test — and that test must pass on every commit.

---

## Our View

In UltrafastSecp256k1, auditing is treated as a **continuous practice**, not
a one-time event. The approach rests on a single premise:

> **What is not verified on every commit is not guaranteed.**

Every security claim — "constant-time", "NULL-safe", "reject invalid inputs",
"matches reference implementation" — is tied to a specific, executable test.
Code and evidence evolve together and are verified together.

This does not make formal external audit redundant — quite the opposite.
Full transparency means that every claim, every test mapping, and every
coverage gap is already documented and machine-readable. If anyone ever
wants or needs a formal engagement, they arrive at a fully evidenced system,
not a blank canvas. The claim→test→evidence chain is already in place.
That substantially reduces the cost and duration of any external review.

---

## Four Pillars

### I. Claim → Evidence Traceability

Every security claim must exist as three components:

```
claim             →  test                  →  CI gate
"CT on x86-64"   →  ct_verif + dudect     →  ct-verif.yml
"no bias"         →  126 CT tests          →  security-audit.yml
"reject twist"    →  exploit_ecdh_twist    →  security-audit.yml
```

`docs/AUDIT_TRACEABILITY.md` is the canonical table for this mapping.
A claim without a test is not a claim — it is an intention.

### II. Adversarial Regression Culture

Every research paper or CVE relevant to the secp256k1 ecosystem becomes a
PoC test. The library must survive that test on every commit.

**171 exploit-PoC registered modules, 187 test files** — covering:

| Attack category | Examples |
|-----------------|----------|
| Nonce bias / lattice | ePrint 2023/841, 2024/296 (HNP lattice sieve) |
| DFA / fault injection | ePrint 2017/975 (RFC 6979 DFA) |
| Timing / CT leaks | ePrint 2024/1380 (EUCLEAK), 2024/589 (cmov SPA) |
| FROST / threshold | ePrint 2026/075 (weak binding), 2020/852 (rogue-key) |
| Batch verify bypass | ePrint 2026/663 (modified batch verify) |
| Schnorr hash order | ePrint 2025/1846 (Fiat-Shamir violation) |
| Type confusion | CVE-2024-49364, CVE-2022-41340 |
| Nonce reuse cascade | ePrint 2025/654 (cross-key) |
| ROS attack | ePrint 2020/945 (concurrent Schnorr) |
| ZVP-DCP | ePrint 2025/076 (GLV multiscalar) |

Principle: **document the attack, build the PoC, gate it in CI**.
The team's memory does not define the security posture — CI's memory does.
When a new CVE or ePrint arrives, it is met with a PoC first.
After the patch, that PoC remains as a permanent regression guard.

### III. Formal + Empirical CT Verification

Constant-time correctness is verified through three independent pipelines:

```
ct-verif.yml      — LLVM IR symbolic CT analysis   (compile-time)
valgrind-ct.yml   — Valgrind Memcheck taint prop.  (runtime)
ct-prover.yml     — dudect statistical timing test (empirical)
```

All three run on x86-64. `ct-arm64.yml` runs the full pipeline on arm64.

**45 Cryptol properties** across 4 `.cry` files verify algebraic correctness
of field arithmetic, ECDSA, and Schnorr via the Cryptol/SAW platform.

A CT claim is not "the code looks side-channel-free."
A CT claim is "ct-verif says OK, Valgrind says OK, dudect says OK" —
on every commit, across two architectures.

### IV. Layered Risk Stratification

Not every function warrants the same scrutiny. The system applies three tiers:

| Tier | Scope | Requirements |
|------|-------|-------------|
| **Tier 1** | Core ECC, ECDSA, Schnorr, ECDH, CT paths, C ABI | Full coverage, CT + fuzz + exploit PoC |
| **Tier 2** | BIP-32, BIP-340 advanced, FROST, MuSig2, ZK | High coverage, fuzz, regression |
| **Tier 3** | GPU batch ops, language bindings, tooling, benchmarks | ABI-level testing, backend audit |

No CT claims are made for GPU code — vendor JIT may reintroduce branches.
The GPU is used exclusively for **public-data pipelines** (batch verify, scan,
hash). Secrets stay in the CPU CT layer permanently.

---

## Continuous Evidence Pipeline

```
code change
    │
    ▼
build + static analysis (clang-tidy, CodeQL)
    │
    ▼
unit + integration tests  ──────────────────►  coverage gate
    │
    ▼
unified_audit_runner
 ├── 51 non-exploit audit modules  (correctness, edge cases, ABI)
 └── 171 exploit-PoC modules       (CVE/ePrint adversarial cascade)
    │                                          ~1,000,000+ assertions / build
    ▼
CT verification  (ct-verif + Valgrind + dudect, x86-64 + arm64)
    │
    ▼
fuzz  (11 harnesses, libFuzzer, sanitizers)
    │
    ▼
1.3M nightly differential checks vs reference implementation
    │
    ▼
SLSA provenance + assurance export → AUDIT_TRACEABILITY.md
```

Every stage is a CI gate. A failing gate blocks merge.

---

## System Properties

### 1. Claim = Evidence, Not Intent

Every security claim has a corresponding CI workflow, test file, and evidence
artifact documented alongside it. `WHY_ULTRAFASTSECP256K1.md` exposes this
mapping in full. A claim that cannot be linked to a test is removed.

### 2. Attack-First Design

The starting question is never "does this code look correct?"
The starting question is "is this attack vector viable on this code?"
PoC first. Test first. Claim only after both pass.

### 3. Machine-Readable Audit Index

`tools/source_graph_kit/source_graph.py` maintains a live engineering index:

- **9,071** indexed functions across **406,505** LOC and **17** project dimensions
- **4,766** test→function mappings discovered via call-mention analysis
- **1,033** per-file audit coverage rows
- **8,638** symbol-level audit scores
- Backend parity tracking: **83 full**, **119 gpu-full**, **0 missing-metal**, **0 missing-opencl**
- Active review queue: **7 real audit gaps**, **6 untested hotspots**, **9 high-gain targets**

The graph allows machine-readable queries: "Which functions have CT coverage?",
"Which files have audit gaps?", "Which GPU operations are missing from which backend?"

### 4. Always Audit-Ready

`scripts/external_audit_prep.sh` produces in a single command:
- preflight output (platform and toolchain verification)
- assurance export (machine-readable coverage and risk matrix)
- traceability artifacts (claim → test → evidence links)
- full audit package (source, build, coverage, SLSA provenance)

This infrastructure exists first for per-commit discipline.
The side effect: any party who wants to audit the system can start immediately
from this evidence base rather than from first principles.

---

## On the "Single-Maintainer Risk" Question

This project is sometimes characterised as a single-maintainer project,
with the associated concern that one person's absence could stall security work.
That characterisation is accurate for governance and community size,
but it misrepresents how security review actually works here.

**The project operates under continuous LLM-assisted audit.**

Every non-trivial change is developed in collaboration with large language
models (currently Claude Sonnet) acting as a persistent, structured security
reviewer. This is not autocomplete — it is a deliberate workflow:

- The LLM reviews each change for CT correctness, null-safety, ABI stability,
  and exploit surface before the code is committed.
- It cross-references every security claim against indexed evidence in the
  source graph and the audit traceability matrix.
- It flags regressions in exploit PoC coverage, missing parity across GPU
  backends, and stale documentation, all within the same session as the change.
- It has read-level access to 9,071 indexed functions and the full audit
  infrastructure, making its review as wide as the codebase, not just the diff.

The result is a review cycle that runs on every change, not periodically.
It is not a replacement for human cryptographic expertise or for formal
third-party engagement — but it is a qualitatively different security posture
from a solo developer committing code without review.

Practically, this means:

| Traditional solo project | This project |
|--------------------------|-------------|
| Changes reviewed by one person | Every change reviewed by maintainer + LLM audit session |
| Security gaps accumulate between audits | Security gaps flagged at commit time |
| Institutional memory lives in one head | Institutional memory lives in CI, source graph, and audit DB |
| Bus factor = 1 | CI, tests, and evidence infrastructure are fully reproducible by any successor |

The CI pipelines, audit runner, source graph, exploit PoC suite, and
traceability documents are all self-contained and documented.
A successor or external auditor can reproduce the full audit state from the
repository alone, without any knowledge transfer from the original maintainer.

That is the deeper purpose of "audit-as-code": it is also bus-factor mitigation.

---

## What This System Does Not Claim

Honesty is as important as coverage:

- **Physical attacks:** Power analysis, EM side-channels, cold boot — out of scope.
- **Compromised toolchain:** No guarantees if the build environment is untrusted.
- **OS-level memory disclosure:** Beyond this library's boundary.
- **Post-quantum:** secp256k1 is not quantum-resistant — stated explicitly.
- **GPU CT guarantees:** Vendor JIT may re-introduce branches. GPU = public data only, by design.
- **Formal third-party audit:** Not yet conducted. The system is designed to make one as
  efficient as possible when it happens.

---

## "Audit-as-Code" — a Culture, Not a Tool

The `audit/` directory with 187 PoC test files is **institutional memory**.

Behind each PoC is the question: "Has this attack vector been demonstrated
against the secp256k1 ecosystem?" If yes — that PoC lives in CI, on every
commit. After a patch, the PoC remains as a permanent regression guard.
The library does not just get patched against known attacks.
It carries proof of resistance on every build.

---

## Known Open Questions

Full transparency means known gaps are visible too:

| Question | Status |
|----------|--------|
| Formal third-party cryptographic audit | Not yet conducted — this system is designed to enable one efficiently |
| ROCm/AMD hardware validation | Experimental |
| GPU CT formal guarantees | Not possible by design (vendor JIT) |
| Differential fuzzing vs libsecp256k1 | Partial, not exhaustive |
| Formal verification (Fiat-Crypto level) | Cryptol covers field arithmetic; broader coverage is future work |

Publishing these gaps openly means any external party can focus their effort
precisely where it adds the most value, without redundant discovery work.

---

## How This Simplifies External Engagement

If anyone ever wants or needs a formal third-party audit of this library,
the system substantially reduces the cost and time of that engagement:

- **Claim inventory** — `docs/AUDIT_TRACEABILITY.md` maps every security claim
  to a test. An auditor starts from this list, not from scratch.
- **Machine-readable index** — the source graph covers 9,071 functions with
  coverage scores, audit gaps, and dependency chains queryable in seconds.
- **Evidence artifacts** — `scripts/external_audit_prep.sh` produces a full
  audit package (source, tests, coverage, SLSA provenance) in one command.
- **Attack surface** — `docs/ATTACK_GUIDE.md` and the 187 PoC modules show
  exactly which attack vectors are already covered. An auditor verifies
  existing coverage and focuses on what is still open.
- **Reproducible builds** — SLSA provenance allows any party to independently
  verify build integrity.

This does not replace external scrutiny — it makes that scrutiny more targeted.

---

## Related Documents

| Document | Contents |
|----------|----------|
| [AUDIT_TRACEABILITY.md](AUDIT_TRACEABILITY.md) | Claim → test → CI gate mapping |
| [AUDIT_GUIDE.md](AUDIT_GUIDE.md) | How to run the audit suite |
| [AUDITOR_QUICKSTART.md](AUDITOR_QUICKSTART.md) | 3-command start for external reviewers |
| [AUDIT_SCOPE.md](AUDIT_SCOPE.md) | External engagement scope definition |
| [BACKEND_ASSURANCE_MATRIX.md](BACKEND_ASSURANCE_MATRIX.md) | Per-backend assurance levels |
| [ATTACK_GUIDE.md](ATTACK_GUIDE.md) | Attack vectors and PoC references |
| [AUDIT_REPORT.md](../AUDIT_REPORT.md) | Historical baseline (641,194 checks) |
| [WHY_ULTRAFASTSECP256K1.md](../WHY_ULTRAFASTSECP256K1.md) | Engineering discipline and audit narrative |

---

*UltrafastSecp256k1 — Continuous evidence. Full transparency. Audit-ready by design.*
