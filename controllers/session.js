var User = require('../models/user');

var sessionController = {

  display: function(req, res){
    if (req.user) {
      res.send('user');
    }
    else {
      res.send(null);
    }
  }

};


module.exports = sessionController;
