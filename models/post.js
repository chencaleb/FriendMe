var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var User = require('./user');

var PostSchema = new Schema({
	// users: [{ type: Schema.ObjectId, ref: "User"}],
	interests: String,
	description: String,
	// email: {type:String, required: true},
	// photoUrl: String,
	// destinations: [{ type: Schema.ObjectId, ref: "Destination"}]
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;