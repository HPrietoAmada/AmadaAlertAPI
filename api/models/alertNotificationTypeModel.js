'user strict';

var connection = require('./mysql.js');

// amada_alert.alert_notification_type
var AlertNotificationType = function (object) {
	this.id 			= object.id;
	this.description 	= object.description;
	this.sort_order 	= object.sort_order;
	this.status 		= object.status;
	this.created_date 	= object.created_date;
	this.created_id 	= object.created_id;
	this.updated_date 	= object.updated_date;
	this.updated_id 	= object.updated_id;
};

AlertNotificationType.getById = function (id, result) {
	connection.query(
		"SELECT * FROM alert_notification_type WHERE id ? ORDER BY sort_order"
		,id
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertNotificationType.getAll = function (result) {
	connection.query(
		"SELECT * FROM alert_notification_type ORDER BY sort_order"
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

AlertNotificationType.deleteById = function (id, result) {
	connection.query(
		"DELETE FROM alert_notification_type WHERE id = ?"
		,id
		,function (err, res) {
			if (err) {
				result(err, null);
			} else {
				result(null, res);
			}
		});
};

AlertNotificationType.create = function (model, result) {
	connection.query(
		"INSERT INTO alert_notification_type SET ?"
		,model
		,function (err, res) {
			if (err)
				result(err, null);
			else
				result(null, res);
		});
};

module.exports = AlertNotificationType;