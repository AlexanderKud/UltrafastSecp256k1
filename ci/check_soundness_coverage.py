#!/usr/bin/env python3
"""
check_soundness_coverage.py — the soundness-coverage gate (negative-test ledger).

WHY (the bug class this prevents):
GHSA-c7q2-gv3g-rgxm slipped EVERY review and every CAAS gate because the entire
test/gate stack asserts that *correct* inputs are ACCEPTED (honest sign -> verify
roundtrips). The adaptor's "binding" was mathematically vacuous yet every honest
roundtrip still passed. The only thing that catches such a hole is a test built on
the INVERTED invariant: forge an input that VIOLATES the security property and
assert the verifier BLOCKS it. If the system cannot block the wrong case, that is
the hole.

This gate makes that discipline structural. docs/SOUNDNESS_INVARIANTS.json is a
ledger: every cryptographic verify/proof function declares its security invariant
and (when covered) a NEGATIVE-soundness probe wired into the audit runner. The gate:

  1. BLOCKS if a 'covered' invariant's probe is not actually wired (regression of
     existing soundness coverage).
  2. BLOCKS if a custom-protocol verify function exists in the engine source but is
     NOT in the ledger at all — a new soundness surface must be classified
     (covered with a forge-probe, or explicitly marked 'roadmap'). This is the
     check_security_fix_has_test analogue for soundness.
  3. REPORTS the 'roadmap' holes loudly (declared-but-not-yet-probed) so the gap is
     visible and closed incrementally.

Standard signature verifies (ecdsa_verify, schnorr_verify) are intentionally out of
scope: they have a differential oracle vs libsecp256k1. The ledger targets the
NOVEL/custom protocols (adaptor, DLEQ, ZK, MuSig2, FROST, range) that have none —
exactly where GHSA-c7q2 lived.

Exit 0 = clean, exit 1 = a covered probe is unwired or an uncataloged verify exists.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEDGER = os.path.join(ROOT, "docs", "SOUNDNESS_INVARIANTS.json")
RUNNER = os.path.join(ROOT, "audit", "unified_audit_runner.cpp")

# Custom-protocol source files whose verify/proof functions need a soundness invariant.
PROTOCOL_SOURCES = [
    "src/cpu/src/adaptor.cpp",
    "src/cpu/src/zk.cpp",
    "src/cpu/src/musig2.cpp",
    "src/cpu/src/frost.cpp",
]
# A `bool NAME(` definition at namespace scope (column 0) whose name carries "verify".
VERIFY_DEF = re.compile(r"^bool\s+([A-Za-z_]\w*verify\w*)\s*\(", re.MULTILINE)
# Internal/variant verifiers that are not the primary public soundness surface.
VARIANT_MARKERS = ("_base", "_impl", "_device", "_kernel", "_var")
VARIANT_PREFIXES = ("batch_",)


def fail(msg, out):
    out.append("  \033[91mFAIL\033[0m  " + msg)


def main() -> int:
    out = []
    blocking = 0

    if not os.path.exists(LEDGER):
        print(f"FAIL: soundness ledger not found: {LEDGER}")
        return 1
    ledger = json.load(open(LEDGER, encoding="utf-8"))
    invs = ledger.get("invariants", [])
    by_fn = {i.get("verify_function"): i for i in invs}

    runner_src = open(RUNNER, encoding="utf-8").read() if os.path.exists(RUNNER) else ""

    covered = [i for i in invs if i.get("status") == "covered"]
    roadmap = [i for i in invs if i.get("status") == "roadmap"]

    # (1) Every covered invariant must have its probe wired into the runner.
    for inv in covered:
        sym = inv.get("probe_run_symbol")
        mod = inv.get("probe_module")
        if not sym or not mod:
            fail(f"invariant '{inv['id']}' is 'covered' but declares no probe_run_symbol/probe_module", out)
            blocking += 1
            continue
        if sym not in runner_src:
            fail(f"covered probe '{sym}' not forward-declared/referenced in unified_audit_runner.cpp", out)
            blocking += 1
        if f'"{mod}"' not in runner_src:
            fail(f"covered probe module \"{mod}\" not registered in ALL_MODULES (unified_audit_runner.cpp)", out)
            blocking += 1

    # (2) Every custom-protocol verify function in the source must be in the ledger.
    scanned = {}
    for rel in PROTOCOL_SOURCES:
        p = os.path.join(ROOT, rel)
        if not os.path.exists(p):
            continue
        text = open(p, encoding="utf-8", errors="replace").read()
        for name in VERIFY_DEF.findall(text):
            scanned.setdefault(name, rel)
    uncataloged = []
    for name, rel in sorted(scanned.items()):
        if any(m in name for m in VARIANT_MARKERS) or name.startswith(VARIANT_PREFIXES):
            continue  # internal variant of a primary verifier
        if name not in by_fn:
            uncataloged.append((name, rel))
    for name, rel in uncataloged:
        fail(f"verify function '{name}' ({rel}) has NO soundness invariant in "
             f"docs/SOUNDNESS_INVARIANTS.json — add a forge-probe ('covered') or "
             f"classify it ('roadmap'). A claim with no negative test is a GHSA-c7q2-class hole.", out)
        blocking += 1

    # Report
    print("=" * 70)
    print("  Soundness-Coverage Gate (negative-test ledger)")
    print("=" * 70)
    print(f"  invariants: {len(invs)}  |  covered (probed): {len(covered)}  |  roadmap: {len(roadmap)}")
    for inv in covered:
        print(f"    \033[92m[COVERED]\033[0m {inv['verify_function']:24} <- {inv.get('probe_module')}")
    for inv in roadmap:
        print(f"    \033[93m[ROADMAP]\033[0m {inv['verify_function']:24} (forge-probe required: {inv['id']})")
    if out:
        print()
        print("\n".join(out))

    if blocking:
        print()
        print(f"\033[91m\033[1m  SOUNDNESS-COVERAGE: {blocking} blocking issue(s)\033[0m")
        print("  A negative-soundness probe forges an input that violates the invariant and")
        print("  asserts rejection. Without it, a verifying-but-unsound input goes undetected.")
        return 1

    print()
    if roadmap:
        print(f"  OK: all {len(covered)} covered probe(s) wired; {len(roadmap)} roadmap hole(s) "
              f"declared (forge-probes pending — close incrementally).")
    else:
        print(f"  OK: all {len(invs)} soundness invariants covered by wired forge-probes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
