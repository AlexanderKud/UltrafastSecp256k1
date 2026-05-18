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

diff --git a/src/cpu/include/secp256k1/bch/bch_scan.hpp b/src/cpu/include/secp256k1/bch/bch_scan.hpp
new file mode 100644
index 00000000..13206dab
--- /dev/null
+++ b/src/cpu/include/secp256k1/bch/bch_scan.hpp
@@ -0,0 +1,85 @@
+#pragma once
+// ============================================================================
+// bch_scan.hpp — BCH RPA scan pipeline
+// ============================================================================
+// Full scan pipeline for receiving RPA payments:
+//   1. Filter transactions by prefix match (cheap: CPU or server-side)
+//   2. For each matching tx: compute shared secret + check outputs
+//   3. Store matched payment keys
+//
+// GPU acceleration (optional): batch shared secret derivation.
+// ============================================================================
+
+#include "bch_types.hpp"
+#include "rpa.hpp"
+#include "cashaddr.hpp"
+#include <vector>
+#include <functional>
+
+namespace secp256k1::bch {
+
+// ── Scan input (one transaction to check) ─────────────────────────────────────
+struct ScanTx {
+    std::array<uint8_t, 32> txid;
+    uint32_t                vout;           // input's outpoint vout
+    std::array<uint8_t, 33> input_pubkey;   // sender's compressed input pubkey
+    std::vector<std::array<uint8_t, 33>> outputs; // compressed output pubkeys to check
+};
+
+// ── Scan result (matched payment) ─────────────────────────────────────────────
+struct ScanMatch {
+    std::array<uint8_t, 32> txid;
+    uint32_t                output_index;
+    uint32_t                key_index;      // RPA derivation index (0, 1, ...)
+    std::array<uint8_t, 33> payment_pubkey;
+    std::string             cashaddr;       // ready-to-use CashAddr
+    // Spending key can be derived: CKDpriv(scan_privkey, shared_secret, key_index)
+};
+
+// ── Scanner ───────────────────────────────────────────────────────────────────
+class RpaScanner {
+public:
+    explicit RpaScanner(const RpaPaycode& paycode,
+                        const fast::Scalar& scan_privkey);
+
+    // Scan a single transaction. Returns match if found.
+    [[nodiscard]] std::optional<ScanMatch> scan_tx(
+        const ScanTx& tx,
+        uint32_t      max_key_index = 30) const noexcept;
+
+    // Batch scan — CPU sequential.
+    [[nodiscard]] std::vector<ScanMatch> scan_batch_cpu(
+        const std::vector<ScanTx>& txs,
+        uint32_t max_key_index = 30) const noexcept;
+
+    // Batch scan — GPU accelerated (only if SECP256K1_ENABLE_CUDA/OPENCL).
+    // Falls back to CPU if GPU not available.
+    [[nodiscard]] std::vector<ScanMatch> scan_batch(
+        const std::vector<ScanTx>& txs,
+        uint32_t max_key_index = 30) const noexcept;
+
+    // Prefix filter — fast pre-check before full ECDH derivation.
+    // Input sig must be compact 64 bytes.
+    [[nodiscard]] bool prefix_matches(const uint8_t* sig64) const noexcept;
+
+    const RpaPaycode& paycode() const noexcept { return paycode_; }
+
+private:
+    RpaPaycode   paycode_;
+    fast::Scalar scan_privkey_;
+    Network      network_;
+};
+
+// ── Scan rate estimation ──────────────────────────────────────────────────────
+// Estimate how many tx/s we can scan on current hardware.
+struct ScanRateEstimate {
+    double cpu_tx_per_sec;
+    double gpu_tx_per_sec;   // 0 if no GPU
+    double chain_tx_per_day; // BCH mainnet typical
+    double days_to_full_sync;
+};
+
+[[nodiscard]] ScanRateEstimate estimate_scan_rate(
+    uint8_t prefix_bits) noexcept;
+
+} // namespace secp256k1::bch
