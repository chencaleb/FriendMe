var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	logger = require('morgan');
	usersController = require('../controllers/users');

var	router = express.Router();

mongoose.connect('mongodb://localhost/friendme');

//welcome page
router.get('/', function(req, res) {
	res.render("./partials/welcome");
});

/*
 * HTML Endpoints
 */

//USER ROUTES
router.route('/')
	.get(usersController.index);

/*
 * JSON API Endpoints
 */

//api users
router.route('/api/users')
	.get(usersController.apiIndex)
	.post(usersController.create);
	
router.route('/api/users/:id')
	// Show User
	.get(usersController.show)
	.put(usersController.update);
	// .delete(usersController.delete);

//api
router.route('/api')
	.get(usersController.apiRoot);



module.exports = router;