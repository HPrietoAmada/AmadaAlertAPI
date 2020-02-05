'use strict';

var AlertTemplateResponse = require('../models/alertTemplateResponseModel.js');

exports.getById = function (req, res) {
	AlertTemplateResponse.getById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getAll = function (req, res) {
	AlertTemplateResponse.getAll (function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByCreatedId = function (req, res) {
	AlertTemplateResponse.getByCreatedId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.getByAlertId = function (req, res) {
	AlertTemplateResponse.getByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.deleteById = function (req, res) {
	AlertTemplateResponse.deleteById(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert Responses successfully deleted.' });
	});
};

exports.deleteByAlertId = function (req, res) {
	AlertTemplateResponse.deleteByAlertId(req.params.id, function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert template response successfully deleted.' });
	});
};

exports.deleteAll = function (req, res) {
	AlertTemplateResponse.deleteAll(function (err, data) {
		if (err)
			res.send(err);
		res.json({ message: 'Alert template responses successfully deleted.' });
	});
};

exports.create = function (req, res) {
	var newAlertTemplateResponse = new AlertTemplateResponse(req.body);
	delete newAlertTemplateResponse.id;
	console.log('alert_template_response:');
	console.log(newAlertTemplateResponse);

	if (!newAlertTemplateResponse) {
		res.status(400).send({
			error: true,
			message: 'Unable to create template response at this time.'
		});
		return;
	}

	if (!newAlertTemplateResponse.template_alert_id) {
		res.status(400).send({
			error: true,
			message: 'Alert template response requires an alert template as parent.'
		});
		return;
	}

	if (!newAlertTemplateResponse.response_desc || newAlertTemplateResponse.response_desc.length === 0) {
		res.status(400).send({ 
			error: true, 
			message: 'Alert template response description is a required field.'
		});
		return;
	}

	AlertTemplateResponse.create(newAlertTemplateResponse, function (err, data) {
		if (err)
			res.send(err);
		res.json(data);
	});
};