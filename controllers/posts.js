var Post = require('../models/post');

var postsController = {

 	apiPosts: function(req, res) {
 	  Post.find({}, function(err, posts) {
      res.status(200).send(JSON.stringify(posts));
    });
 	},

	index: function(req, res) {
    Post.find({}, function(err, posts) {
     res.render('./partials/posts', {posts: posts});
    });
  },

  new: function(req,res) {
  	res.render('./partials/postnew')
  },

  create: function(req, res) {
  	var post = req.body;
  	Post.create(post, function(err, post) {
	  	err ?
	  		res.status(500).send() :
	  		res.status(201).send(JSON.stringify(post));
	  });
 	}



}



module.exports = postsController;