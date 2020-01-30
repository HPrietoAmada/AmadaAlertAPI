'use strict';

module.exports = function (app) {
	var alertTemplate = require('../controllers/alertTemplateController');

	app.route('/alert-template')
		.get(alertTemplate.getAll)
		.post(alertTemplate.create);

	app.route('/alert-template/id/:id')
		.get(alertTemplate.getById)
		.delete(alertTemplate.remove);

	app.route('/alert-template/user/id/:id')
		.get(alertTemplate.getByUserId);
}