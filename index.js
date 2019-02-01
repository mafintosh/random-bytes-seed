var crypto = require('crypto')
var randomBytesClassic = crypto.randomBytes

module.exports = function (seed) {
  randomBytes.seed = seed = seed || randomBytesClassic(32)
  randomBytes.currentSeed = seed

  return randomBytes

  function randomBytes (n) {
    var result = Buffer.allocUnsafe(n)
    var used = 0

    while (used < result.length) {
      randomBytes.currentSeed = seed = next(seed)
      seed.copy(result, used)
      used += seed.length
    }

    return result
  }
}

function next (seed) {
  return crypto.createHash('sha256').update(seed).digest()
}
