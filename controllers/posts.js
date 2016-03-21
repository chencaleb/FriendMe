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
      console.log('IN CREATE FUNCTION')
  	var post =  {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      name: req.body.name,
      description: req.body.description,
      photoUrl: req.body.photoUrl
    };

    var id = req.body.destinationID;
      console.log("createPost ", id);
      console.log("SerializedDATA".bgYellow, req.body);
  	Post.create(post, function(err, createdPost) {
      if (err) {
        console.log("ERROR", err);
        res.status(500).send();
      } else {
          Destination.findOne({_id: id}, function(err, destination){ 
                console.log("ERROR", err);
                console.log("Created Post".bgMagenta, createdPost);
              destination.posts.push(createdPost); 
                console.log("Destination".bgMagenta, destination);
            destination.save(function(err, destination) {
              if(err){
                console.log("ERROR".bgRed, err);
              } else {
              console.log("post saved".bgBlue, destination);
              res.send(destination);
              }
            });
          });
	      }
      });
 	  },

  // show: function(req, res) {
  //   var id = req.params.id;
  //   var destId = req.params.destination_id;
  //   Destination.find({'_id': destId , 'posts._id': id}, function(err, destination) {
  //       console.log(err);
  //       console.log(' destination '.green, destination);
  //       destination.posts.find({'_id': id}, function(err, post) {
  //         console.log(' destination.post '.blue, post);
  //       })
  //     if(err) {
  //       returnError(err); 
  //     } else {
  //       res.render('./partials/postshow', {postJS: JSON.stringify(destination.posts), post: post, destination: destination});
  //     }
  //   });
  // },

 	show: function(req, res) {
  	var id = req.params.id;
    var destId = req.params.destination_id;
  	Post.findById(id, function(err, post) {
        console.log(err);
        console.log(' POST ', post);
  		if(err) {
        returnError(err); 
      } else {
        Destination.findOne({_id: destId}, function(err, destination){ 
        res.render('./partials/postshow', {postJS: JSON.stringify(post), post: post, destination: destination});
        });
  	 }
  });
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
    // Destination.update({_id: destId, "posts._id": id },
    //  {'$set': { "posts.$.description" : req.body.description } }, 
    //   function(err, updatedPost) {
    //     if(err) {
    //       console.log("ERROR".bgRed, err);
    //     } else {
    //       console.log("UPDATED POSt".bgYellow, updatedPost);
    //       res.send(updatedPost);
    //     }
    // });
     Destination.findOne({_id: destId}, function(err, destination){
        destination.posts.forEach(function(post) {
            console.log("POST ID".green, post._id);
          if (post._id == id) {
            console.log('req.body.description ', req.body.description)
            post.description = req.body.description;
            post.name = req.body.name;
            post.email = req.body.email;
            post.startDate = req.body.startDate;
            post.endDate = req.body.endDate;
          }
        });
            console.log('post ** **', destination.posts);
          destination.save(function(err, destination){
            Post.findOne({_id: id}, function(err, post) {
              post.description = req.body.description;
              post.name = req.body.name;
              post.email = req.body.email;
              post.startDate = req.body.startDate;
              post.endDate = req.body.endDate;
                post.save(function(err, post) { 
                  if (err) {
                    console.log("ERROR".bgRed, err);
                  } else {
                    res.send(post);
                  }
              });
            });
          });

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