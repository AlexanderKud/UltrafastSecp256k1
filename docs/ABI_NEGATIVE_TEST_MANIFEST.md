# ABI Negative-Test Manifest

Generated: 2026-03-26T16:29:35.659337+00:00

Machine-generated hostile-caller coverage manifest for the public `ufsecp_*` ABI.

## Summary

- Exported functions scanned: 155
- Blocking functions: 0
- Null rejection evidence: 155
- Zero-edge evidence: 136
- Invalid-content evidence: 150
- Success-smoke evidence: 155

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

