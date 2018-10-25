var express = require('express');
var router = express.Router();
var regulator = require('./regulator');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

var DIR = path.join(__dirname,'..','uploads'); //'../uploads/';
console.log(DIR);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR)
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, file.originalname)
  }
})
 
var upload = multer({ //multer settings
  storage: storage
}).single('file');

router.post('/uploadfile',function(req,res,next){
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("File is uploaded!");
    //res.end('File is uploaded');
  });
})

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