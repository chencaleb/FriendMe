var user = {};

user.createUser = function(e) {
	e.preventDefault();
	var newUser = $(e.target).serialize();
  	console.log(newUser);
  	$.post("/api/users", newUser)
    .done(function(req, res) {
     debugger;
     var id = req._id;
     console.log('create user was successful!', id);
  	 window.location.href = '/api/users/' + id;
  })
    .fail(function(err) {
      console.log("Error", err);
    });  
};

user.loginUser = function(e) {
	e.preventDefault();
	var user = $(e.target).serialize();
  	$.post("/sessions", user)
    .done(function(req, res) {
  	 window.location.href = '/destinations';
  })
    .fail(function(err) {
      console.log("Error", err);
    });  
};

user.deleteUser = function(e) {
  var id = $(e.target).parent().attr("id");
  var ajaxOption = {
    url: '/api/users/' + id,
    type: "DELETE",
    success: function(result) {
      $("#" + id).remove();
      window.location.href = '/';
    }
  };
  $.ajax(ajaxOption);
};

user.editUser = function(e) {
  var id = $('#userID').val();
  // console.log(id);
  var updateData = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    email: $('#editEmail').val()
  };
  var ajaxOption = {
    url: '/api/users/' + id,
    type: "PUT",
    data: updateData,
    success: function(result) {
      $('#displayFirstName').html(updateData.firstName);
      $('#displayLastName').html(updateData.lastName);
      $('#displayEmail').html(updateData.email);
    }
  };
  $.ajax(ajaxOption);
};

user.renderUser = function(user) {
  var showUser = user;
  var $profilePage = $('#profile-page');
  $profilePage.html("");
  var userTemplate = Handlebars.compile($('#user-template').html());
  var compiledHTML = userTemplate({user: showUser});
  $profilePage.append(compiledHTML);
};


//USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
$('#signupModal').on('click', function() {
    $('#triggerModal').modal();
});

$('#modalLoginButton').on('click', function() {
    $('#triggerModalLogin').modal();
});

$('#editModal').on('click', function() {
  $('#triggerEditModal').modal();
});