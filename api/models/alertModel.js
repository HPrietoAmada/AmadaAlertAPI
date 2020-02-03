'user strict';

var mysql = require('./mysql.js');

//Alert object constructor
var Alert = function (object) {
	this.id = object.id;
	this.notification 	= object.notification;
	this.send_type 		= object.send_type;
	this.retry_group 	= object.retry_group;
	this.n_retries 		= object.n_retries;
	this.retry_delay 	= object.retry_delay;
	this.retry_count 	= object.retry_count;
	this.message 		= object.message;
	this.allow_response_change = object.allow_response_change;
	this.send_date 		= object.send_date;
	this.created_id 	= object.created_id;
	this.created_date 	= object.created_date;
	this.updated_id 	= object.updated_id;
	this.updated_date 	= object.updated_date;	
};

Alert.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.getByUserId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert WHERE CREATED_ID = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

Alert.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = Alert;

/*

INSERT INTO alert values (4, NULL, NULL, NULL, 5, 5, 5, 'I hope everything is ok', 0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 
INSERT INTO alert values (5, NULL, NULL, NULL, 5, 5, 5, 'East L.A. Blowout',       0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 
INSERT INTO alert values (6, NULL, NULL, NULL, 5, 5, 5, 'The roof is on fire',     0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 
INSERT INTO alert values (7, NULL, NULL, NULL, 5, 5, 5, 'The servers are back up', 0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 
INSERT INTO alert values (8, NULL, NULL, NULL, 5, 5, 5, 'WindMerge test text',     0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 
INSERT INTO alert values (9, NULL, NULL, NULL, 5, 5, 5, 'Everyone Run!!',          0, SYSDATE(), 1156, SYSDATE(), 1156, SYSDATE()) 


*/