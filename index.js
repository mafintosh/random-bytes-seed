const sodium = require('sodium-universal')

const randomBytesClassic = (n) => {
  const buf = Buffer.allocUnsafe(n)
  sodium.randombytes_buf(buf)
  return buf
}

module.exports = function (seed) {
  randomBytes.seed = seed = seed || randomBytesClassic(32)
  randomBytes.currentSeed = seed

  return randomBytes

  function randomBytes (n) {
    const result = Buffer.allocUnsafe(n)
    let used = 0

    while (used < result.length) {
      randomBytes.currentSeed = seed = next(seed)
      seed.copy(result, used)
      used += seed.length
    }

    return result
  }
}

function next (seed) {
  const output = Buffer.alloc(32)
  sodium.crypto_hash_sha256(output, Buffer.from(seed))
  return output
}
