$(document).ready(function() {

  $('#fullpage').fullpage();

  var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
  
  $("#toggleEditBtn").click(function() {
    $("#editForm").toggle();
  });

  $('#modalButtonLogin').hide();
  $('#modalButtonLogout').hide();
  user.displaySession();

var password = document.getElementById("passwordDigest"),
    confirm_password = document.getElementById("signupPassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;

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
    console.log('USER', showUser)
  $profilePage.append(compiledHTML);
};

///////POST/////////
post.createPost = function(e) {
  e.preventDefault();
  var id = $('#destinationID').val();
    console.log('Destination ID', id)
  var newPost = $(e.target).serialize();
      console.log("NEWPOST", newPost)
  $.post('/api/destinations/' + id, newPost)
    .done(function(res) {
     window.location.href = '/api/destinations/' + id;
  })
    .fail(function(err) {
      console.log("Error", err);
    });  
};

post.editPost = function(e) {
  e.preventDefault();
  var id = $('#postID').val();
  console.log("asdafdasa", id);
  var destId = $('#editDestinationId').val();
  console.log("destId", destId);
  var updateData = {
    email: $('#email').val(),
    description: $('#description').val()
  };

  var ajaxOption = {
    url: '/api/destinations/' + destId + '/posts/' + id,
    type: "PUT",
    dataType: 'json',
    data: updateData,
    success: function(res) {
      console.log("UPDATED DATA", updateData);
      console.log(res);
      $('#postDescription').html(updateData.description);
      $('#editForm').hide();
      // $('savedPost').html(response);
      // $('#postEmail').html(updateData.email)
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
    url: '/api/destinations/' + destination._id + '/posts/' + id,
    type: "DELETE",
    success: function(result) {
      console.log('DELETED');
      $("#" + id).remove();
      window.location.href = '/api/destinations/' + destination._id;
    }
  };
  $.ajax(ajaxOption);
};

user.displaySession = function(){
    $.get('/display', function(user){
      console.log(user);
      if (user === "") {
        console.log('no user');
        $('#modalButtonLogin').show();
        $('#modalButtonLogout').hide();
      }
      else {
        console.log('user present');
        //show logged in version of nav
        $('#modalButtonLogout').show();
        $('#modalButtonLogin').hide();
      }
    });
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
