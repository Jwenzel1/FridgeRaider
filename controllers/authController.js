var passport = require('passport');
var Account = require('../models/account');

module.exports = {
  register: function(req, res){
    req.body.username = req.params.username; //USE REQ.BODY AND NOT REQ.PARAMS CUS REGISTER LOOKS AT REQ.BODY
    req.body.password = req.params.password;
    console.log(req.body);
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log("OH GOD AN ERROR");
        console.log(err);
      }
      passport.authenticate('local')(req, res, function () {
        console.log("If cuking worked");

      //THIS WILL CHANGE TO PROFILE INFO AFTER REACT COMPONENETS ARE DONE
        res.redirect('/');
      });
    });
  },

  authCheck: function(req, res){
    res.json({
      auth: req.isAuthenticated(),
      user: req.user
    });
  },


  authLogin: function(req, res){
      res.json({User: req.user.username});
    // passport.authenticate('local', function (err, user) {
    //   console.log("In Auth");
    //   if (err) {
    //     console.log("HOLY SHIT SOMETHING HORRIBLE OCCURRED.");
    //     res.json({message: "rofl"});
    //   }
    //   if (!user) {
    //     console.log("Wrong uname or pword");
    //     res.json({message: "Wrong uname or pword"})
    //   }
    //   console.log("Before Log In");
    //   req.logIn(user, function () {
    //     console.log(`${user} is logged in`);
    //     res.json({ user: user });
    //   });
    //   console.log("After Log In");
    // });

    // });
  },

  authLogout: function(req, res){
      req.logout();
      res.redirect('/');
  }

}
