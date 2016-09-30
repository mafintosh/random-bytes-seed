var tape = require('tape')
var seed = require('./')

tape('returns a buffer', function (t) {
  var randomBytes = seed()

  var b = randomBytes(10)
  t.ok(Buffer.isBuffer(b))
  t.same(b.length, 10)

  b = randomBytes(100)
  t.ok(Buffer.isBuffer(b))
  t.same(b.length, 100)

  t.end()
})

tape('is seedable', function (t) {
  var randomBytes = seed()

  var b1 = randomBytes(10)
  t.ok(Buffer.isBuffer(b1))
  t.same(b1.length, 10)

  var b2 = randomBytes(100)
  t.ok(Buffer.isBuffer(b2))
  t.same(b2.length, 100)

  randomBytes = seed(randomBytes.seed)
  t.same(b1, randomBytes(10))
  t.same(b2, randomBytes(100))

  t.end()
})
