# ABI Negative-Test Manifest

Generated: 2026-03-26T14:40:50.006162+00:00

Machine-generated hostile-caller coverage manifest for the public `ufsecp_*` ABI.

## Summary

- Exported functions scanned: 155
- Blocking functions: 131
- Null rejection evidence: 155
- Zero-edge evidence: 15
- Invalid-content evidence: 25
- Success-smoke evidence: 132

## Blocking Functions

| Function | Missing Checks | Header |
|----------|----------------|--------|
| `ufsecp_addr_p2pkh` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_addr_p2tr` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_addr_p2wpkh` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip143_p2wpkh_script_code` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip143_sighash` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip144_txid` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip144_witness_commitment` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip144_wtxid` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip324_create` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip324_decrypt` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip324_destroy` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip324_encrypt` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip32_derive` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip32_derive_path` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip32_master` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip32_privkey` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip32_pubkey` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip39_generate` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip39_to_entropy` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip39_to_seed` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_bip39_validate` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_btc_message_hash` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_btc_message_sign` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_btc_message_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_coin_address` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_coin_derive_from_seed` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_coin_wif_encode` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ctx_create` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdh` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdh_raw` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdh_xonly` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_adaptor_adapt` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_adaptor_extract` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_adaptor_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_adaptor_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_batch_identify_invalid` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sig_from_der` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sig_to_der` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sign_batch` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sign_recoverable` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_sign_verified` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecdsa_verify` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecies_decrypt` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ecies_encrypt` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ellswift_create` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_ellswift_xdh` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_eth_address` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_eth_address_checksummed` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_eth_ecrecover` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_eth_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_aggregate` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_keygen_begin` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_keygen_finalize` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_sign_nonce_gen` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_frost_verify_partial` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_gpu_backend_count` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_backend_name` | `success_smoke, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_bip324_aead_decrypt_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_bip324_aead_encrypt_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_bulletproof_verify_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_ctx_create` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_ctx_destroy` | `success_smoke` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_device_count` | `success_smoke, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_device_info` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_ecdh_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_ecdsa_verify_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_ecrecover_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_error_str` | `success_smoke` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_frost_verify_partial_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_generator_mul_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_hash160_pubkey_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_is_available` | `success_smoke, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_last_error` | `success_smoke` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_last_error_msg` | `success_smoke` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_msm` | `success_smoke, zero_edge` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_schnorr_verify_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_zk_dleq_verify_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_gpu_zk_knowledge_verify_batch` | `success_smoke, zero_edge, invalid_content` | `include/ufsecp/ufsecp_gpu.h` |
| `ufsecp_hash160` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_keccak256` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_multi_scalar_mul` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_key_agg` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_nonce_agg` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_nonce_gen` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_partial_sig_agg` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_partial_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_partial_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_musig2_start_sign_session` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pedersen_blind_sum` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pedersen_verify` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pedersen_verify_sum` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_combine` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_create` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_create_uncompressed` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_negate` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_parse` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_tweak_add` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_tweak_mul` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_pubkey_xonly` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_adaptor_adapt` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_adaptor_extract` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_adaptor_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_adaptor_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_batch_identify_invalid` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_sign` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_sign_batch` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_sign_verified` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_schnorr_verify` | `invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_seckey_negate` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_seckey_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_segwit_is_witness_program` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_segwit_parse_program` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_segwit_witness_script_hash` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_sha256` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_sha512` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_silent_payment_address` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_silent_payment_create_output` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_silent_payment_scan` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_tagged_hash` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_taproot_tweak_seckey` | `zero_edge` | `include/ufsecp/ufsecp.h` |
| `ufsecp_taproot_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_wif_decode` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_wif_encode` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_dleq_prove` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_dleq_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_knowledge_prove` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_knowledge_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_range_prove` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |
| `ufsecp_zk_range_verify` | `zero_edge, invalid_content` | `include/ufsecp/ufsecp.h` |

## Rule

Every exported `ufsecp_*` function should satisfy the hostile-caller quartet when the contract implies it:

1. `null_rejection`
2. `zero_edge`
3. `invalid_content`
4. `success_smoke`

