var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = require('./post').schema;

var DestinationSchema = new Schema({
	name:  String,
	photoUrl: String,
	posts: [PostSchema]
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;