var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/friendme');
console.log('connected');
var User = require('../models/user');


User.remove({}, function(err) {
	if(err) {
		console.log("ERROR ", err);
	}
});

var userList = [

				{
					firstName: "Luca",
					lastName: "Spezzano",
					email: "luca@93.com",
					photoUrl: "http://blogs.oregonstate.edu/jenniferblanger/files/2015/04/Elia-Locardi-Travel-Photography-Roman-Radiance-Rome-Italy-1440-WM-DM-60q.jpg",
					passwordDigest: "password",
				},
				{
					firstName: "Ivan",
					lastName: "Zich",
					email: "ivan@.com",
					photoUrl: "http://i2.cdn.turner.com/cnnnext/dam/assets/140324130329-croatia---veli-rat-horizontal-large-gallery.jpg",
					passwordDigest: "password",
				},
				{
					firstName: "Caleb",
					lastName: "Chen",
					email: "caleb@.com",
					photoUrl: "https://www.inqbation.com/wp-content/uploads/2012/06/6911733-san-francisco-night.jpg",
					passwordDigest: "password",
				}

];

User.create(userList, function(err, docs) {
	if(err) {
		console.log("ERROR ", err);
	} else {
		console.log("Created: ", docs);
		mongoose.connection.close();
	}
});