var Destination = require('../models/destination');

var destinationsController = {


	 index: function(req, res) {
  	Destination.find({}, function(err, destinations) {
  		if(err) returnError(err);
  		 res.render('./partials/destinationsindex', { destinations: destinations});
  	});
  },

  show: function(req, res) {
    console.log("******HERE*****")
  	var id = req.params.id;
  	Destination.findById(id, function(err, destination) {
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

function returnError (err) {
    return console.log(err);
  }



module.exports = destinationsController;