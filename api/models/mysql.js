'user strict';

const mysql = require('mysql');

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
let config = {
	host: 		process.env.MYSQL_HOST,
	user: 		process.env.MYSQL_USER,
	password: 	process.env.MYSQL_PASSWORD,
	database: 	process.env.MYSQL_DATABASE
};

let connection = mysql.createConnection(config);

connection.connect(function (err) {
	if (err) {
		console.log('Error connection: ' + err.stack);
		return;
	}

	console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;