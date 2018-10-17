var express = require('express');
var router = express.Router();
var regulator = require('./regulator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* post login */
router.post('/login',function(req,res,next){
  console.log("Inside login")
  regulator.login(req,res,next);
});

/* sign up user */
router.post('/signup',function(req,res,next){
  regulator.signup(req,res,next);
});

router.post('/forgotPassword',function(req,res,next){
  console.log("Inside index.js")
  regulator.forgotPassword(req,res,next);
});

router.post('/resetPassword/:token',function(req,res,next){
  console.log("Inside resetPassword in index.js");
  regulator.resetPassword(req,res,next);
});

router.post('/updateUserDetails',function(req,res,next){
  console.log("Inside updateUserDetails in index.js");
  regulator.updateUserDetails(req,res,next);
})

router.get('/getUserInfo',function(req,res,next){
  regulator.getUserInfo(req,res,next);
});

module.exports = router;