commit a971bec18452efa6e4736d9ab07e4cc2787bb83a
Author: shrec <shrec@users.noreply.github.com>
Date:   Mon May 18 14:33:08 2026 +0000

    feat(bch): add isolated BCH module skeleton — SECP256K1_BUILD_BCH=OFF by default
    
    src/bch/CMakeLists.txt:
      Module scaffold. Zero impact on Bitcoin/default builds.
      GPU grinding hook (CUDA/OpenCL conditional).
    
    src/cpu/include/secp256k1/bch/:
      bch_types.hpp  — BCH types: Network, AddrType, CashAddr, RpaPaycode,
                       RpaSharedSecret, GrindResult
      cashaddr.hpp   — CashAddr encode/decode (P2PKH, P2SH, P2SH32)
      rpa.hpp        — RPA: paycode parse, ECDH shared secret, address derivation,
                       CPU EC grinding (RFC6979 nonce + extra_data counter)
      bch_scan.hpp   — RpaScanner: prefix filter + CPU/GPU batch scan pipeline
    
    Implementations: src/bch/src/*.cpp (next step)
    
    Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>

diff --git a/src/cpu/include/secp256k1/bch/bch_types.hpp b/src/cpu/include/secp256k1/bch/bch_types.hpp
new file mode 100644
index 00000000..d4c38147
--- /dev/null
+++ b/src/cpu/include/secp256k1/bch/bch_types.hpp
@@ -0,0 +1,71 @@
+#pragma once
+// ============================================================================
+// bch_types.hpp — BCH-specific types shared across BCH modules
+// ============================================================================
+// Only compiled when SECP256K1_BUILD_BCH=ON.
+// ============================================================================
+
+#include <cstdint>
+#include <array>
+#include <string>
+#include <string_view>
+#include <optional>
+
+namespace secp256k1::bch {
+
+// ── Network ──────────────────────────────────────────────────────────────────
+enum class Network : uint8_t {
+    Mainnet = 0,
+    Testnet = 1,
+    Regtest = 2,
+    Chipnet = 3,   // BCH CHIP testing network
+};
+
+// ── CashAddr output type ──────────────────────────────────────────────────────
+enum class AddrType : uint8_t {
+    P2PKH  = 0,   // pay-to-public-key-hash (20 bytes)
+    P2SH   = 1,   // pay-to-script-hash (20 bytes)
+    P2SH32 = 2,   // pay-to-script-hash-32 (32 bytes, post-May 2023)
+};
+
+// ── CashAddr decoded result ───────────────────────────────────────────────────
+struct CashAddr {
+    Network  network;
+    AddrType type;
+    std::array<uint8_t, 32> hash;  // 20 or 32 bytes depending on type
+    uint8_t  hash_len;             // 20 (P2PKH/P2SH) or 32 (P2SH32)
+};
+
+// ── RPA paycode ───────────────────────────────────────────────────────────────
+// Specification: github.com/imaginaryusername/Reusable_specs
+struct RpaPaycode {
+    uint8_t  version;        // 1-2: P2PKH mainnet, 3-4: P2SH mainnet, 5-8: testnet
+    uint8_t  prefix_bits;    // 0, 4, 8, 12, or 16 — prefix filter size
+    std::array<uint8_t, 33> scan_pubkey;   // compressed secp256k1 pubkey
+    std::array<uint8_t, 33> spend_pubkey;  // compressed secp256k1 pubkey
+    uint32_t expiry;         // UNIX timestamp, 0 = no expiry
+
+    Network network() const noexcept {
+        return (version >= 5) ? Network::Testnet : Network::Mainnet;
+    }
+    AddrType addr_type() const noexcept {
+        return (version == 3 || version == 4 || version == 7 || version == 8)
+               ? AddrType::P2SH : AddrType::P2PKH;
+    }
+};
+
+// ── RPA shared secret ─────────────────────────────────────────────────────────
+// c = H(H(e·Q) + s) — where s = integer from spent outpoint
+struct RpaSharedSecret {
+    std::array<uint8_t, 32> value;
+};
+
+// ── EC Grinding result ────────────────────────────────────────────────────────
+struct GrindResult {
+    bool     found;
+    uint32_t nonce;          // RFC6979 extra nonce that produced the match
+    std::array<uint8_t, 64> signature;  // DER-free compact 64B sig
+    std::array<uint8_t, 32> input_hash; // double-SHA256 of the winning sig
+};
+
+} // namespace secp256k1::bch
