'use strict';

module.exports = function (app) {
	// controller
	var controller = require('../controllers/alertNotificationTypeController');

	app.route('/alert-notification-type')
		.get(controller.getAll)
		.post(controller.create)
		.delete(controller.deleteAll);

	app.route('/alert-notification-type/id/:id')
		.get(controller.getById)
		.delete(controller.deleteById);
};