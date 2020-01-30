'use strict';

var Alert = require('../models/alertModel.js');

exports.getAlert = function (req, res) {
	Alert.getAlert(req.params.alertId, function (err, alert) {
		if (err)
			res.send(err);
		res.send(alert);
	});
};

exports.getAllAlerts = function (req, res) {
	Alert.getAllAlerts(function (err, alerts) {
		if (err)
			res.send(err);
		res.send(alerts);
	});
};

exports.getUserAlerts = function (req, res) {
	Alert.getUserAlerts(req.params.createdId, function (err, alerts) {
		console.log("AlertController");
		if (err) {
			res.send(err);
			return;
		}
		res.send(alerts);
	});
};

exports.deleteAlert = function (req, res) {
	Alert.remove(req.params.alertId, function (err, alert) {
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Alert successfully deleted.' });
	});
};