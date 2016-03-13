var express 		= require('express'),
	app 			= express(),
	mongoose 		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	methodOverride 	= require('method-override'),
	path 			= require('path'),
	logger 			= require('morgan');
	expressSession 	= require('express-session');
	cookieParser   	= require("cookie-parser");
	passport       	= require('passport');
	usersController = require('../controllers/users');

var	router = express.Router();

mongoose.connect('mongodb://localhost/friendme');

//index page
router.get('/', function(req, res) {
	res.render("./partials/welcome");
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


router.route('/api/users')
	.get(usersController.apiUsersIndex);

// router.route('/api/users/:id')
// 	.get((usersController.apiUser);

router.route('/api')
	.get(usersController.apiRoot);









module.exports = router;