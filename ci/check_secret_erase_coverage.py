#!/usr/bin/env python3
"""check_secret_erase_coverage.py — CT-04 / RT-05 regression gate.

Every libsecp256k1-shim function that parses a PRIVATE KEY into a local scalar
must securely erase that stack residue before returning. The CT-01 sweep
(commit 24b29021) covered shim_ecdsa/ellswift/recovery + bip32 but missed
secp256k1_keypair_xonly_tweak_add (CT-04) and all of shim_seckey.cpp (RT-05).
This gate enumerates every shim function that parses a seckey source and requires
at least one secure_erase in its body, so the gap cannot reopen silently.

Robustness (after the 2026-05-29 pre-commit review caught a false-negative):
  * Comments/strings are stripped before scanning, so a function-like phrase in a
    comment ("R-grinding loop (grind=true ...)") is not mistaken for a real header.
  * The seckey-parse pattern tolerates a reinterpret_cast/static_cast wrapper and
    line breaks, so secp256k1_ecdsa_sign_recoverable
    (parse_bytes_strict_nonzero(reinterpret_cast<const uint8_t*>(seckey), ...))
    is detected — previously it escaped and removing its erases still passed.
  * A self-check asserts known-critical signing functions stay in the detected set;
    if the pattern ever goes blind to one, the gate FAILS instead of false-passing.

Exit 0 = OK, 1 = a seckey-parsing shim function lacks secure_erase / a critical fn
escaped detection.
"""
import re
import sys
from pathlib import Path

SHIM_DIRS = [
    Path("compat/libsecp256k1_shim/src"),
    Path("compat/libsecp256k1_bchn_shim/src"),
]

# A parse of a SECRET-KEY source (not a public tweak), tolerating an optional
# reinterpret_cast/static_cast wrapper and arbitrary whitespace/newlines.
SECKEY_PARSE = re.compile(
    r"parse_bytes_strict(?:_nonzero)?\s*\(\s*"
    r"(?:(?:reinterpret_cast|static_cast)\s*<[^>]*>\s*\(\s*)?"
    r"(seckey32|seckey|keypair->data|kb|privkey_scalar|privkey|priv_scalar)\b"
)

# Functions that are KNOWN to parse a private key. If the pattern stops detecting
# any of these, the regex has gone blind — fail loudly rather than silently pass.
EXPECTED_CRITICAL = {
    "secp256k1_ec_pubkey_create",
    "secp256k1_ecdsa_sign",
    "secp256k1_ecdsa_sign_recoverable",
    "secp256k1_keypair_create",
    "secp256k1_keypair_xonly_tweak_add",
    "secp256k1_ec_seckey_tweak_add",
    "secp256k1_ec_seckey_negate",
}


def strip_comments(src: str) -> str:
    """Remove /* */ and // comments (replace with spaces to keep offsets sane)."""
    src = re.sub(r"/\*.*?\*/", lambda m: " " * len(m.group(0)), src, flags=re.S)
    src = re.sub(r"//[^\n]*", lambda m: " " * len(m.group(0)), src)
    return src


def iter_functions(src: str):
    """Yield (name, body) for each `... name(...) { ... }`. `src` must already be
    comment-stripped (strip_comments) so a function-like phrase inside a comment is
    not mistaken for a header. The return type before the name is ignored — the
    captured group is the identifier immediately preceding the parameter list."""
    for m in re.finditer(r"\b([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{}]*\)\s*\{", src):
        name = m.group(1)
        if name in ("if", "for", "while", "switch", "catch", "return", "sizeof", "do", "else"):
            continue
        open_brace = src.index("{", m.start())
        depth = 1
        j = open_brace + 1
        while j < len(src) and depth > 0:
            c = src[j]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
            j += 1
        if depth == 0:
            yield name, src[open_brace:j]


def main() -> int:
    files = []
    for d in SHIM_DIRS:
        if d.is_dir():
            files.extend(sorted(d.glob("*.cpp")))
    if not files:
        print("check_secret_erase_coverage: no shim sources found — run from repo root")
        return 1

    errors = 0
    checked = 0
    detected = set()
    for f in files:
        src = strip_comments(f.read_text())
        for name, body in iter_functions(src):
            if not SECKEY_PARSE.search(body):
                continue
            checked += 1
            detected.add(name)
            if "secure_erase" not in body:
                print(f"::error::{f}: {name}() parses a private key "
                      f"(parse_bytes_strict on a seckey source) but has NO "
                      f"secure_erase — secret stack residue (CT-04/RT-05 class).")
                errors += 1

    print(f"check_secret_erase_coverage: checked {checked} seckey-parsing shim "
          f"function(s) across {len(files)} file(s)")

    missing_critical = EXPECTED_CRITICAL - detected
    if missing_critical:
        print(f"::error::check_secret_erase_coverage: known seckey-parsing function(s) "
              f"NOT detected (pattern went blind): {sorted(missing_critical)}. "
              f"Fix the SECKEY_PARSE regex — the gate would otherwise false-pass.")
        errors += 1

    if errors:
        print(f"check_secret_erase_coverage: {errors} problem(s) — add secure_erase "
              f"on every return path / repair detection.")
        return 1
    print("check_secret_erase_coverage: OK — every seckey-parsing shim function erases "
          f"(incl. all {len(EXPECTED_CRITICAL)} critical signing/derivation paths).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
