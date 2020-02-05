'use strict';

module.exports = function (app) {
	// controller reference
	var alert = require('../controllers/alertController');

	// alert Routes
	app.route('/alert')
		.get(alert.getAll)
		.post(alert.create)
		.delete(alert.deleteAll);

	app.route('/alert/created-id/:id')
		.get(alert.getByCreatedId);
		//.put(alert.UpdateAlert)

	app.route('/alert/id/:id')
		.get(alert.getById)
		.delete(alert.deleteById);
};