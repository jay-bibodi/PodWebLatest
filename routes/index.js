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

module.exports = router;