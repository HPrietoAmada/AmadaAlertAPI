'use strict';

const path = require('path');
var Home = require('../models/homeModel.js');

exports.index = function (req, res) {
	Home.index(function (err, data) {
		if (err)
			res.send(err);
		res.send(data);
	});
};

exports.form = function (req, res) {
	Home.form(req.params.fileName, function (err, data) {
		if (err)
			res.send(err);
		console.log("FileName: " + data);
		res.sendFile(path.join(__dirname + data));
	});
};
