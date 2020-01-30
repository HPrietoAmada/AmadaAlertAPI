'use strict';

module.exports = function (app) {
	// controller reference
	var alert = require('../controllers/alertController');

	// alert Routes
	app.route('/alert')
		.get(alert.getAllAlerts);

	app.route('/alert/created-id/:createdId')
		.get(alert.getUserAlerts);
		//.put(alert.UpdateAlert)

	app.route('/alert/alert-id/:alertId')
		.get(alert.getAlert)
		.delete(alert.deleteAlert);
};