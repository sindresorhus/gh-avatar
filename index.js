'use strict';
var ghUser = require('gh-user');

module.exports = function (username, token) {
	return ghUser(username, token).then(function (data) {
		return data.avatar_url;
	});
};
