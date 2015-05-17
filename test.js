'use strict';
var test = require('ava');
var ghAvatar = require('./');

test(function (t) {
	t.plan(1);

	ghAvatar('sindresorhus', function (err, avatar) {
		t.assert(!err, err);
		t.assert(/^https/.test(avatar));
	});
});
