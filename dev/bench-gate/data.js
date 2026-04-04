window.BENCHMARK_DATA = {
  "lastUpdate": 1775332898400,
  "repoUrl": "https://github.com/AlexanderKud/UltrafastSecp256k1",
  "entries": {
    "Perf Regression Gate": [
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
        "date": 1772464460728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "==============================================\nField Mul",
            "value": 31,
            "unit": "ns"
          },
          {
            "name": "Field Square",
            "value": 24,
            "unit": "ns"
          },
          {
            "name": "Field Add",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "Field Negate",
            "value": 4,
            "unit": "ns"
          },
          {
            "name": "Field Inverse",
            "value": 1000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  POINT OPERATIONS\n==============================================\nPoint Add",
            "value": 330,
            "unit": "ns"
          },
          {
            "name": "Point Double",
            "value": 166,
            "unit": "ns"
          },
          {
            "name": "Point Scalar Mul",
            "value": 38000,
            "unit": "ns"
          },
          {
            "name": "Generator Mul",
            "value": 11000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Sign",
            "value": 15000,
            "unit": "ns"
          },
          {
            "name": "ECDSA Verify",
            "value": 45000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Sign",
            "value": 26000,
            "unit": "ns"
          },
          {
            "name": "Schnorr Verify",
            "value": 51000,
            "unit": "ns"
          },
          {
            "name": "==============================================\n  BATCH OPERATIONS\n==============================================\nBatch Inverse (n=100)",
            "value": 152,
            "unit": "ns"
          },
          {
            "name": "Batch Inverse (n=1000)",
            "value": 144,
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
        "date": 1773205681300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1050.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7944.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33107.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32524.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36163,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1332.6,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.5,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 193.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 252.8,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2823.8,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 199.7,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 150.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10560.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66443,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38071.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 10508.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8451,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48467.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38497.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39649.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148580,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37145,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 606069.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37879.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3981513.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62211.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144907.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 579889.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2333358.6,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1827.9,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17286.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39128.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 275.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21775.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 77770.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19260.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59379.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18969.4,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1132.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1170.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 150.7,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 244.5,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37315.5,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18410.5,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20421.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35226.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2540.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21924.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 40336,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 400101.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 424217.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 382288.3,
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
        "date": 1773640800666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1049.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1345.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7966.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33071.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32539.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36486.4,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1299.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 221.2,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 134.5,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 171.6,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 243.5,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2479.2,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 196.1,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 137,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 9791.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 61648.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 35048.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7532.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8054.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 45294.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 35522.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 36597.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 138654,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 34663.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 563142.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 35196.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3755400.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 58678.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 135817.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 543549.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2171385.7,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1715.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 16120.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 35965.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 132,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 385.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 273.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 268.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 20406,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 73432,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 17971.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 54927.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18905,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 405.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 408.3,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 405.8,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 9847.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 9639,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 44005.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 10268.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 967.7,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40906.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40402.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16437.1,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 18777.7,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1202.8,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 134968.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160955.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 162285.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48677.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67279,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1843.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 147.6,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.3,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37375.5,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18385.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20427.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34178.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2539.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20350.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 37060.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 367724.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 384613.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 350041.7,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 55941.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 38424.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 37828.6,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 75529.1,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 99152.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 22699269,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4630522.3,
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
        "date": 1773676841592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1049.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1335.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7976.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33097.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32514.3,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36237.3,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1299.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.8,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 190.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 253.5,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2670.6,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 199.7,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 148.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10640.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66597.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38045.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8185.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8664.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48787.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38518.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39672.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148795.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37198.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605414.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37838.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3976698.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62135.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145040.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581009.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2332989.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1860.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17422.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39115.7,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 274.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21991.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78031.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19605.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59919.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19052.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 446.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 442.8,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 439.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10677.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10540,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47662,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11111.3,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 986.9,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40788.4,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40496.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16451.9,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 20518.1,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1294,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139926.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161246.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160983.9,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48413.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67286.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1842.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1163.6,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 146.3,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 250.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37416.3,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18428.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20322.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35082,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2547.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21803.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 40593.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390392.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416683.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 378592.8,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57067.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41722,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40762.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80954.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107601.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24370839.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4914560.6,
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
        "date": 1773921348539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1011.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7912.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33013.7,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32633,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36393.6,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1289.3,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.1,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.6,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2693.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10702.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66799.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38209.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 10592.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8505.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48579.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38501.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39636.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148863.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37215.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148766.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37191.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605340,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37833.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594533.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37158.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2543535.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39742.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2459521.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38430,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4682573.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36582.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4599533.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35933.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6299308.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32808.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6220372.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32397.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144792.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580921.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2332903.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4663667.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7003647.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1856.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17496.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39173.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 276.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 275.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22165,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78243,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19639.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59746.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19182.4,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 427.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 434.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 430.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10668.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10451.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47747.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11330.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 975.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40922.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40536.9,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16412.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19973.2,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1325.3,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139834.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160874.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160863.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48470,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67366.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1133.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1159.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.9,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.2,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37315.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18366.6,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20329.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34678.9,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2535.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21836.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39946.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 392018.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416563,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374218.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57103.4,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41751,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40853.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81000.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107950.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24412887.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2962777.1,
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
        "date": 1774201611373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1011,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1332.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8103.1,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33107.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32584.7,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36325.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1274.4,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 144.4,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 253.4,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2689.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10725.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66847.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38088.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8296.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8735.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48775.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38578.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39740.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 149045.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37261.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 149247.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37311.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605297.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37831.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 594971.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37185.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2547931.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39811.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2465978.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38530.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4685336.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36604.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4602908,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35960.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6305280.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32840,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6227607.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32435.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144993.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581136.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2334747,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4663412,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7000849.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1861.8,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17472.7,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39099.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 142.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 273.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 22155.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78272.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19484.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59611.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 19052.8,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429.7,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 436.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.5,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10780.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10622.6,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48470.7,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11256.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 988.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40812.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40523.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17119.1,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19983.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1319.7,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139685.1,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 161660.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160825.1,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48552.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67360.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1136.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1844.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1165.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.2,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 244.8,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37222.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18438.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20369.3,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34660.5,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2542.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21809.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39778.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 390379.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 416646.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375734.3,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 56978.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41784.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40813.5,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 80991.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107634,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24359866.9,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2969176.3,
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
        "date": 1774325084975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1061.8,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.3,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8070.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33080.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30952,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36184.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1324.9,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.6,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 148.6,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.9,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2681,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10747.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 71197.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38015.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8122.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8651.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48729.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38511,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39635.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148610.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37152.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 148772.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37193.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 605077.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37817.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 593839.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37115,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2541399.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39709.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2462533.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38477.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4680203,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36564.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4593109.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35883.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6307839.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32853.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6224121.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32417.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145015,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581313.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2331550.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4661885.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6985800.2,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1861.3,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21544.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41633.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 401.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 278.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 271.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 26279.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 86394.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 23589.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 64652.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23176.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 429,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 432.3,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 431.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10799.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10632.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48286.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11240.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 975.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44179.3,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 42729.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17196.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24109.2,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1361.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169004.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 193772.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194333.3,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 50755.5,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 73908.2,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1127.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2072.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1153.7,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 147.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 249.3,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37493.3,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18242.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20256.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35175.7,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2760.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21849.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39872.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 393140.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415258.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374373.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65527,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 44145.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40804.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 87803.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107486.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24418159.1,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2938199,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 35436.3,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 50443.6,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22934.9,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 11747.3,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 44033,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 43695.2,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 43403.2,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 83645.4,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 156528.1,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 79427.9,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 70273,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1162.8,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 75336.4,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 56936,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 27517.7,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 35857,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 50.8,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 331.9,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91232.4,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1127042.7,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 18491.4,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 18667.4,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1261,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2758193.6,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 338.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 486.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 209.4,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 291.2,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 902.7,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 959.5,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 77265.4,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 52175,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 248.2,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 202.2,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 744.9,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 755,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 268595.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 925.2,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1885.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2717.5,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1879.7,
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
        "date": 1774500006278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1085.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1296.1,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7464.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32028.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 29590.4,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34694.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1311.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 230.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 135,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 240.8,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1951.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10363.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 68723,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 36992.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 12995.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8269.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 47178.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37445.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 38696.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 142887.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 35721.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 142710.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 35677.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 581089.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36318.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 572156.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 35759.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2462380.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 38474.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2378884,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 37170.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4614898.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 36053.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4555534.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 35590.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6220749.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 32399.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6174877.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 32160.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 139012.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 555279.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2257431.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4511395.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6757943.8,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2613.1,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 20691.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 40114.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 129.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 395.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 268,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 265.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 26465.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 84472.9,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 22924.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 61815.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22409.7,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 445.2,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 454.1,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 447.5,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10500.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10325.4,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 46790.7,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 10925.1,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 990.4,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 41970.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 41640.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 15788.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 23260.4,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1396.6,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 163031.2,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 187469.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 187856.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48825.2,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 70964.9,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1168,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2807.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1212.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 128.1,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 231.4,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34529.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16104.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19051,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 33135.2,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3403.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20829,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 37043.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 393755.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 414941.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 371139.2,
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
        "date": 1774891439945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1049.3,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1338.6,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8024.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33242.8,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 31018.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36178.7,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1314.9,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 242.9,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 148.2,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255.4,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2691.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14488.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74700.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38132.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 10693.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9749.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50204.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38916.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40118.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150666.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37666.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150462.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37615.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 613431.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38339.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601291.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37580.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2571379,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40177.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2489815.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38903.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4796084.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37469.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4714943.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36835.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6491053.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33807.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6406152.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33365.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145034.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581052.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2338877.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4669635.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7014769.7,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1852.7,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21423.5,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41769.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 143.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 402.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 277.3,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 270.8,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29670.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89845.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24598.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65037,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23159.1,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 436,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 447.8,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 436.3,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14479.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14162.3,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48389.1,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14922.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 992.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44548.2,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43201.4,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17731.3,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24471,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1346.8,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169769.9,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194356.5,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 194123.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 53571.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74537.2,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1131.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1842.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1166.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 148.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 244.8,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37344.4,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18402.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20332.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 36232.4,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2544.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21905.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39929.2,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 391889.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 418181,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 377636.5,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65403.9,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46783.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41464.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89850.2,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108668.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24490535.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2948061.2,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36899.8,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51238.9,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22819.2,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65904.8,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64824.1,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 45028.6,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44523.7,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86696.8,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159024.6,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81546.9,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 72041.1,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1169.7,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101429.3,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83559.3,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31499.2,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36176.6,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 242.6,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 332.5,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 91305.8,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1144766.6,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17362.6,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17617.8,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1425.1,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2656194.9,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1608.7,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 2137.4,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 1217.1,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 291.2,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 3107.8,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2691.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 88370,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 72139.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1029.9,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 998.2,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 745.7,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.4,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 340385.3,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 914.6,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1820,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2698.7,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1817.6,
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
        "date": 1775224067265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1075.5,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1306.8,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7604.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32041.4,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 29375.6,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 34799,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1316.7,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 227.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 135.5,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 239.5,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2225.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14118,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 72323.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 36894.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7945.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9347.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48935.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 37780.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39228.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 144900.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 36225.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 144768.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 36192.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 590639.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 36915,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 578918.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 36182.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2498173.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 39034,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2410192.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 37659.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4739594,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37028.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4688121.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 36625.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6421551.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33445.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6368533.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33169.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 139298,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 557769.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2260243.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4517463,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6779345.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 2597.9,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 20612.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 40067.4,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 123.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 398.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 273.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 258.5,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 30083.7,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 87846.4,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 23979.3,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 63788,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22556.6,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 448.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 456.4,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 448.6,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14250.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14011.6,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 46657.5,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14797.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1004,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 42158,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 41740.1,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16436.5,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 23895.8,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1406.8,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 164230.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 188579,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 188772.7,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 49344.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 71439.1,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1168,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2763.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1212.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 132.8,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 231,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 34202.9,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 16072.8,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 18990.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 33094.1,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 3362.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 20776.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 36738.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 393391.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415850.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 369682.7,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 61109.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 44185.8,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 39448.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 84565.6,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 103424.5,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 23550763.8,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2858953.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36148.4,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 48492.2,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22108.3,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 63279.4,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 61963.1,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 43417.2,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 42976.8,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 84187.1,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 153092.1,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 79163,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 67971.3,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1131,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 102338.7,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 84862.4,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31968.1,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 34876,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 352.6,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 87701.5,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1113109,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 13227.6,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 13595,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1390.2,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2827145.5,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1259.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 2799.1,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 1563.9,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 309.3,
            "unit": "ns"
          },
          {
            "name": "BIP-141 parse_witness_program",
            "value": 71.8,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2680.8,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2800.2,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 79291.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 60289.8,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1069.8,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1047,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 731.2,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 734.5,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 312103.1,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 878,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1767.5,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2673.5,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1769.3,
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
        "date": 1775332896900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1048.9,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.7,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 8007.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33373.9,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30764.2,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36209.1,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1310.6,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 243.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 154.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 252.5,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1464,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 14349.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 74402.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38219.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 8104.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 9705,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 50374.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38908.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 40006.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 150615,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37653.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150424.6,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37606.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 612418.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 38276.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601080.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37567.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2570268.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 40160.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2486170.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38846.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 4816935,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 37632.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4738255,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 37017.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6508284.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 33897.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6429467.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33486.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144906.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 580994.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2333920.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4671313.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 6990232.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1862.6,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21414.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 41722.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 142.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 402.1,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.6,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29594.2,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89693,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24486,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 65003.2,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 23048,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 442.3,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 452.7,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 444.3,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 14420.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 14239,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48303.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 14882,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 1009.6,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 44476,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43112.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17762.6,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24469.5,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1343.4,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 169243.4,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 194044.7,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 193873.4,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51175.7,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 74264.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1133.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 2062.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1155.8,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.4,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 249.9,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37366.6,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18100.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20283.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 35162.2,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2761.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21783.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39848.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 391071.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415072.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 374946.1,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65210.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 46617.1,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41500.3,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 89544.9,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 109562.6,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24485804.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2967412.6,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 36582.5,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51348.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22858.9,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 65904.6,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64575,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 44986.4,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44518.2,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86849.9,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159557.7,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81871,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 72596.7,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1110.2,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 100978.4,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83557.5,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31324.6,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36291.3,
            "unit": "ns"
          },
          {
            "name": "SHA-256 (32B input)",
            "value": 243.3,
            "unit": "ns"
          },
          {
            "name": "SHA-512 (32B input)",
            "value": 333.8,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (4 points)",
            "value": 90885.7,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1149933.5,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17375.1,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17716.8,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1377.5,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2666797.4,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1702.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 2156.2,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 1228.6,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 291.6,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2568.5,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2674.6,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 79916.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 62878.6,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1020.5,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 994.3,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 746.1,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 752.8,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 300316.8,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 898.1,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1820.6,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2696,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1819.6,
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