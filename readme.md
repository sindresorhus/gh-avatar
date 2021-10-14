# gh-avatar

> Get the avatar of a GitHub user

## Install

```sh
npm install gh-avatar
```

## Usage

```js
import ghAvatar from 'gh-avatar';

console.log(await ghAvatar('sindresorhus'));
//=> 'https://avatars.githubusercontent.com/u/170270?v=3'
```

## API

### ghAvatar(username, options?)

Returns a `Promise<string>` with the URL to the avatar.

#### username

Type: `string`

GitHub username.

#### options

Type: `object`

##### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).
