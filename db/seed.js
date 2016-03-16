var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/friendme');
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
                    name: "San Francisco",
                    photoUrl: "http://www.mainstreeteconomists.com/wp-content/uploads/2015/12/San-Francisco-Skyline-1.jpg",
                    posts: []
                },
                {
                    name: "Berlin",
                    photoUrl: "http://static1.squarespace.com/static/558c4ea0e4b04cda07204377/t/55a96f01e4b0a996cf2e1e1b/1437167395979/Berlin2.jpg?format=1500w",
                    posts: []
                },
                {
                    name: "Budapest",
                    photoUrl: "http://www.mainstreeteconomists.com/wp-content/uploads/2015/12/San-Francisco-Skyline-1.jpg",
                    posts: []
                },
                {
                    name: "Barcellona",
                    photoUrl: "http://www.bioecogeo.com/wp-content/uploads/2016/01/bioecogeo_barcellona.jpg",
                    posts: []
                },
                {
                    name: "Bruxelles",
                    photoUrl: "http://images.opt.be/images/elto_big/17194_1.jpg",
                    posts: []
                },
                {
                    name: "Dublin",
                    photoUrl: "http://us.adforce.com/wp-content/uploads/2015/11/dublin.jpg",
                    posts: []
                },

];

Destination.create(destinationList, function(err, docs) {
    if(err) {
        console.log("ERROR ", err);
    } else {
        console.log("Created: ", docs);
        mongoose.connection.close();
    }
});