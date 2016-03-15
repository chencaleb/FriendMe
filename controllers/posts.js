var Post = require('../models/post');

var postsController = {


 apiPosts: function(req, res) {
 	  Post.find({}, function(err, posts) {
      res.status(200).send(JSON.stringify(posts));
    });
 }


}



module.exports = postsController;