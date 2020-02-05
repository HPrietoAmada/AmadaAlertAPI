'user strict';

var mysql = require('./mysql.js');

var AlertTemplateResponse = function (object) {
	this.id 				= object.id;
	this.template_alert_id 	= object.template_alert_id;
	this.response_desc 		= object.response_desc;
	this.sort_order         = object.sort_order;
	this.status 			= object.status;
	this.created_date 		= object.created_date;
	this.created_id 		= object.created_id;
	this.updated_date 		= object.updated_date;
	this.updated_id 		= object.updated_id;
};

AlertTemplateResponse.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_response WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert_template_response"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.getByCreatedId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_response WHERE created_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.getByTemplateAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_response WHERE template_alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert_template_response WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.deleteByTemplateAlertId = function (id, result) {
	mysql.query(
		"DELETE FROM alert_template_response WHERE template_alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateResponse.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert_template_response WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertTemplateResponse.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert_template_response SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertTemplateResponse;