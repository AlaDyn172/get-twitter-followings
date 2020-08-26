# get-twitter-followings

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get followings for target username

## Install

    npm install --save get-twitter-followings

## Usage

```js
import getTwitterFollowings from 'get-twitter-followings';

getTwitterFollowings(tokens, 'aladyn172').then(followings => {
  console.log(followings); // "User Objects" array https://dev.twitter.com/overview/api/users
});
```

## API

### getTwitterFollowings(tokens, username)

Return a promise that resolves to followings.

#### tokens

*Required*  
Type: `Object`

Valid [Twitter developer credentials (tokens)][how-to-get]
in the form of a set of consumer and access tokens/keys.
You can use [twitter-tokens][tokens], to simplify getting tokens.

[how-to-get]: https://aladyn172.com/get-twitter-tokens/
[tokens]: https://www.npmjs.com/package/twitter-tokens

#### username

*Required*  
Type: `String`

Twitter username.

## License

MIT © AlaDyn172

[npm-url]: https://npmjs.org/package/get-twitter-followings
[npm-image]: https://img.shields.io/npm/v/get-twitter-followings.svg?style=flat-square

[travis-url]: https://travis-ci.org/aladyn172/get-twitter-followings
[travis-image]: https://img.shields.io/travis/aladyn172/get-twitter-followings.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/aladyn172/get-twitter-followings
[coveralls-image]: https://img.shields.io/coveralls/aladyn172/get-twitter-followings.svg?style=flat-square

[depstat-url]: https://david-dm.org/aladyn172/get-twitter-followings
[depstat-image]: https://david-dm.org/aladyn172/get-twitter-followings.svg?style=flat-square
