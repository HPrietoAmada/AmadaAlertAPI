'user strict';

var mysql = require('mysql');

/* Start of Production connection */

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

/* End of Production connection */

// local mysql db connection (development)
var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE
});
connection.connect(function (err) {
	if (err) {
		console.log('Error connection: ' + err.stack);
		return;
	}

	console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;