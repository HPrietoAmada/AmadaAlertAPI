'user strict';

var AlertRetryLog = require('../models/alertRetryLogModel.js');

exports.getById = function (req, res) {
	AlertRetryLog.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByAlertId = function (req, res) {
	AlertRetryLog.getByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getAll = function (req, res) {
	AlertRetryLog.getAll(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByCreatedId = function (req, res) {
	AlertRetryLog.getByCreatedId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.deleteById = function (req, res) {
	AlertRetryLog.deleteById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Responses successfully deleted.' });
	});
};

exports.deleteByAlertId = function (req, res) {
	AlertRetryLog.deleteByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Response successfully deleted.' });
	});
};

exports.deleteAll = function (req, res) {
	AlertRetryLog.deleteAll(function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Responses successfully deleted.' });
	});
};

exports.create = function (req, res) {
	var newAlertRetryLog = new AlertRetryLog(req.body);
	delete newAlertRetryLog.id;
	console.log('alert_retry_log:');
	console.log(newAlertRetryLog);

	if (!newAlertRetryLog) {
		res.status(400).send({
			error: true,
			message: 'Unable to create response at this time.'
		});
		return;
	}

	if (!newAlertRetryLog.alert_id) {
		res.status(400).send({
			error: true,
			message: 'Alert retry log requires an alert_id field.'
		});
		return;
	}

	AlertRetryLog.create(newAlertRetryLog, function (err, data) {
		if (err)
			res.send(err);
		res.json(data);
	});
};