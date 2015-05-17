'use strict';
var ghUser = require('gh-user');

module.exports = function (username, token, cb) {
	ghUser(username, token, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data.avatar_url);
	});
};
