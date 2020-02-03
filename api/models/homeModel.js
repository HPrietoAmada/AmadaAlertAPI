'user strict';

var Home = function (object) {};

Home.index = function (result) {
	result(null, '<h1>Amada Alert API</h1>');
};

module.exports = Home;