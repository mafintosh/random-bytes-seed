const seed = require('random-bytes-seed')
const randomBytes = seed('a seed')

console.log(randomBytes(10)) // get 10 pseudo random bytes
console.log(randomBytes(20)) // get 20 pseudo random bytes
