var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./post');

var DestinationSchema = new Schema({
	name: {type: String, required: true},
	photoUrl: String,
	posts: [{ type: Schema.ObjectId, ref: "Post"}]
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;