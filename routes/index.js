var express = require('express');
var router = express.Router();
var regulator = require('./regulator');
//var purchaseToken = require('./purchaseToken');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',function(req,res,next){
  regulator.login(req,res,next);
});

router.post('/signup',function(req,res,next){
  regulator.signup(req,res,next);
});

router.post('/forgotPassword',function(req,res,next){
  regulator.forgotPassword(req,res,next);
});

router.post('/resetPassword/:token',function(req,res,next){
  regulator.resetPassword(req,res,next);
});

router.post('/updateUserDetails',function(req,res,next){
  regulator.updateUserDetails(req,res,next);
})

router.get('/getUserInfo',function(req,res,next){
  regulator.getUserInfo(req,res,next);
});

router.get('/getTokenList',function(req,res,next){
  regulator.getTokenList(req,res,next);
})

router.post('/getAmountForTokenValue',function(req,res,next){
  regulator.getAmountForTokenValue(req,res,next);
});

router.post('/stripePurchaseToken',function(req,res,next){
  regulator.stripePurchaseToken(req,res,next);
});

module.exports = router;