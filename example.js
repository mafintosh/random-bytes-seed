var seed = require('random-bytes-seed')
var randomBytes = seed('a seed')

console.log(randomBytes(10)) // get 10 pseudo random bytes
console.log(randomBytes(20)) // get 20 pseudo random bytes
