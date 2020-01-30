'use strict';

module.exports = function (app) {
	// controller reference
	var alert = require('../controllers/alertController');

	// alert Routes
	app.route('/alert')
		.get(alert.getAll)
		.post(alert.create);

	app.route('/alert/user/id/:id')
		.get(alert.getByUserId);
		//.put(alert.UpdateAlert)

	app.route('/alert/id/:id')
		.get(alert.getById)
		.delete(alert.remove);
};