const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', 
  passport.authenticate('google', {failureRedirect: "/login", session: true }), //, {failureRedirect: "/", session: false }
  (req,res) => {
    console.log('authRoutes.js /auth/google/callback', req.user)
    res.redirect('/');
  }
);      

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/", session: false }),
//   function(req, res) {
//       var token = req.user.token;
//       res.redirect("http://localhost:3000?token=" + token);
//   }
// );