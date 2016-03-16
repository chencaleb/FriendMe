var express 		= require('express'),
	app 			= express(),
	mongoose 		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	methodOverride 	= require('method-override'),
	path 			= require('path'),
	logger 			= require('morgan'),
	expressSession 	= require('express-session'),
	cookieParser   	= require("cookie-parser"),
	// passport       	= require('passport');
	usersController = require('../controllers/users');

var	router = express.Router();

mongoose.connect('mongodb://localhost/friendme');


/*
 * HTML Endpoints
 */
 
//welcome Page
router.get('/', function(req, res){
  res.render('welcome', {user: req.user});
});

router.get('/hello', function(req, res) {
	res.render('hello');
});

//index page
router.get('/destinations', function(req, res) {
	res.render("destination");
});

/*
 * JSON API Endpoints
 */

//user routes
router.route('/api')
	.get(usersController.apiRoot);

router.route('/api/users')
	.get(usersController.apiIndex)
	.post(usersController.create);
	
router.route('/api/users/:id')
	// Show User
	.get(usersController.show)
	.delete(usersController.destroy)
	.put(usersController.update);

//session routes
router.route('/sessions')
 	.post(usersController.loginUser)
 	.get(usersController.logoutUser);





module.exports = router;