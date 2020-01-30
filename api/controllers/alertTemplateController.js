'use strict';

var AlertTemplate = require('../models/alertTemplateModel.js');

// route('/alert-template')
exports.getAll = function (req, res) {
	AlertTemplate.getAll(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.create = function (req, res) {
	AlertTemplate.create(req.body, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

// route('/alert-template/id/:id')
exports.getById = function (req, res) {
	AlertTemplate.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.remove = function (req, res) {
	AlertTemplate.remove(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Template successfully deleted.' });
	});
};

// route: '/alert-template/user/id/:id'
exports.getByUserId = function (req, res) {
	AlertTemplate.getByUserId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};