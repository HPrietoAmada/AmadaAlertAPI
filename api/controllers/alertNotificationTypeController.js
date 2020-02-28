'use strict';

var AlertNotificationType = require('../models/alertNotificationTypeModel.js');

exports.getById = function (req, res) {
	AlertNotificationType.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getAll = function (req, res) {
	AlertNotificationType.getAll(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByCreatedId = function (req, res) {
	AlertNotificationType.getByCreatedId(req.params.id, function (err, data) {
		if (err) {
			res.send(err);
			return;
		}
		res.send(data);
	});
};

exports.deleteById = function (req, res) {
	AlertNotificationType.deleteById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'AlertNotificationType successfully deleted.' });
	});
};

exports.deleteAll = function (req, res) {
	AlertNotificationType.deleteAll(function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: "Alerts deleted successfully." })
	});
}

exports.create = function (req, res) {
	var newAlertNotificationType = new AlertNotificationType(req.body);
	delete newAlertNotificationType.id;
	console.log('alertNotificationType:');
	console.log(newAlertNotificationType);

	if (!newAlertNotificationType || !newAlertNotificationType.created_id) {
		res.status(400).send({ 
			error: true, 
			message: 'Unable to authenticate user.' 
		});
		return;
	}

	if (!newAlertNotificationType.description || newAlertNotificationType.description.length === 0) {
		res.status(400).send({
			error: true,
			message: 'AlertNotificationType description is a required field.'
		});
		return;
	}

	AlertNotificationType.create (newAlertNotificationType, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
}