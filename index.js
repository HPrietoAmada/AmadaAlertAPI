require('dotenv').config();

const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	connection = require('./api/models/mysql'),
	port = process.env.PORT || 3000,
	Alert = require('./api/models/alertModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var alertRoutes = require('./api/routes/alertRoutes');
alertRoutes(app);

//bkettering 1156
// app.route('/alert/:createdId')
// 	.get(function (req, res, next) {
// 		console.log(req.params);
// 		connection.query(
// 			"SELECT * FROM alert WHERE created_id = ?", req.params.createdId,
// 			function (error, results, fields) {
// 				if (error) {
// 					console.log(error);
// 					return;
// 				}
// 				res.json(results);
// 				console.log(results);
// 			}
// 		);
// 	});

app.set('port', port);
app.listen(port);
