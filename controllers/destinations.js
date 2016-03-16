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
  		if(err) returnError(err);
  		 res.render('./partials/eachdestinationshow', { destination: destination});
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