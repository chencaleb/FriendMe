$(document).ready(function() {

var user = {};

//post method
user.createUser = function(e) {
$('#saveUser').on('click', function(e){
    e.preventDefault();
	var newUser = $(e.target).serialize();
	$.post('/users', newUser)
		console.log('CREATED USER ', newUser);
	
}












});
$('#modalButton').on('click', function() {

    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModal').modal();
   


});

$('#modalButtonLogin').on('click', function() {

    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModalLogin').modal();
   


});