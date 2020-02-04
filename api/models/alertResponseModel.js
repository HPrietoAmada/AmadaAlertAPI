'user strict';

var mysql = require('./mysql.js');

var AlertResponse = function (object) {
	this.id 			= object.id;
	this.alert_id 		= object.alert_id;
	this.response_desc 	= object.response_desc;
	this.sort_order 	= object.sort_order;
	this.created_date 	= object.created_date;
	this.created_id 	= object.created_id;
	this.updated_date 	= object.updated_date;
	this.updated_id 	= object.updated_id;
};

AlertResponse.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert_response"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertResponse.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_response WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertResponse.getByCreatedId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_response WHERE created_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertResponse.getByAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_response WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertResponse.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert_response WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertResponse.deleteByAlertId = function (id, result) {
	mysql.query(
		"DELETE FROM alert_response WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertResponse.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert_response WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertResponse.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert_response SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertResponse;