// ============================================================================
// shim_pubkey_helpers.hpp — Shared inline helpers for shim_*.cpp files
// ============================================================================
// `#pragma once` ensures Unity build compiles each helper exactly once even
// when all shim_*.cpp files are merged into a single translation unit.
// All functions are `inline` in the secp256k1_shim_internal namespace to avoid
// duplicate-symbol errors when multiple shim files are compiled together.
// ============================================================================
#pragma once
#include <array>
#include <cstring>
#include "secp256k1/field.hpp"
#include "secp256k1/point.hpp"

namespace secp256k1_shim_internal {

using secp256k1::fast::Point;
using secp256k1::fast::FieldElement;

// Write X[0..31] || Y[32..63] from a Point into a 64-byte opaque buffer.
// Uses the fast affine path (Z=1) when available; falls back to full
// to_uncompressed() for Jacobian points (avoids field inversion ~99% of time).
inline void point_to_pubkey_data(const Point& pt, unsigned char data[64]) noexcept {
    if (pt.is_normalized()) {
        pt.x_raw().to_bytes_into(reinterpret_cast<uint8_t*>(data));
        pt.y_raw().to_bytes_into(reinterpret_cast<uint8_t*>(data) + 32);
    } else {
        auto unc = pt.to_uncompressed();
        std::memcpy(data, unc.data() + 1, 64);
    }
}

// Reconstruct a Point from a 64-byte opaque pubkey buffer (X || Y).
// SHIM-002/SHIM-004: validates y²=x³+7 (curve membership) before returning.
// Returns Point::infinity() if the stored bytes are off-curve — all callers
// must check is_infinity() and return an error.
// PERF-003: uses reinterpret_cast to avoid 64-byte stack copy overhead.
[[nodiscard]] inline Point pubkey_data_to_point(const unsigned char data[64]) {
    const auto& xb = *reinterpret_cast<const std::array<uint8_t, 32>*>(data);
    const auto& yb = *reinterpret_cast<const std::array<uint8_t, 32>*>(data + 32);
    auto x = FieldElement::from_bytes(xb);
    auto y = FieldElement::from_bytes(yb);
    auto b7 = FieldElement::from_uint64(7);
    if (y * y != x * x * x + b7) return Point::infinity();
    return Point::from_affine(x, y);
}

} // namespace secp256k1_shim_internal
