#!/usr/bin/env python3
"""
test_check_backend_parity.py — unit test for ci/check_backend_parity.py.

Guards the fail-closed property: the backend-parity gate must (a) actually read all
declared backend files (no stale paths silently skipped — the bug that made it read
only 3 of 7 files and still PASS), and (b) FAIL when a declared file cannot be read,
rather than passing on absent inputs ("silent-skip-on-absent" theater).

Self-contained. Exit 0 = pass, 1 = fail.
"""
import importlib.util
import json
import os
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GATE = os.path.join(ROOT, "ci", "check_backend_parity.py")

failures = []


def check(cond, msg):
    print(("  ok  : " if cond else "  FAIL: ") + msg)
    if not cond:
        failures.append(msg)


def run_report(chk):
    with tempfile.NamedTemporaryFile("r", suffix=".json", delete=False) as f:
        path = f.name
    chk.run(json_mode=False, out_file=path)
    rep = json.load(open(path))
    os.unlink(path)
    return rep


def main() -> int:
    spec = importlib.util.spec_from_file_location("chk", GATE)
    chk = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(chk)

    total = len(chk.FAMILY_SIGN_FILES) + len(chk.FAMILY_ECDH_FILES)

    # 1. On the real tree: every declared file resolves and is read; no silent skips.
    rep = run_report(chk)
    check(rep["files_absent"] == 0,
          f"no declared backend file silently absent (absent={rep['files_absent']})")
    check(rep["files_checked"] == total,
          f"all {total} declared backend files read (checked={rep['files_checked']})")
    check(rep["overall_pass"] is True,
          "real tree passes (no copy-paste divergence + no absent files)")

    # 2. Inject a bogus declared path -> the gate must FAIL (fail-closed), not pass.
    chk.FAMILY_SIGN_FILES.append("src/opencl/kernels/__does_not_exist__.cl")
    rep2 = run_report(chk)
    check(rep2["files_absent"] >= 1, "bogus declared path counted as absent")
    check(rep2["overall_pass"] is False,
          "gate FAILS when a declared file is absent (fail-closed, not silent-skip)")

    print("\n" + ("ALL PASS" if not failures else f"FAILURES: {len(failures)}"))
    return 1 if failures else 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
