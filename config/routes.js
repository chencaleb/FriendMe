
var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	path = require('path'),
	logger = require('morgan');

var	router = express.Router();

mongoose.connect('mongodb://localhost/friendme');

router.get('/', function(req, res) {
	res.send("Welcome to FriendMe");
});










module.exports = router;