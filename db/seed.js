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
                    posts: [
                        {name: "Mary Shelley",
                         email: "maryshelley@gmail.com",
                         description: "I thought I would throw some keywords that would describe what I like to do. If you recognize yourself in some of them, I think it might be worth taking the time to keep on reading my profile. If you don’t keep on reading, I swear I won’t be upset with you. I will never know anyway :-)",
                         startDate: "March 17, 2016",
                         endDate: "March 21, 2016",
                         createdAt: "March 17, 2016" 
                        },
                        {name: "Travis Narley",
                         email: "tnarles@gmail.com",
                         description: "Travel, surprises, music, dancing, sports, books, last minute plans, open mind, photography, museum, craziness, spontaneity, going out (but also staying in), sharing, simplicity, respect, flip flops (yes, the sandals), down to earth (however fantasy is also very important), people, casual, word, news, work, sense of humor about yourself, awareness.",
                         startDate: "April 6, 2016",
                         endDate: "April 8, 2016",
                         createdAt: "April 5, 2016" 
                        },

                    ]
                },
                {
                    name: "Paris",
                    photoUrl: "https://www.cpp.edu/~international/study-abroad/img/jXMx4mQz6MsnhP1FSKp2TJMt.jpeg",
                    posts: [
                        {name: "Roarly Sand",
                         email: "Sandy@gmail.com",
                         description: "Lingering over pain au chocolat in a sidewalk café, relaxing after a day of strolling along the Seine and marveling at icons like the Eiffel Tower and the Arc de Triomphe… the perfect Paris experience combines leisure and liveliness with enough time to savor both an exquisite meal and exhibits at the Louvre. Awaken your spirit at Notre Dame, bargain hunt at the Marché aux Puces de Montreuil or for goodies at the Marché Biologique Raspail, then cap it all off with a risqué show at the Moulin Rouge. HAVE COFFEE WITH ME",
                         startDate: "July 6, 2016",
                         endDate: "July 10, 2016",
                         createdAt: "July 6, 2016" 
                        },



                    ]
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