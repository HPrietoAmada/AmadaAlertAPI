'user strict';

var Home = function (object) {};

Home.index = function (res) {
	res(null, '<h1>Amada Alert API</h1>');
};

Home.form = function (fileName, res) {
	res(null, '/../views/forms/' + fileName);
};

module.exports = Home;