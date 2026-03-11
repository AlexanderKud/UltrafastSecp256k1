window.BENCHMARK_DATA = {
  "lastUpdate": 1773205682466,
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
      }
    ]
  }
}