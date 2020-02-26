'use strict';

module.exports = function (app) {
	var alertTemplateResponse = require('../controllers/alertTemplateResponseController');

	app.route('/alert-template-response')
		.get(alertTemplateResponse.getAll)
		.post(alertTemplateResponse.create)
		.delete(alertTemplateResponse.deleteAll);

	app.route('/alert-template-response/list')
		.post(alertTemplateResponse.createList);

	app.route('/alert-template-response/id/:id')
		.get(alertTemplateResponse.getById)
		.delete(alertTemplateResponse.deleteById);

	app.route('/alert-template-response/created-id/:id')
		.get(alertTemplateResponse.getByCreatedId);

	app.route('/alert-template-response/template-alert-id/:id')
		.get(alertTemplateResponse.getByAlertId)
		.delete(alertTemplateResponse.deleteByAlertId);
};