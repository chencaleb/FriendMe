var Destination = require('../models/destination');

var destinationsController = {


	 index: function(req, res) {
  	Destination.find({}, function(err, destinations) {
  		if(err) returnError(err);
  		 res.render('./partials/destinationsindex', { destinations: destinations});
  	});
  },

  show: function(req, res) {
  	var id = req.params.id;
  	Destination.findById(id, function(err, destination) {
      console.log("here are all the destinations:", destination);
      // iterate through the destination.posts then use find on each post find in a lump
      // posts.push(post)
  		if(err) returnError(err);
  		 res.render('./partials/eachdestinationshow', { destination: destination}); // <- pass the whole posts into here ex: posts:posts
  	});
  },

	 apiDestinations: function(req, res) {
	     Destination.find({}, function(err, destinations) {
	     	console.log(destinations);
	     	err ?
	     	res.status(500).send() :
	      res.status(200).send(JSON.stringify(destinations));
	    });
	 },


}



module.exports = destinationsController;