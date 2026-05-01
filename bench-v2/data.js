window.BENCHMARK_DATA = {
  "lastUpdate": 1777666542649,
  "repoUrl": "https://github.com/AlexanderKud/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
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
          "id": "f8792671cc69ceb237ffa7a3ca88f32c7b59d869",
          "message": "fix(svg): font sizes only, layout intact",
          "timestamp": "2026-05-01T15:29:56Z",
          "tree_id": "ac9de02026fb4daf1b990453c89594d521b3bbf9",
          "url": "https://github.com/AlexanderKud/UltrafastSecp256k1/commit/f8792671cc69ceb237ffa7a3ca88f32c7b59d869"
        },
        "date": 1777666541139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1058.2,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1331.5,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7945,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 33090.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 30847.1,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 36003.3,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1310.8,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 241.5,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 253.8,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 1298,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 29503.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 89855.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 38021.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 23263.4,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 24308,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 68911,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38895.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 44002,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 170899.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 42725,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=4)",
            "value": 150499.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=4)",
            "value": 37624.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 683339.3,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 42708.7,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=16)",
            "value": 601965.8,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=16)",
            "value": 37622.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 2817331.2,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 44020.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=64)",
            "value": 2492580.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=64)",
            "value": 38946.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=128)",
            "value": 5086918.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=128)",
            "value": 39741.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=128)",
            "value": 4756557.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=128)",
            "value": 37160.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=192)",
            "value": 6784361.9,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=192)",
            "value": 35335.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(cached,N=192)",
            "value": 6451051.7,
            "unit": "ns"
          },
          {
            "name": "-> per-sig cached (N=192)",
            "value": 33599.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 145291.4,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 582560.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2335537.8,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=128)",
            "value": 4670298.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=192)",
            "value": 7006168.3,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1869,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 21489.9,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 42241.8,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 144.2,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 400.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 275.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.9,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 29467.3,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 89786.5,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 24326.7,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 68908.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 22938.4,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437.8,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 448.1,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 435.5,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 30725.1,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 30685.5,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 48265.3,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 31140.6,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 995,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 45026.1,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 43556.3,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 17792.6,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 24529,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1358.9,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 123738.3,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 148944,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 149211.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 51883,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 75004.5,
            "unit": "ns"
          },
          {
            "name": "fast_scan_batch /tx (N=1)",
            "value": 41362.6,
            "unit": "ns"
          },
          {
            "name": "fast_scan_batch /tx (N=16)",
            "value": 40149,
            "unit": "ns"
          },
          {
            "name": "fast_scan_batch /tx (N=64)",
            "value": 39761.2,
            "unit": "ns"
          },
          {
            "name": "fast_scan_batch /tx (N=256)",
            "value": 39754,
            "unit": "ns"
          },
          {
            "name": "fast_scan_batch /tx (N=1024)",
            "value": 39806.5,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1140.7,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1846.1,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1157.4,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 247.2,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37154.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 17934.3,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 19903.2,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34674.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2545.9,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21459.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39610.1,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 400159.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415415.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 377510.7,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 65674.6,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 47186.7,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 41432.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 90763.8,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 108610.3,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24488436.4,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 2987012.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor sign",
            "value": 50903.2,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor verify",
            "value": 51310.1,
            "unit": "ns"
          },
          {
            "name": "Schnorr adaptor adapt",
            "value": 22992.3,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor sign",
            "value": 89709.7,
            "unit": "ns"
          },
          {
            "name": "ECDSA adaptor verify",
            "value": 64972.9,
            "unit": "ns"
          },
          {
            "name": "keygen_begin (DKG round 1)",
            "value": 44939.4,
            "unit": "ns"
          },
          {
            "name": "nonce_gen",
            "value": 44637,
            "unit": "ns"
          },
          {
            "name": "partial_sign",
            "value": 86427.5,
            "unit": "ns"
          },
          {
            "name": "partial_verify",
            "value": 159027.9,
            "unit": "ns"
          },
          {
            "name": "aggregate → Schnorr sig",
            "value": 81474.7,
            "unit": "ns"
          },
          {
            "name": "key_agg (BIP-327)",
            "value": 57155.6,
            "unit": "ns"
          },
          {
            "name": "sig_agg → Schnorr sig",
            "value": 1090.2,
            "unit": "ns"
          },
          {
            "name": "ECIES encrypt (256B payload)",
            "value": 101989.4,
            "unit": "ns"
          },
          {
            "name": "ECIES decrypt (256B payload)",
            "value": 83994.3,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message sign",
            "value": 31269.7,
            "unit": "ns"
          },
          {
            "name": "Bitcoin message verify",
            "value": 36350.6,
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
            "value": 90368,
            "unit": "ns"
          },
          {
            "name": "Multi-scalar mul (64 points)",
            "value": 1119108.2,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (12 words)",
            "value": 17348.9,
            "unit": "ns"
          },
          {
            "name": "bip39_generate (24 words)",
            "value": 17605.5,
            "unit": "ns"
          },
          {
            "name": "bip39_validate (12 words)",
            "value": 1398.4,
            "unit": "ns"
          },
          {
            "name": "bip39_to_seed (PBKDF2, 12 words)",
            "value": 2681688.8,
            "unit": "ns"
          },
          {
            "name": "BIP-143 sighash (1-in/1-out)",
            "value": 1068.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 compute_wtxid",
            "value": 1365.5,
            "unit": "ns"
          },
          {
            "name": "BIP-144 witness_commitment",
            "value": 781.3,
            "unit": "ns"
          },
          {
            "name": "BIP-144 tx_weight",
            "value": 213.6,
            "unit": "ns"
          },
          {
            "name": "BIP-341 keypath_sighash",
            "value": 2480.3,
            "unit": "ns"
          },
          {
            "name": "BIP-342 tapscript_sighash",
            "value": 2719.9,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift create",
            "value": 184763.5,
            "unit": "ns"
          },
          {
            "name": "ElligatorSwift XDH (ECDH)",
            "value": 70473.9,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 extract",
            "value": 1025.1,
            "unit": "ns"
          },
          {
            "name": "HKDF-SHA256 expand",
            "value": 1016.2,
            "unit": "ns"
          },
          {
            "name": "AEAD encrypt (256B)",
            "value": 747.2,
            "unit": "ns"
          },
          {
            "name": "AEAD decrypt (256B)",
            "value": 764.4,
            "unit": "ns"
          },
          {
            "name": "Session handshake (full)",
            "value": 511540.9,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (256B)",
            "value": 904.1,
            "unit": "ns"
          },
          {
            "name": "Session decrypt (256B)",
            "value": 1854.2,
            "unit": "ns"
          },
          {
            "name": "Session encrypt (1KB)",
            "value": 2736.5,
            "unit": "ns"
          },
          {
            "name": "Session roundtrip (256B)",
            "value": 1860.1,
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