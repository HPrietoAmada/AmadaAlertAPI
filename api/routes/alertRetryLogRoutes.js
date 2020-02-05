'use strict';

module.exports = function (app) {
	var alertRetryLog = require('../controllers/alertRetryLogController');

	app.route('/alert-retry-log')
		.get(alertRetryLog.getAll)
		.post(alertRetryLog.create)
		.delete(alertRetryLog.deleteAll);

	app.route('/alert-retry-log/created-id/:id')
		.get(alertRetryLog.getByCreatedId);

	app.route('/alert-retry-log/id/:id')
		.get(alertRetryLog.getById)
		.delete(alertRetryLog.deleteById);

	app.route('/alert-retry-log/alert-id/:id')
		.get(alertRetryLog.getByAlertId)
		.delete(alertRetryLog.deleteByAlertId);
};