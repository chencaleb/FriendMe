var Destination = require('../models/destination');
console.log("HI");

var destinationsController = {


	 index: function(req, res) {
  	Destination.find({}, function(err, destinations) {
  		if(err) returnError(err);
  		 res.render('./partials/destinationsshow', { destinations: destinations});
  	});
  },

  //   show: function(req, res) {
  // 	var id = req.params.id;
  // 	Destination.findById(id, function(err, destination) {
  // 		if(err) returnError(err);
  // 		 res.render('./partials/show', { destination: destination});
  // 	});
  // },

	 destinationIndex: function(req, res) {
	     Destination.find({}, function(err, destinations) {
	     	console.log(destinations);
	     	err ?
	     	res.status(500).send() :
	      res.status(200).send(JSON.stringify(destinations));
	    });
	 },


}



module.exports = destinationsController;