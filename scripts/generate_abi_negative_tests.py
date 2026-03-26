#!/usr/bin/env python3
"""
generate_abi_negative_tests.py -- Build a hostile-caller coverage manifest for
the public C ABI.

This script scans public headers, existing hostile-caller documentation, and
project-graph test mappings to build a machine-readable manifest showing which
exports satisfy the four-part hostile-caller rule:

  1. NULL rejection for relevant pointer parameters
  2. Zero-count / zero-length / zero-key rejection where the contract implies it
  3. Invalid-content rejection for structured inputs and selectors
  4. Success-smoke coverage with valid inputs

Outputs:
  - docs/ABI_NEGATIVE_TEST_MANIFEST.json
  - docs/ABI_NEGATIVE_TEST_MANIFEST.md
"""

from __future__ import annotations

import json
import re
import sqlite3
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
LIB_ROOT = SCRIPT_DIR.parent
DB_PATH = LIB_ROOT / ".project_graph.db"
DOC_PATH = LIB_ROOT / "docs" / "FFI_HOSTILE_CALLER.md"
JSON_OUT = LIB_ROOT / "docs" / "ABI_NEGATIVE_TEST_MANIFEST.json"
MD_OUT = LIB_ROOT / "docs" / "ABI_NEGATIVE_TEST_MANIFEST.md"

HEADERS = [
    LIB_ROOT / "include" / "ufsecp" / "ufsecp.h",
    LIB_ROOT / "include" / "ufsecp" / "ufsecp_gpu.h",
]

CHECK_NULL = "null_rejection"
CHECK_ZERO = "zero_edge"
CHECK_INVALID = "invalid_content"
CHECK_SMOKE = "success_smoke"
ALL_CHECKS = [CHECK_NULL, CHECK_ZERO, CHECK_INVALID, CHECK_SMOKE]


@dataclass
class ExportedFunction:
    name: str
    header: str
    signature: str
    params: list[str]
    category: str


def _connect() -> sqlite3.Connection:
    con = sqlite3.connect(str(DB_PATH))
    con.row_factory = sqlite3.Row
    return con


def _normalize_signature(sig: str) -> str:
    return " ".join(sig.replace("\n", " ").split())


def _split_params(param_blob: str) -> list[str]:
    params = []
    depth = 0
    current = []
    for char in param_blob:
        if char == ',' and depth == 0:
            token = ''.join(current).strip()
            if token and token != 'void':
                params.append(token)
            current = []
            continue
        if char in '([':
            depth += 1
        elif char in ')]' and depth > 0:
            depth -= 1
        current.append(char)
    token = ''.join(current).strip()
    if token and token != 'void':
        params.append(token)
    return params


def scan_public_exports() -> list[ExportedFunction]:
    decl_re = re.compile(r'UFSECP_API\s+([^;{]+?\))\s*;', re.S)
    fn_re = re.compile(r'(ufsecp_\w+)\s*\((.*)\)')
    exports = []
    for header in HEADERS:
        text = header.read_text(encoding='utf-8', errors='replace')
        for match in decl_re.finditer(text):
            signature = _normalize_signature(match.group(1))
            fn_match = fn_re.search(signature)
            if not fn_match:
                continue
            name = fn_match.group(1)
            params = _split_params(fn_match.group(2))
            category = 'gpu' if '_gpu_' in name else 'cpu'
            exports.append(ExportedFunction(
                name=name,
                header=str(header.relative_to(LIB_ROOT)).replace('\\', '/'),
                signature=signature,
                params=params,
                category=category,
            ))
    return sorted(exports, key=lambda item: item.name)


def _doc_mentions() -> dict[str, dict[str, list[str]]]:
    text = DOC_PATH.read_text(encoding='utf-8', errors='replace')
    sections: dict[str, dict[str, list[str]]] = {}
    current = 'general'
    section_re = re.compile(r'^##\s+(.*)$')
    fn_re = re.compile(r'`(ufsecp_[^`]+)`')
    for line in text.splitlines():
        section_match = section_re.match(line.strip())
        if section_match:
            current = section_match.group(1).strip()
            sections.setdefault(current, {})
            continue
        if '|' not in line:
            continue
        functions = fn_re.findall(line)
        if not functions:
            continue
        coverage_text = line.lower()
        for name in functions:
            evidence = sections.setdefault(current, {}).setdefault(name, [])
            evidence.append(coverage_text)
    return sections


def _targets_from_graph(con: sqlite3.Connection) -> dict[str, list[str]]:
    rows = con.execute(
        "SELECT function_name, test_target FROM function_test_map WHERE function_name LIKE 'ufsecp_%'"
    ).fetchall()
    mapped: dict[str, set[str]] = {}
    for row in rows:
        mapped.setdefault(row['function_name'], set()).add(row['test_target'])
    return {name: sorted(targets) for name, targets in mapped.items()}


def _requires_zero_edge(fn: ExportedFunction) -> bool:
    zero_tokens = ('count', 'len', 'size', 'index', 'max_ids', 'device_index', 'entropy_bytes')
    key_tokens = ('privkey', 'tweak', 'seckey', 'scalar', 'nonce', 'seed', 'entropy')
    lowered_params = ' '.join(fn.params).lower()
    if any(token in lowered_params for token in zero_tokens):
        return True
    if any(token in lowered_params for token in key_tokens):
        return True
    if fn.name.endswith(('_batch', '_create', '_derive_path')):
        return True
    return False


def _requires_invalid_content(fn: ExportedFunction) -> bool:
    content_tokens = (
        'pubkey', 'sig', 'path', 'wif', 'mnemonic', 'address', 'script',
        'cipher', 'envelope', 'nonce', 'proof', 'session', 'message', 'msg32',
        'backend_id', 'network', 'recid', 'input'
    )
    lowered_params = ' '.join(fn.params).lower()
    if any(token in lowered_params for token in content_tokens):
        return True
    if any(token in fn.name for token in ('parse', 'verify', 'decode', 'decrypt', 'derive', 'validate')):
        return True
    return False


def _requires_null(fn: ExportedFunction) -> bool:
    return any('*' in param or '[' in param for param in fn.params)


def _required_checks(fn: ExportedFunction) -> list[str]:
    required = [CHECK_SMOKE]
    if _requires_null(fn):
        required.append(CHECK_NULL)
    if _requires_zero_edge(fn):
        required.append(CHECK_ZERO)
    if _requires_invalid_content(fn):
        required.append(CHECK_INVALID)
    return required


def _mark(checks: dict[str, list[str]], check_name: str, evidence: str) -> None:
    checks.setdefault(check_name, [])
    if evidence not in checks[check_name]:
        checks[check_name].append(evidence)


def _check_keywords(text: str) -> set[str]:
    lowered = text.lower()
    hits = set()
    if 'null' in lowered:
        hits.add(CHECK_NULL)
    if any(token in lowered for token in ('zero', 'count=0', 'zero-length', 'undersized', 'empty', 'minimum-size')):
        hits.add(CHECK_ZERO)
    if any(token in lowered for token in ('invalid', 'bad', 'wrong', 'tampered', 'truncated', 'off-curve', 'oob', 'reject')):
        hits.add(CHECK_INVALID)
    if any(token in lowered for token in ('smoke', 'round-trip', 'roundtrip', 'determinism', 'valid', 'succeeds', 'accepts', 'lifecycle')):
        hits.add(CHECK_SMOKE)
    return hits


def build_manifest() -> tuple[dict, bool]:
    exports = scan_public_exports()
    doc_sections = _doc_mentions()
    con = _connect()
    try:
        graph_targets = _targets_from_graph(con)
    finally:
        con.close()

    items = []
    blocker_count = 0
    counts = {check_name: 0 for check_name in ALL_CHECKS}

    for fn in exports:
        covered: dict[str, list[str]] = {}
        required = _required_checks(fn)

        if fn.name in graph_targets:
            for target in graph_targets[fn.name]:
                _mark(covered, CHECK_SMOKE, f'graph:function_test_map:{target}')

        if fn.category == 'cpu':
            _mark(covered, CHECK_NULL, 'docs/FFI_HOSTILE_CALLER.md:G.1 all CPU ABI functions')

        for section_name, section_map in doc_sections.items():
            for text in section_map.get(fn.name, []):
                for hit in _check_keywords(text):
                    _mark(covered, hit, f'docs/FFI_HOSTILE_CALLER.md:{section_name}')

        if fn.category == 'gpu' and fn.name.startswith('ufsecp_gpu_'):
            _mark(covered, CHECK_NULL, 'docs/FFI_HOSTILE_CALLER.md:Section J GPU NULL guards')

        missing = [check for check in required if check not in covered]
        for check_name in ALL_CHECKS:
            if check_name in covered:
                counts[check_name] += 1
        if missing:
            blocker_count += 1

        items.append({
            'function': fn.name,
            'category': fn.category,
            'header': fn.header,
            'signature': fn.signature,
            'required_checks': required,
            'covered_checks': covered,
            'missing_checks': missing,
            'blocking': bool(missing),
        })

    report = {
        'generated_at': datetime.now(timezone.utc).isoformat(),
        'header_count': len(exports),
        'blocking_function_count': blocker_count,
        'coverage_counts': counts,
        'functions': items,
    }
    return report, blocker_count > 0


def _write_markdown(report: dict) -> str:
    lines = []
    lines.append('# ABI Negative-Test Manifest')
    lines.append('')
    lines.append(f"Generated: {report['generated_at']}")
    lines.append('')
    lines.append('Machine-generated hostile-caller coverage manifest for the public `ufsecp_*` ABI.')
    lines.append('')
    lines.append('## Summary')
    lines.append('')
    lines.append(f"- Exported functions scanned: {report['header_count']}")
    lines.append(f"- Blocking functions: {report['blocking_function_count']}")
    lines.append(f"- Null rejection evidence: {report['coverage_counts'][CHECK_NULL]}")
    lines.append(f"- Zero-edge evidence: {report['coverage_counts'][CHECK_ZERO]}")
    lines.append(f"- Invalid-content evidence: {report['coverage_counts'][CHECK_INVALID]}")
    lines.append(f"- Success-smoke evidence: {report['coverage_counts'][CHECK_SMOKE]}")
    lines.append('')
    lines.append('## Blocking Functions')
    lines.append('')
    lines.append('| Function | Missing Checks | Header |')
    lines.append('|----------|----------------|--------|')
    for item in report['functions']:
        if not item['blocking']:
            continue
        missing = ', '.join(item['missing_checks'])
        lines.append(f"| `{item['function']}` | `{missing}` | `{item['header']}` |")
    if report['blocking_function_count'] == 0:
        lines.append('| *(none)* | | |')
    lines.append('')
    lines.append('## Rule')
    lines.append('')
    lines.append('Every exported `ufsecp_*` function should satisfy the hostile-caller quartet when the contract implies it:')
    lines.append('')
    lines.append('1. `null_rejection`')
    lines.append('2. `zero_edge`')
    lines.append('3. `invalid_content`')
    lines.append('4. `success_smoke`')
    lines.append('')
    return '\n'.join(lines) + '\n'


def main() -> int:
    json_mode = '--json' in sys.argv[1:]
    write_files = '--write' in sys.argv[1:] or not json_mode
    report, has_fail = build_manifest()
    output = json.dumps(report, indent=2)
    if write_files:
        JSON_OUT.write_text(output, encoding='utf-8')
        MD_OUT.write_text(_write_markdown(report), encoding='utf-8')
    if json_mode:
        print(output)
    else:
        print(f"ABI negative-test manifest: {report['header_count']} exports, {report['blocking_function_count']} blocking")
        for item in report['functions']:
            if item['blocking']:
                print(f"FAIL {item['function']}: missing {', '.join(item['missing_checks'])}")
    return 1 if has_fail else 0


if __name__ == '__main__':
    sys.exit(main())