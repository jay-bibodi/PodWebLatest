var express = require('express');
var router = express.Router();
var regulator = require('./regulator');

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

router.post('/uploadfile',function(req,res,next){
  regulator.uploadfile(req,res,next);
})

router.get('/getLatestPodcast',function(req,res,next){
  regulator.getLatestPodcast(req,res,next);
})

router.get('/getUserPublishedPodcast',function(req,res,next){
  regulator.getUserPublishedPodcast(req,res,next);
})

// view for the publisher 
router.post('/getPodcastDetailsForView',function(req,res,next){
  regulator.getPodcastDetailsForView(req,res,next);
})

router.post('/updatePodcastDetails',function(req,res,next){
  regulator.updatePodcastDetails(req,res,next);
})

router.post('/transferPodsToPurchase',function(req,res,next){
  regulator.transferPodsToPurchase(req,res,next);
})

router.get('/getPurchasedPodcastList',function(req,res,next){
  regulator.getPurchasedPodcastList(req,res,next);
})

module.exports = router;