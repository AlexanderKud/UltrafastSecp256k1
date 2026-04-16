window.BENCHMARK_DATA = {
  "lastUpdate": 1776321544581,
  "repoUrl": "https://github.com/AlexanderKud/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "vano",
            "username": "shrec"
          },
          "committer": {
            "email": "payysoon@gmail.com",
            "name": "vano",
            "username": "shrec"
          },
          "distinct": true,
          "id": "b094b07d267240ad5b3c93e2b770e0173b92280b",
          "message": "Merge branch 'dev'",
          "timestamp": "2026-02-25T00:36:04+04:00",
          "tree_id": "f6fb70de85a1309b8185c0c7f96ec5e9e1cce20f",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/b094b07d267240ad5b3c93e2b770e0173b92280b"
        },
        "date": 1771991350127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "==============================================\nField Mul",
            "value": 27,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 22,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Negate",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Inverse",
            "value": 1000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  POINT OPERATIONS\n==============================================\nPoint Add",
            "value": 278,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 150,
            "unit": "ns"
          },
          {
            "name": "Point Scalar Mul",
            "value": 38000,
            "unit": "ns"
          },
          {
            "name": "Generator Mul",
            "value": 10000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Sign",
            "value": 13000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Verify",
            "value": 47000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Sign",
            "value": 24000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Verify",
            "value": 53000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  BATCH OPERATIONS\n==============================================\nBatch Inverse (n=100)",
            "value": 142,
            "unit": "ns"
          },
          {
            "name": "Batch Inverse (n=1000)",
            "value": 132,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2db7109e2816b6e0c6bb3849ff85ccb73008e636",
          "message": "ci(deps): bump actions/attest-build-provenance from 3.2.0 to 4.1.0 (#80)\n\nBumps [actions/attest-build-provenance](https://github.com/actions/attest-build-provenance) from 3.2.0 to 4.1.0.\n- [Release notes](https://github.com/actions/attest-build-provenance/releases)\n- [Changelog](https://github.com/actions/attest-build-provenance/blob/main/RELEASE.md)\n- [Commits](https://github.com/actions/attest-build-provenance/compare/96278af6caaf10aea03fd8d33a09a777ca52d62f...a2bbfa25375fe432b6a289bc6b6cd05ecd0c4c32)\n\n---\nupdated-dependencies:\n- dependency-name: actions/attest-build-provenance\n  dependency-version: 4.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T17:10:13+04:00",
          "tree_id": "811d4333593be06e2dc8fb5be1c9c81657bcdc87",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/2db7109e2816b6e0c6bb3849ff85ccb73008e636"
        },
        "date": 1772464456368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "==============================================\nField Mul",
            "value": 27,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 22,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Negate",
            "value": 3,
            "unit": "ns"
          },
          {
            "name": "Field Inverse",
            "value": 1000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  POINT OPERATIONS\n==============================================\nPoint Add",
            "value": 280,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "Point Scalar Mul",
            "value": 36000,
            "unit": "ns"
          },
          {
            "name": "Generator Mul",
            "value": 10000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Sign",
            "value": 14000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Verify",
            "value": 42000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Sign",
            "value": 24000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Verify",
            "value": 49000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  BATCH OPERATIONS\n==============================================\nBatch Inverse (n=100)",
            "value": 141,
            "unit": "ns"
          },
          {
            "name": "Batch Inverse (n=1000)",
            "value": 130,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7780970eec9c47611594a7ccf9942dd3c3289ac",
          "message": "test: add coverage for CT PrivateKey overloads and FE52 conditional_negate (#143)\n\nAdd tests exercising all 6 PrivateKey inline overloads in ct/sign.hpp:\n- ecdsa_sign, ecdsa_sign_verified (PrivateKey variants)\n- ecdsa_sign_hedged, ecdsa_sign_hedged_verified (PrivateKey variants)\n- schnorr_pubkey, schnorr_keypair_create (PrivateKey variants)\n\nAdd test for FieldElement52::conditional_negate_assign() covering\nbranchless negate with mask=0 (identity) and mask=-1 (negate).\n\nAddresses SonarCloud Quality Gate: new code coverage 73.7% -> ~84%\n(required >= 80%).\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-10T23:54:47+04:00",
          "tree_id": "0fadf8366c9ee53b90e4be02444d26641d6eea7d",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/a7780970eec9c47611594a7ccf9942dd3c3289ac"
        },
        "date": 1773205942607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1077.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1291.7,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7334,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 31539.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30962.1,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34553,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1308.8,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 227.6,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 132.4,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 177.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 241.4,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1928.7,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 184.9,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 141,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10089.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 64994.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 36664.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7446.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8067.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 46962.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37284.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 38513.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 143209,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 35802.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 582459.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36403.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3804463.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 59444.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 139256,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 557179.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2261762.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2594,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17217.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 37984.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 125,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 399.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 269.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 259.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22748.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 77171.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19290.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 58339.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18811.2,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1168,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2803.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1212.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 130.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 229,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34309.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16198.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19052.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 33381.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3404.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20817.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 36713.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 393398.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414518.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 369820.5,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1aef55124c4a3767394ebac06fab4ff27b63a182",
          "message": "audit: complete audit infrastructure TODO (P0+P1+P2) (#148)\n\nP0 Evidence Bundle Completion:\n- generate_audit_package.sh/ps1: add ct_evidence/ directory with\n  ct-verif, valgrind-ct, disasm scan, dudect artifact collection\n- Update README.txt templates with CT verification stack description\n- run_full_audit.sh/ps1: update CT/Side-Channel section with layered\n  approach (statistical, deterministic, disasm, machine-checked)\n- Add ct-verif, valgrind-ct, GPU audit to appendix artifact tables\n\nP0 Narrative Drift Prevention:\n- preflight.py: add check [2/6] Narrative Drift Detection with 5 stale\n  phrase patterns, historical file exemption\n- CT_VERIFICATION.md: fix footer version v3.16.0 -> v3.22.0\n- README.md: separate ct-verif (active) from Fiat-Crypto (future)\n- INTERNAL_AUDIT.md: fix stale 'No formal verification' claim\n\nP1 Historical Report Hygiene:\n- AUDIT_READINESS_REPORT_v1.md: add historical snapshot banner (v3.14.0)\n- AUDIT_TEST_PLAN.md: add historical snapshot banner (v3.14.0)\n- local_ci_parity_linux.md: add historical snapshot header\n- TEST_MATRIX.md: rename Formal -> Machine-Checked Proof column,\n  add ct-verif column, fix [FAIL] -> [OK] for ct-verif / -- for proofs\n\nP1 Audit Runner Fidelity:\n- run_full_audit.sh/ps1: distinguish blocking (ct-verif, valgrind-ct)\n  vs advisory (dudect) CT layers in generated reports\n- Update A6 GPU threat model row with specific CI workflow references\n\nP2 Optional:\n- Add docs/reports/audit_claims.json -- machine-readable audit claim export\n- README.md: add CI status badges (CI, ct-verif, CodeQL, Scorecard, GPU)\n- docs/AUDIT_INFRA_TODO.md: mark all items completed\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-16T05:24:11+04:00",
          "tree_id": "68f5b7a191f4233881d7ca9ed773c2ddceec0327",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/1aef55124c4a3767394ebac06fab4ff27b63a182"
        },
        "date": 1773640933291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1053.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1336.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7819.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32898.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32370.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35862,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1303.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.8,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.9,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.8,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2707.5,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 197.2,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10478.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66707.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37933.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7789.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8287.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48491.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38452.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39720.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148826.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37206.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604771.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37798.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3980503.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62195.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145101.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581014.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2333849.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2071.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17684.8,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39500.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 145.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 272.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21957,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78227.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19373.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59807.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18913.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 439.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 442.3,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 438.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10489,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10552.7,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47544.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 10995.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 989,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40676.8,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40481.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16419.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19987.3,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1308.5,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 142127.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161212.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 161195.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48481.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67526.8,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.6,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.2,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37134.2,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18499.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20346.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34511.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2547.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21883.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39465.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 394138.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416306.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 376170.2,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57081.4,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41751.5,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40677.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81044.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107594.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24413310.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4922668.6,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "craigraw@gmail.com",
            "name": "craigraw",
            "username": "craigraw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3522269c1d1198dbeacab9c6af173ae56fbc2329",
          "message": "feat: implement wNAF w=4 for Metal shaders (#158)",
          "timestamp": "2026-03-16T19:47:37+04:00",
          "tree_id": "b0b1997fce34fd3dc21698fe31aae127d32e51a0",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/3522269c1d1198dbeacab9c6af173ae56fbc2329"
        },
        "date": 1773676827689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1047.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1335.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7822.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32880.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32387.9,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35899.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1302.9,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.1,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.8,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2650.3,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 197.6,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 149.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10496.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66705.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37982.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7820,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8359.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48516.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38465.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39763.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148947.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37236.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605021.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37813.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3982169.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62221.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145029.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580910.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2332084.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1941.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17492.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39098.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 145.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 277.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21915.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78018.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19303.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59609.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18929.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 440.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 439.3,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10548.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10472.2,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47616.3,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11060.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 985.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40601.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40447.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16464.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19951.6,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1311.7,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139798.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160963.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160924.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48407.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67432.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1128.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.6,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.3,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37038.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18419,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20323.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34429.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2546.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21842.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39484.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 395471.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416582.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 378007.7,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57005.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41702.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40734.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80951,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107548.1,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24490466.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4941183.7,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "craigraw@gmail.com",
            "name": "craigraw",
            "username": "craigraw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "552f86dd797d6e321a8a498f6fc164a1c605167f",
          "message": "add opencl lut primitives for generator multiplication (#172)\n\nadd point_add_mixed_h_impl to secp256k1_point.cl — mixed Jacobian+affine\naddition that outputs the Z-coordinate ratio (2*H) for batch inversion\nduring LUT construction. uses the same madd-2007-bl formula as the\nexisting point_add_mixed_impl.\n\nadd scalar_mul_generator_lut_impl to secp256k1_extended.cl — generator\nmultiplication via a precomputed 16x65536 AffinePoint lookup table in\n__global memory. splits the 256-bit scalar into 16 x 16-bit windows and\nperforms 15 mixed additions with zero doublings.",
          "timestamp": "2026-03-18T17:04:26+04:00",
          "tree_id": "278d4a4d54fda9bbe8b7bcba70110223bd479bf3",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/552f86dd797d6e321a8a498f6fc164a1c605167f"
        },
        "date": 1773921413225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1051.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1428.6,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8482.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 35870,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 36025.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 39810.3,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1360.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 267.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 170.3,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 283.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2671.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 11176.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 72760.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 41638.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8508.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9158.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 52012.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 41409.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 42877.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 165711.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 41427.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 165569.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 41392.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 673477.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42092.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 661546.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 41346.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2743437.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 42866.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2653399.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 41459.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5203965.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 40656,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 5120424.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 40003.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 7030907.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 36619.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6944386.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 36168.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 161645.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 649422.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2589761.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 5171909.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7762472.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2074.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 19414.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 43589.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 162.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 439.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 305.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 299.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 23896,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 85591,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 21023.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 64303.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 20541.8,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 474.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 479.7,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 463,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 11262.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 11269.2,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 51392.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11779.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1040.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44870,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 44754.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 18313.9,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 21905.6,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1462.1,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 154022.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 177339.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 177323.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53863.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74761.7,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1201.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2304.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1241.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 161.2,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 280.1,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 41164.6,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 19619.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 22051.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 38551.1,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3076.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 23598.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 43612.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 551737.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 446735.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 401054.9,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 63450,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46293.8,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 45474.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89901.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 120256.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 27282739.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 3310537.9,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "47005ffc2926b5f87b076131cdafe6ee21b6a3c8",
          "message": "feat: OpenCL 6/6 verify ops, enrich README, fix QEMU timeout\n\n- Implement ecdsa_verify_batch and schnorr_verify_batch in OpenCL backend\n  via lazy-loaded extended kernel (secp256k1_extended.cl)\n- Enrich README: BIP-352 GPU pipeline, GPU C ABI section, updated tables\n- Update GPU_VALIDATION_MATRIX: OpenCL 4/6 -> 6/6\n- Fix ecies_regression test timeout (120s -> 600s) for QEMU ARM64 CI",
          "timestamp": "2026-03-20T01:46:33Z",
          "tree_id": "243384c9cacee2547a30e955a472b4d36e90c61f",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/47005ffc2926b5f87b076131cdafe6ee21b6a3c8"
        },
        "date": 1774201625748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1010.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1332.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7913.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32870.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32388.5,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35808.5,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1276.9,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 146.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.9,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2641.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10586.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66674.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38086.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7996.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8425.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48666.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38440,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39717,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148919.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37229.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148653.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37163.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605473.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37842.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594502.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37156.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2547187.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39799.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2520960.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 39390,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4778710.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37333.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4687573.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36621.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6302098.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32823.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6219081.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32391.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144887.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580855.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2328472.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4654968.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6980107.7,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1876.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17447.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39100,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21875,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78016.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19337.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59597.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18881.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.2,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10636.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10583.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48131.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11111.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 984.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40613.5,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40446,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17095,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19976.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1327.2,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 140166,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160928.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160842.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48511.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67379,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1135.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.7,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.8,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37101.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18408.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20321,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34441,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2544.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21826.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39542.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390453.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415060.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375009.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57037.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41695.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40802.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80992.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107608.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24386241.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2963420.7,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "2215d27182627fc22984366292be0f4e9c20ffbf",
          "message": "fix(ci): exclude MSan-slow tests + fix Valgrind uninit memory in FROST adversarial tests",
          "timestamp": "2026-03-23T16:51:33Z",
          "tree_id": "a68206efb9c6a41a65c9b116151761501e91e225",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/2215d27182627fc22984366292be0f4e9c20ffbf"
        },
        "date": 1774325204181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1053.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.2,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7930.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32897.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30979.5,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35737.9,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1324.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 148.9,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 253.9,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2652.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10624.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 70900.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37940.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7921.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8461.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48582.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38374.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39634.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148686.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37171.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148740.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37185.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604340.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37771.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 593967.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37123,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2538806.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39668.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2459754.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38433.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4666776.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36459.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4585678.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35825.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6292760.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32774.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6207499.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32330.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144667.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580100.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2327620.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4654866,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6983515.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1877.4,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21587.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41553.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 145.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 402.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 26008.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 86395.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 23442.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 63639.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23028.3,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.3,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10645.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10576.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48084.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11073.3,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 976.8,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44081.4,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42739.7,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17188.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24090.9,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1358.7,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 168726.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194055.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194023.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 50845.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74170.3,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1133.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2109.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37066.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18089.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20274.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34767.2,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2751.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21800.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39576.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390668.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415160.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 378759,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65389,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 44180.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40840.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 87939.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107655.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24383858.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2941936.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 35248.8,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 50450,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22963.8,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 11659.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 44045.9,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 43763.1,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 43443.6,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 83640.1,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 156583.9,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 79536.6,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 70234.6,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1193.6,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 75427.5,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 57096.9,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 27367,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 35911.7,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 50.4,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 332.4,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91248.5,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1127333.3,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 18620.7,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 18874.2,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1167.8,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2765211.8,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 347.1,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 443.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 193.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 216.5,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 769.3,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 839,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 69613.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 52323.4,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 248.3,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 203.8,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 745.5,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 754.1,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 258286.7,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 922.6,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1871.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2740.3,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1872.3,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "8af7320c608b5d6db8c6c72b1b28cda79b14e0f7",
          "message": "Harden audit and fix Windows CUDA build",
          "timestamp": "2026-03-25T14:36:36Z",
          "tree_id": "394890e5d2fc95577c4655167e75787143e0d85f",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/8af7320c608b5d6db8c6c72b1b28cda79b14e0f7"
        },
        "date": 1774500089061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1010,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1334.9,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7929.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33131.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 31156.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36744.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1293.2,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 153.6,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.1,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2825.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10639.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 70672.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37976.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8022.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8425.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48661.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38482.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39676.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 149008,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37252,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148725.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37181.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605441,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37840.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594330.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37145.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2548861.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39826,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2460650.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38447.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4695446,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36683.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4596175.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35907.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6304748.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32837.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6217032.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32380.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144651.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580593.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2336746.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4658798.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6999062.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1876.6,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21370.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41667.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 272.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 25853.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 85900.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 23252.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 63547.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22808.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 444.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 454.4,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 444.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10636.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10580.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48155.4,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11096.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1000.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44154.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42954.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17149.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 23872.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1371,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 167660.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 192946.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 192852.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 52861.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 73880.6,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1122.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1852.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.6,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.1,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37185.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18410.9,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20328.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34584.9,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2543.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21847,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39598.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 391125.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 418058.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 378974.6,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcdf4acd63a67756d29c74ea11826fcdfa86e79f",
          "message": "deps(deps-dev): bump typescript in /bindings/react-native (#218)\n\nBumps [typescript](https://github.com/microsoft/TypeScript) from 5.9.3 to 6.0.2.\n- [Release notes](https://github.com/microsoft/TypeScript/releases)\n- [Commits](https://github.com/microsoft/TypeScript/compare/v5.9.3...v6.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: typescript\n  dependency-version: 6.0.2\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Vano Chkheidze <payysoon@gmail.com>",
          "timestamp": "2026-03-30T18:15:49+04:00",
          "tree_id": "4253d2852ce421d56badea55dbf9cbe427f57e3c",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/dcdf4acd63a67756d29c74ea11826fcdfa86e79f"
        },
        "date": 1774891469104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1076.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1296.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7460.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 31507.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 29390.1,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34421.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1310.3,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 225.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 137.5,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 241.2,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1928.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 13913.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 71897.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 36593.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7420.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9035.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48482,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37541,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 38901,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 144778.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 36194.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 144495.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 36123.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 588577.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36786.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 577960.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 36122.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2491327.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 38927,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2403930.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 37561.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4742727,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37052.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4676491.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36535.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6405071.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33359.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6349094.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33068.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 138780.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 556288.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2256072.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4509580.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6769192.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2593,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 20635.7,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 40055.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 124.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 397.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 271.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 259.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29841.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 87775.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 23774.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 63282,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22319.8,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 448.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 454.1,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 457.1,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 13878.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 13813.2,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 46391.8,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14391.9,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 998.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 41916.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 41587.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16482.4,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 23917.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1394.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 164465.8,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 189290.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 189013.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 49449.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 71437.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1167.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2811,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1212.6,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 128.9,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 228.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34196.6,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16199.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19048.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 32976.2,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3407.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20846.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 36676.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392818,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415192.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 371435.4,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 60933.2,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 44137.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 39455.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 84490.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 103484.7,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 23552097,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2854731.4,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36309,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 48520.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22093.4,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 62987.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 61898.7,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 43471,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 43078.2,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 84324.3,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 153190.5,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 79187,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 67646.1,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1238.2,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 102367.3,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 85087.1,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31818.3,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 34838.9,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 257.1,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 352.8,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 88438.8,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1117016.9,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 13254.7,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 13533.3,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1372.4,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2834903.7,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1109.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1425.8,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 821,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 204.3,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2538.7,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2796,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 80105.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 60102.9,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1079.2,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1060.8,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 737.9,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 748.6,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 295828.5,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 877.7,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1797.4,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2692.8,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1795.5,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "a08d52fbcd4c72ff93e98dc1664afae7bf1857ee",
          "message": "Release: merge dev into main\n\nMerges 54 commits of development work from dev into main.\ndev branch preserved as primary working branch.",
          "timestamp": "2026-04-02T23:24:08Z",
          "tree_id": "81a5024b9cd6b40de29dd083e2c47f5b150a1a94",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/a08d52fbcd4c72ff93e98dc1664afae7bf1857ee"
        },
        "date": 1775224044279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1051.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1335.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7939,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32882.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30991.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35862.1,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1316.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 149.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.2,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2641.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14277,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74560.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37899.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7978,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9507,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50162.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38798.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40106.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150426.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37606.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150505.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37626.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 611553.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38222.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601195.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37574.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2570071.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40157.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2486283.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38848.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4809211.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37572,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4730116.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36954,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6496155.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33834.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6417086,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33422.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144925.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581802.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2330974.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4668727.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7008103.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1877.2,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21441.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41679.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 402.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 272.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29453.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 90045.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24331.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65041.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22870.8,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 446.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 436.5,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14293.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14249.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48195.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14745.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 988.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44398.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42999.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17774.8,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24496.7,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1358.5,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169042.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194352.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194545.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53403.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74430,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1129.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1161.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.8,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37087.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18401.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20341,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35364,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2539.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21902.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39553.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390486.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414813.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374345.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65244.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46759.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41494.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89700,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108685.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24453311.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2964939.8,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36491.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51367.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22833.4,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65662.5,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64671.8,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45065,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44531.2,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86483.3,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 158998.1,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81503.9,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 71974,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1185.2,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101247.4,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83186.4,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31291.8,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36327.5,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 243.7,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 332.7,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90558.1,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1108640.2,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17642.5,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17939.3,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1461,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2656339.9,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1084.7,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1362.8,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 781,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 215.7,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2448.2,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2708,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 88081.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 63062.6,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1020.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1014.8,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 747.8,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 753.5,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 317714.5,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 899.1,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1835.1,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2719.9,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1836,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "7d5895029313630a2581f108968722b9a90967e1",
          "message": "fix: sync-docs job disable dev ruleset before push to bypass status check requirement",
          "timestamp": "2026-04-04T16:25:17Z",
          "tree_id": "d12f420b89a4b66ad50a26f677eecfbac3e841ac",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/7d5895029313630a2581f108968722b9a90967e1"
        },
        "date": 1775332811406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7922.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33176.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30795.5,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35853.1,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1312,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.1,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 149.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1448.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14223.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74398.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37985.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7969.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9459.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50124.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38831.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40102.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150542.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37635.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150483.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37621,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 612140.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38258.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601333.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37583.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2572218,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40190.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2490260.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38910.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4820750.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37662.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4739888.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 37030.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6504118.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33875.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6425556.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33466.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145007.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581449.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2332309.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4659014.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6990238,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1880.1,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21446.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41695.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 145.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 399.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29496.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89689.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24332.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65132.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22909.4,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 447.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 456,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 444.8,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14268.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14186.8,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48196.6,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14683.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1018,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44395.8,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43013,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17730.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24582.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1356.8,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169051.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194285.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194235.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51321.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74329.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2063.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37061.7,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18080.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20300.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34813.1,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2752.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21796.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39521,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392007.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414484.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374920.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65371.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46758.5,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41535.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89791.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108881.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24525351.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2971021.5,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36440.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51554.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22879.2,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65921.6,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64774.9,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45081.8,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44577.2,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 87169.3,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159873.9,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 82039,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 72244.8,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1118.2,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101050.4,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83413.6,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31249.5,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36299.1,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 244.3,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 334.1,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91006.3,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1151027.2,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17330.1,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17658.8,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1410.2,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2664929.6,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1076.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1365.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 780.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 214.6,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2446,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2695,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 83412.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 72201.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1023.4,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 998.3,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 745.8,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.1,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 320518.3,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 900.1,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1835.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2720.9,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1839.8,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "d19efba228ee9b4ea5d0ae97167ddea009094be4",
          "message": "fix(ci): add paths filter to compute-sanitizer pull_request trigger\n\nWithout a paths filter on pull_request, every PR triggered the job —\neven doc-only or config-only PRs. The job waits indefinitely for a\nself-hosted GPU runner that may be offline.\n\nAdd the same gpu/opencl/kernels/cuda paths filter to pull_request as\nalready existed on push, so the job only runs when GPU code actually\nchanges. workflow_dispatch remains available for on-demand runs.",
          "timestamp": "2026-04-05T23:15:11Z",
          "tree_id": "23e7d58c828f4ec32b287676778f2f78c085effb",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/d19efba228ee9b4ea5d0ae97167ddea009094be4"
        },
        "date": 1775509183282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1052.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7920.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33189.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30789.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35833.7,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1312.2,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 149.5,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1417.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14197.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74700.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37994.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7998.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9504.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 49038.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38867.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39041.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150871.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37718,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150651.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37662.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 602420.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37651.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601779.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37611.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2503215.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39112.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2490053.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38907.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4185400.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 32698.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4124000.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 32218.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 5570550.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 29013.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 5508105.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 28688,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145049.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581646.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2333901.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4665546.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6996432.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1877.7,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21512.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41773.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29576.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89846.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24372.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 64079.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22954.4,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 436.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 445.9,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 436.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14235.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14189.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48175,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14692.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 989.8,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44429.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43112.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17694.6,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24596.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1357.2,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 123964.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 149482.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 149366.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51438,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74520.8,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1138.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2063.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37117.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18112.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20319,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34833,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2752.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21825.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39510.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 410884,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415807.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 377223,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65369.8,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46729.8,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41616.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89720.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 109016.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24553641.1,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2972702.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36616.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51353.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22961.9,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65922.5,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64908.3,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45079.1,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44642.9,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86949,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159721.1,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81938.4,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 56875.8,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1141.3,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101490.6,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83379.3,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31325.9,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36295.5,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 244,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 334.3,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90845.5,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1146232.4,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17334.2,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 18054.9,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1442.1,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2674909.3,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1081.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1364.3,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 780.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 216.5,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2444.8,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2713.1,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 88281.2,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 63138.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1037.7,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1006.9,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 744,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 753,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 311331.2,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 898.7,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1831.8,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2718.9,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1831.5,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "committer": {
            "email": "shrec@users.noreply.github.com",
            "name": "shrec",
            "username": "shrec"
          },
          "distinct": true,
          "id": "7a54d7d00925181fa604715a13a6d6dbf7adf2d8",
          "message": "ci: harden audit artifact aggregation",
          "timestamp": "2026-04-09T05:14:16Z",
          "tree_id": "18d75cb2a24d2d12904b7b883c975c43e4d8fce6",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/7a54d7d00925181fa604715a13a6d6dbf7adf2d8"
        },
        "date": 1775761782200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1082.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1342.1,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7942.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33672.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30818.3,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35835.7,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1310.8,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 151.3,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 258,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1421.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14213.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74640.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38039.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7978.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9497.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 53853.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38827,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 43867.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 170836.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 42709.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150477.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37619.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 682422.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42651.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601196.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37574.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2810135.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 43908.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2485173.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38830.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5074609.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 39645.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4747335.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 37088.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6756473,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 35190,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6436828,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33525.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144945.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581698.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2335068.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4659520.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6989370.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1876.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21673.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41700.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 279.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 275.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29920.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 90065.6,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24537.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 68946.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23091.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 443.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 460,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 444,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14279.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14204.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48262.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14831.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1016.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44388.1,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43049.7,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17725,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24859.5,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1376.3,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 125169.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 150855.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 150620.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51346,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74557.3,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2074.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 150.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.7,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37087.2,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18120.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20287.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34735.1,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2761,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21816.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39648.9,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 396493.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 422490.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 377851.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65522.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46736.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41521.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89824,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108994.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24525965.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2974441.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36684.6,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51368.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 23046.5,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65959.8,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 65010.5,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45368.5,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 45002.8,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86859.4,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159619,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 82187.9,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 57536.6,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1160.9,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101256.6,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83273.4,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31530,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36279.8,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 243.7,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 333.9,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90971.8,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1145586.5,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17332.6,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17678.9,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1528.9,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2697649.5,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1086.7,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1366.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 780.8,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 228.9,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2460,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2699.8,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 86381.8,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 62917.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1022.1,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 995.9,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 745.7,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 750.4,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 331362.1,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 899.7,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1832.3,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2726.9,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1833,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efe4aeda07a71c0bd939c156a6d5325f4f495142",
          "message": "Merge dev: fix SLSA compile-generator",
          "timestamp": "2026-04-13T13:23:57Z",
          "tree_id": "15ca2a60c6323628873beb4d78b6befc63685671",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/efe4aeda07a71c0bd939c156a6d5325f4f495142"
        },
        "date": 1776204822660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1013.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1334.9,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7946.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33144.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30760.7,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35733.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1272.7,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 151,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 254.1,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1411.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14250.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74660.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37951,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8016.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9529.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 53849.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38769.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 43859.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 170579.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 42644.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150041.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37510.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 682020.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42626.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 600688.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37543,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2811008.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 43922,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2483810.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38809.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5044275,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 39408.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4719290.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36869.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6735471.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 35080.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6410142.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33386.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144909.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580653.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2331102.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4659985.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6985547.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1872.1,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21604.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41620.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 272.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29648.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89996.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24476.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 68980.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23162.9,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 435.1,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 444.6,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 435.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14276.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14230.6,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48194.8,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14730,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 992,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44333.8,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42900.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17744.4,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24703.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1385.9,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 124484.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 150013.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 149935.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51228.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74506.8,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1845,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1166.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 147.9,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.5,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37048.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18086.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20136.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34557.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2545,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21611.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39475.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390507.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414868.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375966.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65397.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46750.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41513.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89671.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108876.2,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24531187.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2949098.8,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36645.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51341.8,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 23004.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65966.3,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 65011.2,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45344.1,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44901.3,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86717.3,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159432.4,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81709.3,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 56723,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1183.5,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101367.9,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83342.5,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31411.7,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36262.7,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 243.9,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 333.9,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90865.4,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1140930,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17333.1,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17686.3,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1381.6,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2683860.8,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1094.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1367.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 780.1,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 222.9,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2448.9,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2707.8,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 86638.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 62711.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1041.7,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1016.9,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 744.4,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.4,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 312544.5,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 906.8,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1834,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2733.3,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1833.3,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccf9e5c26468501b9c91ae8ca6fd5ab299328ef2",
          "message": "Merge pull request #240 from shrec/dev\n\nfix(audit): raise BSPA-8 timing guardrail from 3x to 5x for noisy CI …",
          "timestamp": "2026-04-16T08:05:52+04:00",
          "tree_id": "41100d576f6161dc67fd5f676f38f9357637cf74",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/ccf9e5c26468501b9c91ae8ca6fd5ab299328ef2"
        },
        "date": 1776321542397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7908.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33165.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30772.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35833.3,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1314.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 253.8,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1418.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14175.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74556.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38001.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7902.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9432.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 53821.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38836.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 43990,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 170609.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 42652.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150324.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37581.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 681862.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42616.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601180.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37573.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2812767.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 43949.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2487999.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38875,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5052806.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 39475.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4726032.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36922.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6742970.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 35119.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6420641.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33440.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144761.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581745.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2334362.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4701844,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7008134.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1869.5,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21406.8,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41641.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 399.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 274.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29443.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89760.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24308.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 68830.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22852.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 436.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 445.8,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 438.2,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14201.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14140.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48235.6,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14688.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 999.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44326.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42955.4,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17742.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24528.2,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1368.5,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 123606.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 148876.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 148722.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51145.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74168.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1134.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2075.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.2,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.9,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37100.2,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18096.4,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20289.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34863.4,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2754.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21828.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39525.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390511.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416011.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 377442.6,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65301.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46631.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41486,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89547.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108824,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24529366.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2953376,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36474.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51351.7,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22879.4,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65877.1,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64808,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 44960.4,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44563.8,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86396.8,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 158998,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81615.1,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 56678.9,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1980.6,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101064.1,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83298.7,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31230,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36167.5,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 244.6,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 333.4,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90681.4,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1150116.1,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17403.4,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17658.9,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1406.1,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2684442.2,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1088,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1369.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 778.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 213.8,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2449.7,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2703.2,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 86740.5,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 71858.2,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1037.7,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1014.3,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 746.4,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.4,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 317382.4,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 905.2,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1842.1,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2714.9,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1843.4,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}