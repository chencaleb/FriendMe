var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	photoUrl: String,
	passwordDigest: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;