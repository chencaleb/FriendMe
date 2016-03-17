var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Post = require('./post');
var PostSchema = require('../models/post');


var DestinationSchema = new Schema({
	name: {type: String, required: true},
	photoUrl: String,
	// postsList: [PostSchema]
	// posts: [{ type: Schema.ObjectId, ref: "Post"}]
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;