var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/login', function(req, res) {
	res.render('template');
});

app.get('/auth/google', function(req, res) {
	res.render('log-in-page', {
		user: {
		login: req.query.login,
		password: req.query.password
		}
	});

});

app.listen(3000);
