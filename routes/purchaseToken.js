// Publishable key: pk_test_CoMBkQnIgd8vejmt3EsQTasU
// Secret key: sk_test_F2JU8TVN1he8TAAh90ByLXbr

var stripe = require("stripe")("sk_test_F2JU8TVN1he8TAAh90ByLXbr");
var jwt = require('jsonwebtoken');
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
var tokenPrice = 0.001; // expressed in ether.
global.fetch = require('node-fetch')
const cc = require('cryptocompare')

function getTokenList(req,res,next){
    console.log("Get token list");
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token,serverJWT_Secret)));

    if(jwtVerified.emailId !== headers.emailaddress)
    {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    } 
    else
    {
        res.send(JSON.stringify({
            data: [
                {value: '25', viewValue: '25'},
                {value: '50', viewValue: '50'},
                {value: '75', viewValue: '75'},
                {value: '100', viewValue: '100'}
              ],
            status: "results fetched successfully"
        }));
    }
}

function getAmountForTokenValue(req,res,next){
    console.log("Get token list");
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token,serverJWT_Secret)));

    if(jwtVerified.emailId !== headers.emailaddress)
    {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    } 
    else
    {
        console.log(req.body);
        var tokenVal = JSON.parse(JSON.stringify(req.body));
        console.log(tokenVal);

        cc.price('ETH', 'USD')
        .then(prices => {
            console.log(prices)
            // -> { USD: 1100.24 }
            res.send(JSON.stringify({
                data: (tokenPrice*(prices.USD)*(tokenVal.totalToken)),
                status: "amount fetched successfully"
            }));
        })
        .catch(console.error)
    }
}

function stripePurchaseToken(req,res,next){
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token,serverJWT_Secret)));

    if(jwtVerified.emailId !== headers.emailaddress)
    {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    } 
    else
    {
        console.log(req.body);
        var tokenInformation = JSON.parse(JSON.stringify(req.body));

        var token = tokenInformation.token.id;
        var totalToken = tokenInformation.totalToken;
        var price = tokenInformation.price;

        var charge = stripe.charge.create({
            amount: (tokenPrice*(price)*(totalToken)),
            currency: "usd",
            source:token
        },function(err,charge){
            if(err && err.type === "StripeCardError"){
                console.log("Your card was declined");
            }
            console.log(charge);
        });
        console.log("Your payment was successful");
        res.send({});
    }
}

exports.stripePurchaseToken = stripePurchaseToken;
exports.getTokenList = getTokenList;
exports.getAmountForTokenValue = getAmountForTokenValue;