'use strict';

function detectLang({text, ...params}, cb) {
	const self = this;
	return self.transport.request({
		path: '/_langdetect',
		method: 'POST',
		body: {text},
		...params
	}, cb);
}

function plugin(Client) {
	Client.prototype.detectLang = detectLang;
}

module.exports = detectLang;
module.exports.plugin = plugin;
