import test from 'ava';
import fn from './';

test(async t => {
	t.true(/^https/.test(await fn('sindresorhus')));
});
