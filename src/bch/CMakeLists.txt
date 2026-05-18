# ============================================================================
# src/bch/CMakeLists.txt — BCH-specific modules
# ============================================================================
# Built only when SECP256K1_BUILD_BCH=ON (default OFF).
# Zero impact on Bitcoin Core / standard builds.
#
# Modules:
#   cashaddr  — CashAddr encode/decode (P2PKH, P2SH, P2SH32)
#   rpa       — Reusable Payment Addresses: key derivation + EC grinding
#   bch_scan  — RPA scan pipeline (CPU + optional GPU)
# ============================================================================

if(NOT SECP256K1_BUILD_BCH)
    return()
endif()

message(STATUS "Secp256k1: BCH module: ON")
message(STATUS "  CashAddr, RPA (Reusable Payment Addresses), BCH scan pipeline")

set(BCH_SOURCES
    src/cashaddr.cpp
    src/rpa.cpp
    src/bch_scan.cpp)

set(BCH_HEADERS
    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/bch_types.hpp
    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/cashaddr.hpp
    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/rpa.hpp
    ${CMAKE_CURRENT_SOURCE_DIR}/../cpu/include/secp256k1/bch/bch_scan.hpp)

target_sources(fastsecp256k1 PRIVATE ${BCH_SOURCES})
target_compile_definitions(fastsecp256k1 PUBLIC SECP256K1_BUILD_BCH=1)

# GPU grinding kernel — only if CUDA or OpenCL also enabled
if(SECP256K1_ENABLE_CUDA AND SECP256K1_BUILD_BCH)
    target_sources(fastsecp256k1 PRIVATE src/bch_grinding.cu)
    message(STATUS "  BCH GPU grinding: CUDA")
elseif(SECP256K1_ENABLE_OPENCL AND SECP256K1_BUILD_BCH)
    message(STATUS "  BCH GPU grinding: OpenCL")
endif()

# Tests
if(SECP256K1_BUILD_TESTS)
    add_subdirectory(tests)
endif()
