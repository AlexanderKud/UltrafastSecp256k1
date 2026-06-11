#!/usr/bin/env python3
"""
Self-test for ci/check_soundness_coverage.py — DON'T TRUST, VERIFY.

We do not trust that the soundness-coverage gate works; we PROVE it blocks by
injecting violations and asserting it returns non-zero, and that a clean ledger
returns zero. A gate that cannot be shown to block is not a gate.
"""
import importlib.util
import json
import os
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _load():
    spec = importlib.util.spec_from_file_location(
        "csc", os.path.join(ROOT, "ci", "check_soundness_coverage.py"))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def _run_with_ledger(m, ledger_obj):
    fd, path = tempfile.mkstemp(suffix=".json")
    os.close(fd)
    json.dump(ledger_obj, open(path, "w"))
    saved = m.LEDGER
    try:
        m.LEDGER = path
        return m.main()
    finally:
        m.LEDGER = saved
        os.remove(path)


def main() -> int:
    m = _load()
    fails = []

    # 1. The real ledger must currently PASS (the gate is not spuriously red).
    if m.main() != 0:
        fails.append("real SOUNDNESS_INVARIANTS.json should pass (exit 0)")

    # 2. A 'covered' invariant whose probe is NOT wired must BLOCK (exit 1).
    bad = {"invariants": [{
        "id": "selftest-unwired", "verify_function": "ecdsa_adaptor_verify",
        "claim": "x", "probe_module": "soundness_DOES_NOT_EXIST",
        "probe_run_symbol": "test_soundness_DOES_NOT_EXIST_run", "status": "covered"}]}
    if _run_with_ledger(m, bad) == 0:
        fails.append("a 'covered' invariant with an unwired probe MUST block (expected exit 1)")

    # 3. A 'covered' invariant with NO probe declared must BLOCK.
    bad2 = {"invariants": [{
        "id": "selftest-noprobe", "verify_function": "ecdsa_adaptor_verify",
        "claim": "x", "probe_module": None, "probe_run_symbol": None, "status": "covered"}]}
    if _run_with_ledger(m, bad2) == 0:
        fails.append("a 'covered' invariant with no probe MUST block (expected exit 1)")

    print("=" * 60)
    if fails:
        print("  check_soundness_coverage SELF-TEST: FAILED")
        for f in fails:
            print("   - " + f)
        print("=" * 60)
        return 1
    print("  check_soundness_coverage SELF-TEST PASSED")
    print("  (gate proven to block unwired/undeclared probes; clean ledger passes)")
    print("=" * 60)
    return 0


if __name__ == "__main__":
    sys.exit(main())
