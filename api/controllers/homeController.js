'use strict';

const path = require('path');
var Home = require('../models/homeModel.js');

exports.index = function (req, res) {
	Home.index(function (err, data) {
		if (err)
			res.send(err);
		res.render(data);
	});
};

exports.alertForm = function (req, res) {
	Home.alertForm(function (err, data) {
		if (err)
			res.send(err);
		console.log("FileName: " + data);
		res.sendFile(path.join(__dirname + data));
	});
};

exports.alertResponseForm = function (req, res) {
	Home.alertForm(function (err, data) {
		if (err)
			res.send(err);
		console.log("FileName: " + data);
		res.sendFile(path.join(__dirname + data));
	});
};