require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./api/models/database');
const port = process.env.PORT || 3000;

//bkettering 1156
console.log("Gonna perform query.");
app.route('/alerts/:userId')
	.get(function (req, res, next) {
		connection.query(
			"SELECT * FROM 'alerts' WHERE userId = ? LIMIT = 3", 567,
			function (error, results, fields) {
				console.log("Performing query.");
				if (error) {
					console.log(error);
					return;
				}
				res.json(results);
			}
		);
	});

app.set('port', port);
app.listen(port);
