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

//index page
router.get('/', function(req, res) {
	res.render("./partials/welcome");
});


router.route('/api/users')
	.get(usersController.apiUsersIndex);

// router.route('/api/users/:id')
// 	.get((usersController.apiUser);

router.route('/api')
	.get(usersController.apiRoot);









module.exports = router;