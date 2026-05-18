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

diff --git a/src/bch/CMakeLists.txt b/src/bch/CMakeLists.txt
new file mode 100644
index 00000000..ac3a72cf
--- /dev/null
+++ b/src/bch/CMakeLists.txt
@@ -0,0 +1,45 @@
+# ============================================================================
+# src/bch/CMakeLists.txt — BCH-specific modules
+# ============================================================================
+# Built only when SECP256K1_BUILD_BCH=ON (default OFF).
+# Zero impact on Bitcoin Core / standard builds.
+#
+# Modules:
+#   cashaddr  — CashAddr encode/decode (P2PKH, P2SH, P2SH32)
+#   rpa       — Reusable Payment Addresses: key derivation + EC grinding
+#   bch_scan  — RPA scan pipeline (CPU + optional GPU)
+# ============================================================================
+
+if(NOT SECP256K1_BUILD_BCH)
+    return()
+endif()
+
+message(STATUS "Secp256k1: BCH module: ON")
+message(STATUS "  CashAddr, RPA (Reusable Payment Addresses), BCH scan pipeline")
+
+set(BCH_SOURCES
+    src/cashaddr.cpp
+    src/rpa.cpp
+    src/bch_scan.cpp)
+
+set(BCH_HEADERS
+    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/bch_types.hpp
+    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/cashaddr.hpp
+    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/rpa.hpp
+    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/bch_scan.hpp)
+
+target_sources(fastsecp256k1 PRIVATE ${BCH_SOURCES})
+target_compile_definitions(fastsecp256k1 PUBLIC SECP256K1_BUILD_BCH=1)
+
+# GPU grinding kernel — only if CUDA or OpenCL also enabled
+if(SECP256K1_ENABLE_CUDA AND SECP256K1_BUILD_BCH)
+    target_sources(fastsecp256k1 PRIVATE src/bch_grinding.cu)
+    message(STATUS "  BCH GPU grinding: CUDA")
+elseif(SECP256K1_ENABLE_OPENCL AND SECP256K1_BUILD_BCH)
+    message(STATUS "  BCH GPU grinding: OpenCL")
+endif()
+
+# Tests
+if(SECP256K1_BUILD_TESTS)
+    add_subdirectory(tests)
+endif()
