var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./post');

var UserSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String},
	photoUrl: String,
	passwordDigest: {type: String, required: true},
	posts:[{ type: Schema.ObjectId, ref: "Post"}]
});



var User = mongoose.model('User', UserSchema);
module.exports = User;
