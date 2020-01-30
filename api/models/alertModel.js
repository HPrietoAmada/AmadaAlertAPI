'user strict';

var mysql = require('./mysql.js');

//Alert object constructor
var Alert = function (alert) {
	this.id = alert.id;
	this.notification 	= alert.notification;
	this.send_type 		= alert.send_type;
	this.retry_group 	= alert.retry_group;
	this.n_retries 		= alert.n_retries;
	this.retry_delay 	= alert.retry_delay;
	this.retry_count 	= alert.retry_count;
	this.message 		= alert.message;
	this.allow_response_change = alert.allow_response_change;
	this.send_date 		= alert.send_date;
	this.created_id 	= alert.created_id;
	this.created_date 	= alert.created_date;
	this.updated_id 	= alert.updated_id;
	this.updated_date 	= alert.updated_date;	
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

Alert.remove = function (id, result) {
	mysql.query(
		"DELETE * FROM alert WHERE ID = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.create = function (model, result) {
	mydql.query(
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