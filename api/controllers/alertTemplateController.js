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
	var newAlertTemplate = new AlertTemplate(req.body);
	delete newAlertTemplate.id;
	console.log(newAlertTemplate);

	// created_id a required field
	if (!newAlertTemplate || !newAlertTemplate.created_id) {
		res.status(400).send({ 
			error: true, 
			message: 'Unable to create alert template' 
		});
		return;
	}
	// template name required field
	if (!newAlertTemplate.template_name || newAlertTemplate.template_name.length == 0) {
		res.status(400).send({
			error: true,
			message: 'Template name is a required field.'
		});
		return;
	};

	if (!newAlertTemplate.message || newAlertTemplate.message.length == 0) {
		res.status(400).send({
			error: true,
			message: 'Template message is a required field.'
		});
		return;
	};

	AlertTemplate.create(newAlertTemplate, function (err, data) {
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

exports.getByCreatedId = function (req, res) {
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