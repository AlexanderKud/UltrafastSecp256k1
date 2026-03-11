window.BENCHMARK_DATA = {
  "lastUpdate": 1773205944024,
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
      }
    ]
  }
}