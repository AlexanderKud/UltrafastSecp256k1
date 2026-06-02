# ABI Negative-Test Manifest

Generated: 2026-06-02T00:00:00.000000+00:00

Machine-generated hostile-caller coverage manifest for the public `ufsecp_*` ABI.

## Summary

- Exported functions scanned: 184
- Blocking functions: 0
- Null rejection evidence: 183
- Zero-edge evidence: 172
- Invalid-content evidence: 179
- Success-smoke evidence: 184

## Blocking Functions

| Function | Missing Checks | Header |
|----------|----------------|--------|
| *(none)* | | |

## Rule

Every exported `ufsecp_*` function should satisfy the hostile-caller quartet when the contract implies it:

1. `null_rejection`
2. `zero_edge`
3. `invalid_content`
4. `success_smoke`

