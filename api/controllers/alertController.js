'use strict';

var Alert = require('../models/alertModel.js');

exports.getById = function (req, res) {
	Alert.getById(req.params.id, function (err, alert) {
		if (err)
			res.send(err);
		res.send(alert);
	});
};

exports.getAll = function (req, res) {
	Alert.getAll(function (err, alerts) {
		if (err)
			res.send(err);
		res.send(alerts);
	});
};

exports.getByUserId = function (req, res) {
	Alert.getByUserId(req.params.id, function (err, alerts) {
		if (err) {
			res.send(err);
			return;
		}
		res.send(alerts);
	});
};

exports.remove = function (req, res) {
	Alert.remove(req.params.id, function (err, alert) {
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Alert successfully deleted.' });
	});
};

exports.create = function (req, res) {
	var newAlert = new Alert(req.body);

	if (!newAlert || !newAlert.created_id) {
		res.status(400).send({ error: true, message: 'Unable to authenticate user.' });
	} else {
		Alert.create (newAlert, function (err, data) {
			if (err)
				res.send(err);
			res.json(data);
		});
	}
}