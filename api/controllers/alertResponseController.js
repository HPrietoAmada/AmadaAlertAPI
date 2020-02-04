'use strict';

var AlertResponse = require('../models/alertResponseModel.js');

exports.getById = function (req, res) {
	AlertResponse.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getAll = function (req, res) {
	AlertResponse.getAll (function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByCreatedId = function (req, res) {
	AlertResponse.getByCreatedId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByAlertId = function (req, res) {
	AlertResponse.getByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.deleteById = function (req, res) {
	AlertResponse.deleteById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Responses successfully deleted.' });
	});
};

exports.deleteByAlertId = function (req, res) {
	AlertResponse.deleteByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Response successfully deleted.' });
	});
};

exports.deleteAll = function (req, res) {
	AlertResponse.deleteAll(function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Responses successfully deleted.' });
	});
};

exports.create = function (req, res) {
	var newAlertResponse = new AlertResponse(req.body);
	if (!newAlertResponse || !newAlertResponse.response_desc) {
		res.status(400).send({ error: true, message: 'Message body required.' });
	} else {
		AlertResponse.create(newAlert, function (err, data) {
			if (err)
				res.send(err);
			res.json(data);
		});
	}
};