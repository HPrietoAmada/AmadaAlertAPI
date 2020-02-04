'user strict';

var mysql = require('./mysql.js');

var AlertTemplateUser = function (object) {
	this.id 				= object.id;
	this.user_id 			= object.user_id;
	this.alert_template_id 	= object.alert_template_id;
	this.status 			= object.status;
	this.created_date 		= object.created_date;
	this.created_id 		= object.created_id;
	this.updated_date 		= object.updated_date;
	this.updated_id 		= object.updated_id;
};

AlertTemplateUser.getById = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_user WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.getAll = function (result) {
	mysql.query(
		"SELECT * FROM alert_template_user"
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.getByUserId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_user WHERE user_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.getByAlertId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_user WHERE alert_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.getByCreatedId = function (id, result) {
	mysql.query(
		"SELECT * FROM alert_template_user WHERE created_id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.deleteById = function (id, result) {
	mysql.query(
		"DELETE FROM alert_template_user WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertTemplateUser.deleteAll = function (id, result) {
	mysql.query(
		"DELETE FROM alert_template_user WHERE id > 0"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertTemplateUser.create = function (model, result) {
	mysql.query(
		"INSERT INTO alert_template_user SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertTemplateUser;