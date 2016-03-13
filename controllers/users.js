var User = require('../models/user');

var usersController = {

  userIndex: function(req, res) {
    User.find({}, function(err, users) {
      res.render('layout');
    });
  },

  



  apiUsersIndex: function(req, res) {
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

module.exports = usersController;

