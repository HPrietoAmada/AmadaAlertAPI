require('dotenv').config();

const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	connection = require('./api/models/mysql'),
	port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var homeRoutes = require('./api/routes/homeRoutes');
homeRoutes(app);

var alertRoutes = require('./api/routes/alertRoutes');
alertRoutes(app);

var alertResponseRoutes = require('./api/routes/alertResponseRoutes');
alertResponseRoutes(app);

var alertTemplateRoutes = require('./api/routes/alertTemplateRoutes');
alertTemplateRoutes(app);

var alertTemplateResponseRoutes = require('./api/routes/alertTemplateResponseRoutes');
alertTemplateResponseRoutes(app);

var alertRetryLogRoutes = require('./api/routes/alertRetryLogRoutes');
alertRetryLogRoutes(app);

app.set('port', port);
app.listen(port);
