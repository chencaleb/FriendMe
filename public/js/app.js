var user = {};

// post method
user.createUser = function(e) {
	e.preventDefault();
	var newUser = $(e.target).serialize();
  	console.log(newUser);
  	$.post("/api/users", newUser)
    .done(function(res) {
     var id = JSON.parse(res)._id;
  	 window.location.href = '/api/users/' + id;
  })
    .fail(function(err) {
      console.log("Error", err);
    });  
};

user.loginUser = function(e) {
	console.log("yay")
	e.preventDefault();
	var newUser = $(e.target).serialize();
	console.log("newUser is " + newUser);
  	$.post("/sessions", newUser)
    .done(function(req, res) {
    console.log("user logged in");
    //  var id = req.body._id;
    //  console.log(id);
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
  var id = $(e.target).parent().attr("id");
  var ajaxOption = {
    url: '/api/users/' + id,
    type: "PUT",
    success: function(result) {
      console.log("success");
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


$('#modalButton').on('click', function() {
    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModal').modal();
});

$('#modalButtonLogin').on('click', function() {
    //USES BOOTSTRAP/jQUERY TO OPEN THE MODAL
    $('#triggerModalLogin').modal();
});

$('#modalEditUser').on('click', function() {
  $('#triggerEditModal').modal();
});