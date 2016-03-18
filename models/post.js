var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	name: String,
	email: String,
	description: String,
	photoUrl: String,
	startDate: { type: Date, required: false, default: Date.now },
	endDate: { type: Date, required: false, default: Date.now },
	createdAt: { type: Date, required: false, default: Date.now }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;