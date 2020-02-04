'use strict';

module.exports = function (app) {
	// controller reference
	var alert = require('../controllers/alertController');

	// alert Routes
	app.route('/alert')
		.get(alert.getAll)
		.post(alert.create);

	app.route('/alert/created-id/:id')
		.get(alert.getByCreatedId);
		//.put(alert.UpdateAlert)

	app.route('/alert/id/:id')
		.get(alert.getById);

	app.route('/alert/delete')
		.delete(alert.deleteAll);

	app.route('/alert/delete/:id')
		.delete(alert.deleteById);
};