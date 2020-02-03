'use strict';

var Alert = require('../models/alertModel.js');

exports.getById = function (req, res) {
	Alert.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getAll = function (req, res) {
	Alert.getAll(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByUserId = function (req, res) {
	Alert.getByUserId(req.params.id, function (err, data) {
		if (err) {
			res.send(err);
			return;
		}
		res.send(data);
	});
};

exports.deleteById = function (req, res) {
	Alert.deleteById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert successfully deleted.' });
	});
};

exports.deleteAll = function (req, res) {
	Alert.deleteAll(function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: "Alerts deleted successfully." })
	});
}

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