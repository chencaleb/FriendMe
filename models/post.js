var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Destination = require('./destination');
var User = require('./user');

var PostSchema = new Schema({
	description: String,
	interests: String,
	email: String,
	photoUrl: String,
	users: [{ type: Schema.ObjectId, ref: "User"}],
	destinations: [{ type: Schema.ObjectId, ref: "Destination"}]
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;