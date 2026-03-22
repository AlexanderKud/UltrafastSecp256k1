// ============================================================================
// ChaCha20-Poly1305 AEAD (RFC 8439)
// ============================================================================
// Self-contained implementation with no external dependencies.
// Used by BIP-324 for encrypted P2P transport.
//
// Security notes:
//   - Poly1305 uses 128-bit arithmetic via uint64_t pairs (no __int128 needed)
//   - Constant-time tag comparison via timing-safe equality check
//   - Key material is securely erased after use
// ============================================================================

#include "secp256k1/chacha20_poly1305.hpp"
#include "secp256k1/detail/secure_erase.hpp"
#include <cstring>

namespace secp256k1 {

// ============================================================================
// ChaCha20 core (RFC 8439 Section 2.3)
// ============================================================================

namespace {

inline std::uint32_t rotl32(std::uint32_t v, int n) noexcept {
    return (v << n) | (v >> (32 - n));
}

inline std::uint32_t load32_le(const std::uint8_t* p) noexcept {
    return static_cast<std::uint32_t>(p[0])
         | (static_cast<std::uint32_t>(p[1]) << 8)
         | (static_cast<std::uint32_t>(p[2]) << 16)
         | (static_cast<std::uint32_t>(p[3]) << 24);
}

inline void store32_le(std::uint8_t* p, std::uint32_t v) noexcept {
    p[0] = static_cast<std::uint8_t>(v);
    p[1] = static_cast<std::uint8_t>(v >> 8);
    p[2] = static_cast<std::uint8_t>(v >> 16);
    p[3] = static_cast<std::uint8_t>(v >> 24);
}

inline void store64_le(std::uint8_t* p, std::uint64_t v) noexcept {
    for (int i = 0; i < 8; ++i) {
        p[i] = static_cast<std::uint8_t>(v >> (i * 8));
    }
}

// Quarter-round on four state words
inline void quarter_round(std::uint32_t& a, std::uint32_t& b,
                           std::uint32_t& c, std::uint32_t& d) noexcept {
    a += b; d ^= a; d = rotl32(d, 16);
    c += d; b ^= c; b = rotl32(b, 12);
    a += b; d ^= a; d = rotl32(d, 8);
    c += d; b ^= c; b = rotl32(b, 7);
}

// Produce one 64-byte keystream block
void chacha20_block_internal(const std::uint32_t input[16],
                              std::uint8_t output[64]) noexcept {
    std::uint32_t x[16];
    std::memcpy(x, input, 64);

    // 20 rounds = 10 iterations of double-round
    for (int i = 0; i < 10; ++i) {
        // Column rounds
        quarter_round(x[0], x[4], x[ 8], x[12]);
        quarter_round(x[1], x[5], x[ 9], x[13]);
        quarter_round(x[2], x[6], x[10], x[14]);
        quarter_round(x[3], x[7], x[11], x[15]);
        // Diagonal rounds
        quarter_round(x[0], x[5], x[10], x[15]);
        quarter_round(x[1], x[6], x[11], x[12]);
        quarter_round(x[2], x[7], x[ 8], x[13]);
        quarter_round(x[3], x[4], x[ 9], x[14]);
    }

    for (int i = 0; i < 16; ++i) {
        store32_le(output + i * 4, x[i] + input[i]);
    }
}

void chacha20_setup_state(std::uint32_t state[16],
                           const std::uint8_t key[32],
                           const std::uint8_t nonce[12],
                           std::uint32_t counter) noexcept {
    // "expand 32-byte k"
    state[ 0] = 0x61707865u;
    state[ 1] = 0x3320646eu;
    state[ 2] = 0x79622d32u;
    state[ 3] = 0x6b206574u;

    // Key (8 words)
    for (int i = 0; i < 8; ++i) {
        state[4 + i] = load32_le(key + i * 4);
    }

    // Counter
    state[12] = counter;

    // Nonce (3 words)
    state[13] = load32_le(nonce);
    state[14] = load32_le(nonce + 4);
    state[15] = load32_le(nonce + 8);
}

} // anonymous namespace

void chacha20_block(const std::uint8_t key[32],
                    const std::uint8_t nonce[12],
                    std::uint32_t counter,
                    std::uint8_t out[64]) noexcept {
    std::uint32_t state[16];
    chacha20_setup_state(state, key, nonce, counter);
    chacha20_block_internal(state, out);
    detail::secure_erase(state, sizeof(state));
}

void chacha20_crypt(const std::uint8_t key[32],
                    const std::uint8_t nonce[12],
                    std::uint32_t counter,
                    std::uint8_t* data, std::size_t len) noexcept {
    std::uint32_t state[16];
    chacha20_setup_state(state, key, nonce, counter);

    std::uint8_t block[64];
    std::size_t offset = 0;

    while (offset < len) {
        chacha20_block_internal(state, block);
        state[12]++; // increment counter

        std::size_t const use = (len - offset < 64) ? (len - offset) : 64;
        for (std::size_t i = 0; i < use; ++i) {
            data[offset + i] ^= block[i];
        }
        offset += use;
    }

    detail::secure_erase(state, sizeof(state));
    detail::secure_erase(block, sizeof(block));
}

// ============================================================================
// Poly1305 (RFC 8439 Section 2.5)
// ============================================================================
// Uses 64-bit arithmetic with explicit carry propagation.
// The prime is 2^130 - 5. Accumulator h is in 5 x 26-bit limbs.
// ============================================================================

namespace {

struct Poly1305State {
    std::uint32_t r[5];    // clamped key r in 26-bit limbs
    std::uint32_t s[4];    // key s (pad)
    std::uint32_t h[5];    // accumulator in 26-bit limbs

    void init(const std::uint8_t key[32]) noexcept {
        // r = key[0..15] with clamping (RFC 8439 Section 2.5)
        // Clamp: clear top 4 bits of bytes 3,7,11,15; clear bottom 2 bits of bytes 4,8,12
        std::uint32_t t0 = load32_le(key +  0) & 0x0FFFFFFFU;
        std::uint32_t t1 = load32_le(key +  4) & 0x0FFFFFFCU;
        std::uint32_t t2 = load32_le(key +  8) & 0x0FFFFFFCU;
        std::uint32_t t3 = load32_le(key + 12) & 0x0FFFFFFCU;

        // Decompose clamped r into 26-bit limbs
        r[0] =  t0                        & 0x3FFFFFF;
        r[1] = ((t0 >> 26) | (t1 <<  6)) & 0x3FFFFFF;
        r[2] = ((t1 >> 20) | (t2 << 12)) & 0x3FFFFFF;
        r[3] = ((t2 >> 14) | (t3 << 18)) & 0x3FFFFFF;
        r[4] =  (t3 >>  8);

        // s = key[16..31]
        s[0] = load32_le(key + 16);
        s[1] = load32_le(key + 20);
        s[2] = load32_le(key + 24);
        s[3] = load32_le(key + 28);

        // h = 0
        h[0] = h[1] = h[2] = h[3] = h[4] = 0;
    }

    void block(const std::uint8_t* msg, std::size_t len) noexcept {
        // Convert message block to 26-bit limbs and add to accumulator.
        // Each block is treated as a little-endian number with a 0x01
        // byte appended after the message bytes (RFC 8439 Section 2.5.1).
        std::uint8_t buf[17]{};
        std::memcpy(buf, msg, len);
        buf[len] = 1; // sentinel byte: represents 2^(8*len)

        std::uint32_t t0 = load32_le(buf);
        std::uint32_t t1 = load32_le(buf + 4);
        std::uint32_t t2 = load32_le(buf + 8);
        std::uint32_t t3 = load32_le(buf + 12);
        // The 17th byte (buf[16]) only matters for full 16-byte blocks
        std::uint32_t hibit = static_cast<std::uint32_t>(buf[16]);

        h[0] += t0 & 0x3FFFFFF;
        h[1] += ((t0 >> 26) | (t1 << 6)) & 0x3FFFFFF;
        h[2] += ((t1 >> 20) | (t2 << 12)) & 0x3FFFFFF;
        h[3] += ((t2 >> 14) | (t3 << 18)) & 0x3FFFFFF;
        h[4] += (t3 >> 8) | (hibit << 24);

        // Multiply h by r using 64-bit intermediates
        std::uint32_t r0 = r[0], r1 = r[1], r2 = r[2], r3 = r[3], r4 = r[4];
        std::uint32_t s1 = r1 * 5, s2 = r2 * 5, s3 = r3 * 5, s4 = r4 * 5;

        std::uint64_t d0 = static_cast<std::uint64_t>(h[0]) * r0
                         + static_cast<std::uint64_t>(h[1]) * s4
                         + static_cast<std::uint64_t>(h[2]) * s3
                         + static_cast<std::uint64_t>(h[3]) * s2
                         + static_cast<std::uint64_t>(h[4]) * s1;

        std::uint64_t d1 = static_cast<std::uint64_t>(h[0]) * r1
                         + static_cast<std::uint64_t>(h[1]) * r0
                         + static_cast<std::uint64_t>(h[2]) * s4
                         + static_cast<std::uint64_t>(h[3]) * s3
                         + static_cast<std::uint64_t>(h[4]) * s2;

        std::uint64_t d2 = static_cast<std::uint64_t>(h[0]) * r2
                         + static_cast<std::uint64_t>(h[1]) * r1
                         + static_cast<std::uint64_t>(h[2]) * r0
                         + static_cast<std::uint64_t>(h[3]) * s4
                         + static_cast<std::uint64_t>(h[4]) * s3;

        std::uint64_t d3 = static_cast<std::uint64_t>(h[0]) * r3
                         + static_cast<std::uint64_t>(h[1]) * r2
                         + static_cast<std::uint64_t>(h[2]) * r1
                         + static_cast<std::uint64_t>(h[3]) * r0
                         + static_cast<std::uint64_t>(h[4]) * s4;

        std::uint64_t d4 = static_cast<std::uint64_t>(h[0]) * r4
                         + static_cast<std::uint64_t>(h[1]) * r3
                         + static_cast<std::uint64_t>(h[2]) * r2
                         + static_cast<std::uint64_t>(h[3]) * r1
                         + static_cast<std::uint64_t>(h[4]) * r0;

        // Carry propagation
        std::uint32_t c;
        c = static_cast<std::uint32_t>(d0 >> 26); h[0] = static_cast<std::uint32_t>(d0) & 0x3FFFFFF;
        d1 += c; c = static_cast<std::uint32_t>(d1 >> 26); h[1] = static_cast<std::uint32_t>(d1) & 0x3FFFFFF;
        d2 += c; c = static_cast<std::uint32_t>(d2 >> 26); h[2] = static_cast<std::uint32_t>(d2) & 0x3FFFFFF;
        d3 += c; c = static_cast<std::uint32_t>(d3 >> 26); h[3] = static_cast<std::uint32_t>(d3) & 0x3FFFFFF;
        d4 += c; c = static_cast<std::uint32_t>(d4 >> 26); h[4] = static_cast<std::uint32_t>(d4) & 0x3FFFFFF;
        h[0] += c * 5; c = h[0] >> 26; h[0] &= 0x3FFFFFF;
        h[1] += c;
    }

    void finish(std::uint8_t tag[16]) noexcept {
        // Final reduction: h mod (2^130 - 5)
        std::uint32_t c;
        c = h[1] >> 26; h[1] &= 0x3FFFFFF;
        h[2] += c; c = h[2] >> 26; h[2] &= 0x3FFFFFF;
        h[3] += c; c = h[3] >> 26; h[3] &= 0x3FFFFFF;
        h[4] += c; c = h[4] >> 26; h[4] &= 0x3FFFFFF;
        h[0] += c * 5; c = h[0] >> 26; h[0] &= 0x3FFFFFF;
        h[1] += c;

        // Compute h + -p = h - (2^130 - 5) = h + 5 - 2^130
        std::uint32_t g[5];
        c = h[0] + 5; g[0] = c & 0x3FFFFFF; c >>= 26;
        c += h[1];    g[1] = c & 0x3FFFFFF; c >>= 26;
        c += h[2];    g[2] = c & 0x3FFFFFF; c >>= 26;
        c += h[3];    g[3] = c & 0x3FFFFFF; c >>= 26;
        c += h[4];    g[4] = c & 0x3FFFFFF; c >>= 26;

        // If h >= p, use g; otherwise use h.  c == 1 iff h >= p.
        // mask = 0xFFFFFFFF if c==1, else 0
        std::uint32_t mask = ~(c - 1); // c is 0 or 1
        for (int i = 0; i < 5; ++i) {
            h[i] = (h[i] & ~mask) | (g[i] & mask);
        }

        // Convert from 26-bit limbs back to bytes and add s
        std::uint64_t f;
        f  = static_cast<std::uint64_t>(h[0])       | (static_cast<std::uint64_t>(h[1]) << 26);
        std::uint32_t h0 = static_cast<std::uint32_t>(f);
        f  = (f >> 32) | (static_cast<std::uint64_t>(h[2]) << 20);
        std::uint32_t h1 = static_cast<std::uint32_t>(f);
        f  = (f >> 32) | (static_cast<std::uint64_t>(h[3]) << 14);
        std::uint32_t h2 = static_cast<std::uint32_t>(f);
        f  = (f >> 32) | (static_cast<std::uint64_t>(h[4]) <<  8);
        std::uint32_t h3 = static_cast<std::uint32_t>(f);

        // h = h + s (mod 2^128)
        std::uint64_t t;
        t = static_cast<std::uint64_t>(h0) + s[0];              h0 = static_cast<std::uint32_t>(t);
        t = static_cast<std::uint64_t>(h1) + s[1] + (t >> 32);  h1 = static_cast<std::uint32_t>(t);
        t = static_cast<std::uint64_t>(h2) + s[2] + (t >> 32);  h2 = static_cast<std::uint32_t>(t);
        t = static_cast<std::uint64_t>(h3) + s[3] + (t >> 32);  h3 = static_cast<std::uint32_t>(t);

        store32_le(tag +  0, h0);
        store32_le(tag +  4, h1);
        store32_le(tag +  8, h2);
        store32_le(tag + 12, h3);
    }
};

// Constant-time tag comparison
bool poly1305_verify(const std::uint8_t a[16], const std::uint8_t b[16]) noexcept {
    std::uint8_t diff = 0;
    for (int i = 0; i < 16; ++i) {
        diff |= a[i] ^ b[i];
    }
    return diff == 0;
}

} // anonymous namespace

std::array<std::uint8_t, 16> poly1305_mac(
    const std::uint8_t key[32],
    const std::uint8_t* data, std::size_t len) noexcept {

    Poly1305State st;
    st.init(key);

    std::size_t offset = 0;
    while (offset + 16 <= len) {
        st.block(data + offset, 16);
        offset += 16;
    }
    if (offset < len) {
        st.block(data + offset, len - offset);
    }

    std::array<std::uint8_t, 16> tag{};
    st.finish(tag.data());
    detail::secure_erase(&st, sizeof(st));
    return tag;
}

// ============================================================================
// ChaCha20-Poly1305 AEAD (RFC 8439 Section 2.8)
// ============================================================================
// Construction:
//   1. Generate Poly1305 one-time key from ChaCha20 block 0
//   2. Encrypt plaintext with ChaCha20 starting at counter 1
//   3. Construct Poly1305 MAC over (AAD || padding || ciphertext || padding || lengths)
// ============================================================================

namespace {

void aead_poly1305_pad_and_mac(Poly1305State& st,
                                const std::uint8_t* aad, std::size_t aad_len,
                                const std::uint8_t* ct, std::size_t ct_len) noexcept {
    // Process AAD
    std::size_t off = 0;
    while (off + 16 <= aad_len) {
        st.block(aad + off, 16);
        off += 16;
    }
    if (off < aad_len) {
        st.block(aad + off, aad_len - off);
    }
    // Pad AAD to 16-byte boundary
    std::size_t aad_pad = (16 - (aad_len % 16)) % 16;
    if (aad_pad > 0) {
        std::uint8_t zeros[16]{};
        st.block(zeros, aad_pad);
    }

    // Process ciphertext
    off = 0;
    while (off + 16 <= ct_len) {
        st.block(ct + off, 16);
        off += 16;
    }
    if (off < ct_len) {
        st.block(ct + off, ct_len - off);
    }
    // Pad ciphertext to 16-byte boundary
    std::size_t ct_pad = (16 - (ct_len % 16)) % 16;
    if (ct_pad > 0) {
        std::uint8_t zeros[16]{};
        st.block(zeros, ct_pad);
    }

    // Append lengths as two 64-bit little-endian values
    std::uint8_t lens[16];
    store64_le(lens, static_cast<std::uint64_t>(aad_len));
    store64_le(lens + 8, static_cast<std::uint64_t>(ct_len));
    st.block(lens, 16);
}

} // anonymous namespace

void aead_chacha20_poly1305_encrypt(
    const std::uint8_t key[32],
    const std::uint8_t nonce[12],
    const std::uint8_t* aad, std::size_t aad_len,
    const std::uint8_t* plaintext, std::size_t plaintext_len,
    std::uint8_t* out,
    std::uint8_t tag[16]) noexcept {

    // 1. Generate Poly1305 one-time key from ChaCha20 block 0
    std::uint8_t poly_key[64];
    chacha20_block(key, nonce, 0, poly_key);

    // 2. Encrypt plaintext (counter starts at 1)
    std::memcpy(out, plaintext, plaintext_len);
    chacha20_crypt(key, nonce, 1, out, plaintext_len);

    // 3. Compute Poly1305 tag over (AAD || pad || ciphertext || pad || lengths)
    Poly1305State st;
    st.init(poly_key);
    aead_poly1305_pad_and_mac(st, aad, aad_len, out, plaintext_len);
    st.finish(tag);

    detail::secure_erase(poly_key, sizeof(poly_key));
    detail::secure_erase(&st, sizeof(st));
}

bool aead_chacha20_poly1305_decrypt(
    const std::uint8_t key[32],
    const std::uint8_t nonce[12],
    const std::uint8_t* aad, std::size_t aad_len,
    const std::uint8_t* ciphertext, std::size_t ciphertext_len,
    const std::uint8_t tag[16],
    std::uint8_t* out) noexcept {

    // 1. Generate Poly1305 one-time key from ChaCha20 block 0
    std::uint8_t poly_key[64];
    chacha20_block(key, nonce, 0, poly_key);

    // 2. Verify tag first (before decrypting)
    Poly1305State st;
    st.init(poly_key);
    aead_poly1305_pad_and_mac(st, aad, aad_len, ciphertext, ciphertext_len);
    std::uint8_t computed_tag[16];
    st.finish(computed_tag);

    detail::secure_erase(poly_key, sizeof(poly_key));
    detail::secure_erase(&st, sizeof(st));

    if (!poly1305_verify(computed_tag, tag)) {
        detail::secure_erase(computed_tag, sizeof(computed_tag));
        std::memset(out, 0, ciphertext_len);
        return false;
    }
    detail::secure_erase(computed_tag, sizeof(computed_tag));

    // 3. Decrypt (counter starts at 1)
    std::memcpy(out, ciphertext, ciphertext_len);
    chacha20_crypt(key, nonce, 1, out, ciphertext_len);

    return true;
}

} // namespace secp256k1
