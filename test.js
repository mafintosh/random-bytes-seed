const test = require('brittle')
const seed = require('./')

test('returns a buffer', (t) => {
  const randomBytes = seed()

  let b = randomBytes(10)
  t.ok(Buffer.isBuffer(b))
  t.is(b.length, 10)

  b = randomBytes(100)
  t.ok(Buffer.isBuffer(b))
  t.is(b.length, 100)
})

test('is seedable', (t) => {
  let randomBytes = seed()

  const b1 = randomBytes(10)
  t.ok(Buffer.isBuffer(b1))
  t.is(b1.length, 10)

  const b2 = randomBytes(100)
  t.ok(Buffer.isBuffer(b2))
  t.is(b2.length, 100)

  randomBytes = seed(randomBytes.seed)
  t.alike(b1, randomBytes(10))
  t.alike(b2, randomBytes(100))
})
