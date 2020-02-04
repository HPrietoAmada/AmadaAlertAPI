'user strict';

let mysql = require('./mysql.js');

var AlertTemplate = function (model) {
	this.id 				= model.id;
	this.template_name 		= model.template_name;
	this.notification_type 	= model.notification_type;
	this.by_email       	= model.by_email;
	this.by_text        	= model.by_text;
	this.by_push        	= model.by_push;
	this.n_retries 			= model.n_retries;
	this.retry_delay 		= model.retry_delay;
	this.message 			= model.message;
	this.allow_response_change = model.allow_response_change;
	this.status 			= model.status;
	this.created_id 		= model.created_id;
	this.created_date 		= model.created_date;
	this.updated_id 		= model.updated_id;
	this.updated_date 		= model.updated_date;
};

AlertTemplate.getAlertTemplate = function (id, result) {
	mysql.query (
		"SELECT * FROM alert_template WHERE id = ?"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertTemplate.getAllAlertTemplates = function (result) {
	mysql.query(
		"SELECT * FROM alert_template"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertTemplate.remove = function (id, result) {
	mysql.query (
		"DELETE * FROM alert_template WHERE id = ?"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertTemplate.create = function (model, result) {
	mysql.query (
		"INSERT INTO alert_template SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

model.exports = AlertTemplate;