//client-side logic
console.log('testing');

var user = {};

// post method
user.createUser = function(e) {
	e.preventDefault();
	var newUser = $(e.target).serialize();
		// console.log('NEW USER ', newUser);
  $.post("/api/users", newUser)
    .done(function(res) {
     // console.log('RESS', res);
     var userId = res._id;
  	 window.location.href = '/api/users/' + userId;
     // console.log('/api/users/' + res._id);
    // user.renderUser(res);

  })
    .fail(function(err) {
      console.log("Error", err);
    })
   
}

// user.renderUser = function(user) {
// 	var user = JSON.parse(user);
//     console.log("USER****** ", user);
//   var $profilePage = $('#profile-page');
//   var profileTemplate = Handlebars.complile($('#profile-template').html());
//     console.log("TEMPLATE", $('#profile-template'));
//     pass the data into the template
//   var compiledHTML = profileTemplate(user);
//     console.log("USER", user);
//   $profilePage.append(compiledHTML);

// }


$('#modalButton').on('click', function() {
    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModal').modal();

});

$('#modalButtonLogin').on('click', function() {

    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModalLogin').modal();
   
});