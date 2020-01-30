'user strict';

var sql = require('./db.js');

//Alert object constructor
var Alert = function(alert) {
	this.alert = alert.alert
}