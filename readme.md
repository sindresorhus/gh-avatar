# gh-avatar [![Build Status](https://travis-ci.org/sindresorhus/gh-avatar.svg?branch=master)](https://travis-ci.org/sindresorhus/gh-avatar)

> Get the avatar of a GitHub user


## Install

```
$ npm install --save gh-avatar
```


## Usage

```js
var ghAvatar = require('gh-avatar');

ghAvatar('sindresorhus', function (err, avatar) {
	console.log(avatar);
	//=> 'https://avatars.githubusercontent.com/u/170270?v=3'
});
```


## API

### ghAvatar(username, [token], callback)

#### username

*Required*  
Type: `string`

GitHub username.

#### token

Type: `string`  

GitHub [personal access token](https://github.com/settings/tokens/new).

#### callback(err, user)


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
