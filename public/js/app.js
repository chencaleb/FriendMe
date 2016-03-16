$(document).ready(function() {
  $("#toggleEditBtn").click(function() {
    $("#editForm").toggle();
  });
});

  var user = {};
  var destination = {};
  var post = {};

user.createUser = function(e) {
	e.preventDefault();
	var newUser = $(e.target).serialize();
  	console.log(newUser);
  	$.post("/api/users", newUser)
    .done(function(req, res) {
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
    email: $('#editEmail').val(),
  };

  var ajaxOption = {
    url: '/api/users/' + id,
    type: "PUT",
    data: updateData,
    success: function(result) {
      $('#displayFirstName').html(updateData.firstName);
      $('#displayLastName').html(updateData.lastName);
      $('#displayEmail').html(updateData.email);
      $('#headerFirstName').html(updateData.firstName);
    }
  };
  $.ajax(ajaxOption);
};


user.renderUser = function(user) {
  var showUser = user;
  var $profilePage = $('#profile_page');
  $profilePage.html("");
  var userTemplate = Handlebars.compile($('#user-template').html());
  var compiledHTML = userTemplate({user: showUser});
  $profilePage.append(compiledHTML);
};

///////POST/////////
post.createPost = function(e) {
  console.log("clicked");

  e.preventDefault();
  var newPost = $(e.target).serialize();
  console.log(newPost);
  $.post("/api/posts", newPost)
    .done(function(res) {
     var id = JSON.parse(res)._id;
     window.location.href = '/api/posts/';
  })
    .fail(function(err) {
      console.log("Error", err);
    });  
};

post.editPost = function(e) {
  e.preventDefault();
  var id = $('#postID').val();

  console.log(id);

  var updateData = {
    interests: $('#interests').val(),
    // email: $('#email').val(),
    description: $('#description').val(),
  };

  var ajaxOption = {
    url: '/api/posts/' + id,
    type: "PUT",
    dataType: 'json',
    data: updateData,
    success: function(res) {
      console.log("UPDATED DATA", updateData);
      // $('savedPost').html(response);
      $('#postInterests').html(updateData.interests);
      // $('#postEmail').html(updateData.email)
      $('#postDescription').html(updateData.description);
      $('#editForm').hide();
      // $('#displayPhotoUrl').html(updateData.photoUrl)
    }
  };
  $.ajax(ajaxOption);
};

post.renderPost = function(post) {
  var showPost = post;
  var $postPage = $('#post_page');
  $postPage.html("");
  var postTemplate = Handlebars.compile($('#post-template').html());
  var postHTML = postTemplate({post: showPost});
  $postPage.append(postHTML);
};

post.deletePost = function(e) {
  var id = $(e.target).parent().attr("id");
  console.log('delete', id);
  var ajaxOption = {
    url: '/api/posts/' + id,
    type: "DELETE",
    success: function(result) {
      console.log('DELETED');
      $("#" + id).remove();
      window.location.href = '/api/posts';
    }
  };
  $.ajax(ajaxOption);
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
