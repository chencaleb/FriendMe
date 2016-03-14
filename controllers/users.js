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
  	// console.log("ID***** ", id);
  	User.findById(id, function(err, user) {
  		if(err) returnError(err);
  		 res.render('./partials/show', {user: user});
  	});
  },

  create: function(req, res) {
  	var user = req.body;
  	console.log(user);

  	User.create(user, function(err, user) {
      console.log("ERROR", err);
	  	err ?
	  		// handle error
	  		res.status(500).send() :

	  		// console.log('created USER', user);
	  		res.status(201).json(user);
        // console.log("USER*****", user);
	  });
 },

//  	update: function(req, res) {
//  		var id = req.params.id;
//  		// console.log("ID ", id)
//  	  User.findById(id, function(err, user){
// 	    if (err) returnError(err);
// 	    if (req.body.first_name) user.first_name = req.body.first_name;
// 	    if (req.body.lastname) user.last_name = req.body.lastname;
// 	    if (req.body.email) user.email = req.body.email;
// 	    if (req.body.photo_url) user.photo_url = req.body.photo_url;
// 	    if (req.body.passwordDigest) user.passwordDigest = req.body.passwordDigest;

// 	    user.save(function(err, savedUser) {
// 	      if (err) {
// 	      	// returnError(err)
// 	      	console.log("ERROR ", err);
// 	      	res.status(200)
// 	      }
// 	      	res.json(savedUser)
// 	      	console.log('savedUser ', savedUser);
// 	    });
//   });
// },

//   delete: function(req, res) {
//     var id = req.params.id;
//     console.log("ID ", id)
//     User.findById(id, function(err, user) {
//       if(err) returnError(err);
//       console.log("USER", user);
//       user.remove(function() 
//   });
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
}

function returnError (err) {
  return console.log(err);
}


module.exports = usersController;
