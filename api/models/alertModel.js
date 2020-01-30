'user strict';

var sql = require('./database.js');

//Alert object constructor
var Alert = function(alert) {
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
}

Alert.getAlert = function (alertId, result) {
	sql.query(
		"SELECT * FROM alert WHERE id = ?",
		alertId,
		function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.getAllAlerts = function (result) {
	sql.query(
		"SELECT * FROM alert"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

Alert.getUserAlerts = function (createdId, result) {
	sql.query(
		"SELECT * FROM alert WHERE CREATED_ID = ?"
		,createdId
		,function (err, res) {
			if (err) {
				console.log("getUserAlert error: " + err);
				result(err, null);
			} else {
				console.log("getUserAlert res: ");
				console.log(res);
				result(null, res);
			}
		});
};

Alert.remove = function (alertId, result) {
	sql.query(
		"DELETE * FROM alert WHERE ID = ?"
		,alertId
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

module.exports = Alert;