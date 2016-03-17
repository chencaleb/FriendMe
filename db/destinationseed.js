var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/friendme');
console.log('connected');
var Destination = require('../models/destination');
var Post = require('../models/post');
var User = require('../models/user');

Destination.remove({}, function(err) {
    if(err) {
        console.log("ERROR ", err);
    }
});

var destinationList = [
                	{
                    name: "London",
                    photoUrl: "http://altitudeacquisitions.co.uk/wp-content/uploads/2014/08/london.jpg",
                    // postsList: [
                    // 	{
                    // 		interests: "Hiking, eating, 	drinking, yoga",
                    // 		description: "Travel, surprises, music, dancing, sports, books, last minute plans, open mind, photography, museum, craziness, spontaneity, going out (but also staying in), sharing, simplicity, respect, flip flops (yes, the sandals), down to earth (however fantasy is also very important), people, casual, word, news, work, sense of humor about yourself, awareness."
                    // 	},
                    // 	{
                    		
                    // 		interests: "Volleyball, eating, coffee, dancing",
                    // 		description: "On a typical Friday night I am: Trying to figure out the major and minor products when 1-bromo-2-propene reacts with potassium tert-butoxide. Either that or partying like a rock star.The most private thing I am willing to admit: I wear a special cologne. It’s called Sex Panther by Odeon. It’s illegal in nine countries…and it’s made with bits of real panther, so you know it’s good."
                    // 	},
                    // 	{
                    		
                    // 		interests: "Outdoors, gaming, beer, volleyball",
                    // 		description: "If you’d like to know more Say “hi”. I didn’t reveAl a lot about my Self for you to read on purpose. Rather we chat, talk, engage in conversation to get to know each other instead of us reading through a long page in this section about each other. Also, just because someone lookS like a good match “on paper”, doesn’t necessarilY translate in reality.Note: The bold letters are an anagram message."
                    // 	}
                    // ]
                },
                {
                    name: "Paris",
                    photoUrl: "https://www.cpp.edu/~international/study-abroad/img/jXMx4mQz6MsnhP1FSKp2TJMt.jpeg",
                   
                },
                {
                    name: "Rome",
                    photoUrl: "http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Rome/colosseum-rome-large.jpg",
                    
                },
                {
                    name: "San Francisco",
                    photoUrl: "http://www.mainstreeteconomists.com/wp-content/uploads/2015/12/San-Francisco-Skyline-1.jpg",
                    
                },
                {
                    name: "Berlin",
                    photoUrl: "http://static1.squarespace.com/static/558c4ea0e4b04cda07204377/t/55a96f01e4b0a996cf2e1e1b/1437167395979/Berlin2.jpg?format=1500w",
                    
                },
                {
                    name: "Budapest",
                    photoUrl: "http://www.mainstreeteconomists.com/wp-content/uploads/2015/12/San-Francisco-Skyline-1.jpg",
                    
                },
                {
                    name: "Barcellona",
                    photoUrl: "http://www.bioecogeo.com/wp-content/uploads/2016/01/bioecogeo_barcellona.jpg",
                    
                },
                {
                    name: "Bruxelles",
                    photoUrl: "http://images.opt.be/images/elto_big/17194_1.jpg",
                    
                },
                {
                    name: "Dublin",
                    photoUrl: "http://us.adforce.com/wp-content/uploads/2015/11/dublin.jpg",
                    
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