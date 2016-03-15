var User = require('../models/user');

var usersController = {

  index: function(req, res) {
     User.find({}, function(err, users) {
     	if(err) returnError(err);
      res.status(200).send(JSON.stringify(users));
    });
  },

  show: function(req, res) {
  	var id = req.params.id;
  	User.findById(id, function(err, user) {
  		if(err) returnError(err);
  		 res.render('./partials/show', {userJS: JSON.stringify(user), user: user});
  	});
  },

  create: function(req, res) {
  	var user = req.body;
    console.log(req.body);
  	User.create(user, function(err, user) {
	  	err ?
	  		res.status(500).send() :
	  		res.status(201).send(JSON.stringify(user));
	  });
 },

  destroy: function(req, res) {

    User.remove({_id: req.params.id}, function(err, user) {
      console.log(req.params.id);
      err ? 
        res.status(500).send() :
        res.status(204).send(JSON.stringify(user));
      });
  },

 	update: function(req, res) {
 		var id = req.params.id;
 	  User.findById(id, function(err, user){
	    if (err) returnError(err);
	    if (req.body.firstName) user.firstName = req.body.firstName;
	    if (req.body.lastName) user.lastName = req.body.lastName;
	    if (req.body.email) user.email = req.body.email;
	    if (req.body.photoUrl) user.photoUrl = req.body.photoUrl;
	    if (req.body.passwordDigest) user.passwordDigest = req.body.passwordDigest;

	    user.save(function(err, savedUser) {
	      err ? 
	      	res.status(200) :
	      	res.json(savedUser)
      });
    });
},

// },

 apiIndex: function(req, res) {
 	  User.find({}, function(err, users) {
      res.status(200).send(JSON.stringify(users));
    });
 },

 apiRoot: function(req, res) {
    res.json({
      message: "Welcome to FriendMe!",
      documentation_url: "www.friendMe.com",
      base_url: "http://friendMe.herokuapp.com",
      endpoints: [
        {method: "GET", path: "/api", description: "Describes available endpoints"}
        // {method: "GET", path: "/api/users", description: "Shows all users"},
        // {method: "GET", path: "/api/users/:id", description: "Shows specified user"}
      ]
    });
  }
};

function returnError (err) {
  return console.log(err);
}


module.exports = usersController;
