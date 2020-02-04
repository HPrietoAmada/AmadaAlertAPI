'user strict';

var Home = function (object) {};

Home.index = function (res) {
	res(null, '<h1>Amada Alert API</h1>');
};

Home.alertForm = function (res) {
	res(null, '/../views/alert_form.html');
};

Home.alertResponseForm = function (res) {
	res(null, '/../views/alert_response_form.html');
};

module.exports = Home;