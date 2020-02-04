'user strict';

const mysql = require('mysql');


// GCP Production connection configuration
// let productionConfig = {
//     user: process.env.MYSQL_USER,
//     database: process.env.MYSQL_DATABASE,
//     password: process.env.MYSQL_PASSWORD,
// }

// if (process.env.MYSQL_INSTANCE_NAME && process.env.NODE_ENV === 'production') {
//   productionConfig.socketPath = `/cloudsql/${process.env.MYSQL_INSTANCE_NAME}`;
// }

// let connection = mysql.createConnection(productionConfig);


// Development connection
let connection = mysql.createConnection({
	host: 		process.env.MYSQL_HOST,
	user: 		process.env.MYSQL_USER,
	password: 	process.env.MYSQL_PASSWORD,
	database: 	process.env.MYSQL_DATABASE
});

connection.connect(function (err) {
	if (err) {
		console.log('Error connection: ' + err.stack);
		return;
	}
	console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;