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
	delete newAlertResponse.id;
	console.log('alert_response:');
	console.log(newAlertResponse);

	if (!newAlertResponse) {
		res.status(400).send({
			error: true,
			message: 'Unable to create response at this time.'
		});
		return;
	}

	if(!newAlertResponse.alert_id) {
		res.status(400).send({
			error: true,
			message: 'Alert response identification is a required field.'
		});
		return;
	};

	if (!newAlertResponse.response_desc || newAlertResponse.response_desc.length === 0) {
		res.status(400).send({ 
			error: true, 
			message: 'Alert Response description is a required field.'
		});
		return;
	}

	AlertResponse.create(newAlertResponse, function (err, data) {
		if (err)
			res.send(err);
		res.json(data);
	});
};

exports.createList = function (req, res) {
	var alertResponseList = req.body;
	var promise = new Promise((resolve, reject) => {
		var newAlertResponseIdList = [];
		alertResponseList.forEach((alertResponseBody, index) => {
			var alertResponse = new AlertResponse(alertResponseBody);
			console.log("Looping");
			delete alertResponse.id;
			if (!alertResponse) {
				return;
			}	
			if(!alertResponse.alert_id) {
				return;
			};	
			if (!alertResponse.response_desc || alertResponse.response_desc.length === 0) {
				return;
			}
			AlertResponse.create(alertResponse, function (err, data) {
				if (!err)
					newAlertResponseIdList.push(data);
				if (index == alertResponseList.length - 1)
					resolve(newAlertResponseIdList);
			});
		});
	});

	promise.then((result) => {
		res.json(result);
	});

	promise.catch((error) => {
		res.send(error);
	});
};