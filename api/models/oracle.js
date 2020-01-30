'user strict';

const oracle = require('oracledb');

let config = {
	user: 				process.env.ORACLE_USER,
	password: 			process.env.ORACLE_PASSWORD,
	connectionString: 	process.env.ORACLE_CONNECTION_STRING
};

let connection = oracle.getConnection(config);

module.exports = connection;

//10.1.25.19
//10.1.25.20