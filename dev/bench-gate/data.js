window.BENCHMARK_DATA = {
  "lastUpdate": 1774201612212,
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
      }
    ]
  }
}