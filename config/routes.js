var express 			   = require('express'),
	app 				   = express(),
	mongoose 			   = require('mongoose'),
	bodyParser 			   = require('body-parser'),
	methodOverride 		   = require('method-override'),
	path 				   = require('path'),
	logger 				   = require('morgan'),
	expressSession 		   = require('express-session'),
	cookieParser   		   = require("cookie-parser"),
	postsController 	   = require('../controllers/posts'),
	destinationsController = require('../controllers/destinations'),
	usersController 	   = require('../controllers/users'),
	sessionController	   = require('../controllers/session'),
	router 				   = express.Router();

mongoose.connect(process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/friendme');

/*
 * HTML Endpoints
 */
 
//welcome Page
router.route('/').get(function(req, res){
  res.render('welcome', {user: req.user});
});

/*
 * JSON API Endpoints
 */

router.route('/api')
	.get(usersController.apiRoot);

/*
 * HTML Endpoints
 */

	///////// USER/////////
router.route('/api/users')
	.get(usersController.apiIndex)
	.post(usersController.create);
	
router.route('/api/users/:id')
	.get(usersController.show)
	.delete(usersController.destroy)
	.put(usersController.update);

	///////// POST/////////
router.route('/api/posts')
	// .get(postsController.apiPosts)
	.get(postsController.index)
	.post(postsController.create);

router.route('/api/posts/new')
	.get(postsController.new);
	
router.route('/api/posts/:id')
	.get(postsController.show)
	.put(postsController.update)
	.delete(postsController.destroy);
	

	///////// DESTINATION /////////
router.route('/destinations')
	.get(destinationsController.index);

router.route('/api/destinations')
	.get(destinationsController.apiDestinations);


router.route('/api/destinations/:id')
	.get(destinationsController.show);

//session routes
router.route('/sessions')
 	.post(usersController.loginUser)
 	.get(usersController.logoutUser);

 //authorize login/logout
 router.route('/display')
 	.get(sessionController.display);

module.exports = router;