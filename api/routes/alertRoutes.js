'use strict';

module.exports = function (app) {
	// controller reference
	var alert = require('../controllers/alertController');

	// alert Routes
	app.route('/alerts')
		.get(alert.get_all_alerts)
		.post(alert.create_an_alert);

	app.route('/alerts/:userId')
		.get(alert.get_user_alert)
		.put(alert.update_alert)
		.delete(alert.delete_alert);
};