'user strict';

var mysql = require('./mysql.js');

var AlertRetryLog = function (object) {
	this.id 			= object.id;
	this.alert_id 		= object.alert_id;
	this.user_count 	= object.user_count;
	this.retry_count 	= object.retry_count;
	this.retry_date 	= object.retry_date;
};

AlertRetryLog.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_retry_log WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertRetryLog.getByAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_retry_log WHERE id = ?"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertRetryLog.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert_retry_log"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertRetryLog.getByUserId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_retry_log WHERE CREATED_ID = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertRetryLog.getByAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_retry_log WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertRetryLog.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert_retry_log WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertRetryLog.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert_retry_log WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertRetryLog.deleteByAlertId = function (id, result) {
	mysql.query(
		"DELETE FROM alert_retry_log WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertRetryLog.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert_retry_log SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertRetryLog;