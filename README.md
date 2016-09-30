# random-bytes-seed

Get a random buffer based on a seed. Useful for reproducible tests.

```
npm install random-bytes-seed
```

[![build status](http://img.shields.io/travis/mafintosh/random-bytes-seed.svg?style=flat)](http://travis-ci.org/mafintosh/random-bytes-seed)

## Usage

``` js
var seed = require('random-bytes-seed')
var randomBytes = seed('a seed')

console.log(randomBytes(10)) // get 10 pseudo random bytes
console.log(randomBytes(20)) // get 20 pseudo random bytes
```

If you run the above example multiple times you'll notice it is returning the same "random" bytes every time because it is using the same seed.
You should only use this for testing / debugging as there are probably some security problems with the way this is implemented  ¯\\_(ツ)_/¯.

When testing you can override `crypto.randomBytes` with the seeded version like this

``` js
var crypto = require('crypto')

crypto.randomBytes = seed('a seed')
```

## API

#### `var randomBytes = seed([seed])`

Create a new randomBytes generator. If you do not provide a seed a random one is chosen for you.

#### `var buf = randomBytes(numberOfBytes)`

Returns a new random buffer based on the seed.

#### `randomBytes.seed`

The seed originally used.

#### `randomBytes.currentSeed`

The seed for the next random operation.

## License

MIT
