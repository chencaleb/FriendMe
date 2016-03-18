var Post = require('../models/post');
var Destination = require('../models/destination');

var postsController = {

 	apiPosts: function(req, res) {
 	  Post.find({}, function(err, posts) {
      res.status(200).send(JSON.stringify(posts));
    });
  },

  index: function(req, res) {
    Post.find({}, function(err, posts) {
    res.render('./partials/allposts', {posts: posts});
    });
  },

  new: function(req,res) {
    var id = req.params.id;
      Destination.findOne({_id: id}, function(err, destination){ 
    	res.render('./partials/newpost', {destination: destination});
      });
  },

  create: function(req, res) {
  	var post =  {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      name: req.body.name,
      description: req.body.description,
      photoUrl: req.body.photoUrl
    };

    var id = req.body.destinationID;
    console.log("createPost ", id);
    console.log("SerializedDATA", req.body);
  	Post.create(post, function(err, createdPost) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        Destination.findById({_id: id}, function(err, destination){ 
          destination.posts.push(createdPost); 
          destination.save(function(err, result) {
            if(err) {
              console.log("***** error", err);
            }
             Destination.findOne({_id: id}, function(err, destination){ 
              if(err) {
                console.log("error", err);
              } else {
               res.render('./partials/eachdestinationshow', {destination: destination});
               // res.send(destination);
               // res.redirect('./partials/eachdestinationshow', {destination: destination});
              }
            });
          });
        });
      }
    });
  },

 	show: function(req, res) {
  	var id = req.params.id;
    var destId = req.params.destination_id;
  	Post.findById(id, function(err, post) {
  		if(err) {
        returnError(err); 
      } else {
        Destination.findOne({_id: destId}, function(err, destination){ 
        res.render('./partials/postshow', {postJS: JSON.stringify(post), post: post, destination: destination});
      
      });
  	}
  });
// =======
//       console.log('POST ****', post)
//   		if(err) returnError(err); 
//        res.render('./partials/postshow', {postJS: JSON.stringify(post), post: post});
//   	});
// >>>>>>> Stashed changes
  },

 	update: function(req, res) {
		var id = req.params.id;
    var destId = req.params.destination_id;
		console.log(destId);
	  Post.findById(id, function(err, post){
	  	(console.log("POST", post));
    if (err) returnError(err);
    if (req.body.name) post.name = req.body.name;
    if (req.body.email) post.email = req.body.email;
	  if (req.body.description) post.description = req.body.description;
    if (req.body.photoUrl) post.photoUrl = req.body.photoUrl;
    if (req.body.startDate) post.startDate = req.body.startDate;
    if (req.body.endDate) post.endDate = req.body.endDate;
	  post.save(function(err, savedPost) {
      if(err) {
        res.status(200);
      } else {
        console.log("destination:", destId);
        console.log("updatedPost:", savedPost);        
        Destination.findOne({_id: destId}, function(err, destination){
          // for(var i = 0; i < destination.posts.length; i++){
          //   console.log("current iterator for destination posts", i, destination.posts[i]._id, post._id, savedPost._id);
          //   if(destination.posts[i]._id == post._id) {
          //     console.log("hi daniel i was hit", destination.posts[i]);
          //     destination.posts[i] = savedPost;
          //   }
          // }
          // destination.save();
          res.send(destination);
        });
      }
	  });
	});
},

   destroy: function(req, res) {
    Post.remove({_id: req.params.id}, function(err, post) {
      console.log('REMOVED', post);
      err ? 
        res.status(500).send() :
        res.status(204).send(JSON.stringify(post));
      });
  }
};

function returnError (err) {
  return console.log(err);
}


module.exports = postsController;