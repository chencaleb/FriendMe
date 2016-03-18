var mongoose = require('mongoose');
var conn = mongoose.connect(process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/friendme');
console.log('connected');
var Destination = require('../models/destination');


Destination.remove({}, function(err) {
	if(err) {
		console.log("ERROR ", err);
	}
});

var destinationList = [
				{
					name: "London",
					photoUrl: "http://altitudeacquisitions.co.uk/wp-content/uploads/2014/08/london.jpg",
					posts: []
				},
				{
					name: "Paris",
					photoUrl: "https://www.cpp.edu/~international/study-abroad/img/jXMx4mQz6MsnhP1FSKp2TJMt.jpeg",
					posts: []
				},
				{
					name: "Rome",
					photoUrl: "http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Rome/colosseum-rome-large.jpg",
					posts: []
				},
				{
					name: "Rome",
					photoUrl: "http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Rome/colosseum-rome-large.jpg",
					posts: []
				}

];

Destination.create(destinationList, function(err, docs) {
	if(err) {
		console.log("ERROR ", err);
	} else {
		console.log("Created: ", docs);
		mongoose.connection.close();
	}
});