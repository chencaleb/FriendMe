var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	email: {type: String, required: true},
	photo_url: String,
	passwordDigest: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

