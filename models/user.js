var mongoose = require('mongoose');
<<<<<<< HEAD
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

=======

module.exports = mongoose.model('User',{
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  }
});
>>>>>>> 8b6c35a5968ec3fbc82bab018ed1fc53d5bb46b8
