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
  var id = $('#userID').val()
  // console.log(id);
  var updateData = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    email: $('#editEmail').val(),
    firstName: $('#firstName').val(),
    photoUrl: $('#photoUrl').val(),
  }
  var ajaxOption = {
    url: '/api/users/' + id,
    type: "PUT",
    data: updateData,
    success: function(result) {
      $('#displayFirstName').html(updateData.firstName)
      $('#displayLastName').html(updateData.lastName)
      $('#displayEmail').html(updateData.email)
      $('#headerFirstName').html(updateData.firstName)
      $('#displayPhotoUrl').html(updateData.photoUrl)
    }
  };
  $.ajax(ajaxOption);
};

$('#updateUser').keypress(function(event) {
  if (event.which === 13) {
    console.log("ENTER");
  }
});

user.renderUser = function(user) {
  var showUser = user;
  var $profilePage = $('#profile_page');
  $profilePage.html("");
  var userTemplate = Handlebars.compile($('#user-template').html());
  var compiledHTML = userTemplate({user: showUser});
  $profilePage.append(compiledHTML);
};

uploadcare.openDialog().done(function(file) {
  file.promise().done(function(fileInfo){
    console.log(fileInfo.cdnUrl);
  });
});

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


