import test from 'ava';
import ghAvatar from './index.js';

test('main', async t => {
	t.regex(await ghAvatar('sindresorhus'), /^https/);
});
