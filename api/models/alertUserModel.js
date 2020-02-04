'user strict';

var mysql = require('./mysql.js');

var AlertUser = function (object) {
	this.id 				= object.id;
	this.user_id 			= object.user_id;
	this.alert_id 			= object.alert_id;
	this.alert_response_id 	= object.alert_response_id;
	this.response_status 	= object.response_status;
	this.response_date 		= object.response_date;
	this.response_id 		= object.response_id;
	this.created_date 		= object.created_date;
	this.created_id 		= object.created_id;
	this.updated_date 		= object.updated_date;
	this.updated_id 		= object.updated_id;
};

AlertUser.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_user WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert_user"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.getByUserId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_user WHERE user_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.getByAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_user WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.getByCreatedId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_user WHERE created_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert_user WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertUser.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert_user WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertUser.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert_user SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertUser;