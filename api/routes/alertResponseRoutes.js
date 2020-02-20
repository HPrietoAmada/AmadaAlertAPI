'use strict';

module.exports = function (app) {
	var alertResponse = require('../controllers/alertResponseController');

	app.route('/alert-response')
		.get(alertResponse.getAll)
		.post(alertResponse.create)
		.delete(alertResponse.deleteAll);

	app.route('/alert-response/list')
		.post(alertResponse.createList);

	app.route('/alert-response/id/:id')
		.get(alertResponse.getById)
		.delete(alertResponse.deleteById);

	app.route('/alert-response/created-id/:id')
		.get(alertResponse.getByCreatedId);

	app.route('/alert-response/alert-id/:id')
		.get(alertResponse.getByAlertId)
		.delete(alertResponse.deleteByAlertId);
};