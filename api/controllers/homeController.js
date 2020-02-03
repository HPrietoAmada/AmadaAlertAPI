'use strict';

var Home = require('../models/homeModel.js');

exports.index = function (req, res) {
	Home.index(function (err, data) {
		if (err)
			res.send(err)
		res.send(data);
	});
};