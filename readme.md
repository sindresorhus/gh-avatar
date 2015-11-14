# gh-avatar [![Build Status](https://travis-ci.org/sindresorhus/gh-avatar.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-avatar)

> Get the avatar of a GitHub user


## Install

```
$ npm install --save gh-avatar
```


## Usage

```js
const ghAvatar = require('gh-avatar');

ghAvatar('sindresorhus').then(avatar => {
	console.log(avatar);
	//=> 'https://avatars.githubusercontent.com/u/170270?v=3'
});
```


## API

### ghAvatar(username, [token], callback)

Returns a promise for a URL to the avatar.

#### username

Type: `string`

GitHub username.

#### token

Type: `string`  

GitHub [personal access token](https://github.com/settings/tokens/new).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
