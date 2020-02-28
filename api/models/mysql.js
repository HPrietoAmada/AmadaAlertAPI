'user strict';

const mysql = require('mysql');

console.log("IsDeployed: ", process.env.DEPLOYED === "true");

// GCP Production connection configuration
var connection;
if (process.env.DEPLOYED && process.env.DEPLOYED === "true") {
	// production connection
	let productionConfig = {
    	user: process.env.MYSQL_USER,
    	database: process.env.MYSQL_DATABASE,
    	password: process.env.MYSQL_PASSWORD,
	}

	if (process.env.MYSQL_INSTANCE_NAME && process.env.NODE_ENV === 'production') {
  		productionConfig.socketPath = `/cloudsql/${process.env.MYSQL_INSTANCE_NAME}`;
	}

	connection = mysql.createConnection(productionConfig);
} else {
	// Development connection
	connection = mysql.createConnection({
		host: 		process.env.MYSQL_HOST,
		user: 		process.env.MYSQL_USER,
		password: 	process.env.MYSQL_PASSWORD,
		database: 	process.env.MYSQL_DATABASE
	});
}


// Development connection

connection.connect(function (err) {
	if (err) {
		console.log('Error connection: ' + err.stack);
		return;
	}
	console.log('Connected as thread id: ' + connection.threadId);
});

module.exports = connection;