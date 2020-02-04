'use strict';

module.exports = function (app) {
	var home = require('../controllers/homeController');

	app.route('/')
		.get(home.index);

	app.route('/form/alert')
		.get(home.alertForm);

	app.route('/form/alert-response')
		.get(home.alertResponseForm);

};