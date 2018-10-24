// Publishable key: pk_test_CoMBkQnIgd8vejmt3EsQTasU
// Secret key: sk_test_F2JU8TVN1he8TAAh90ByLXbr

var stripe = require("stripe")("sk_test_F2JU8TVN1he8TAAh90ByLXbr");
var jwt = require('jsonwebtoken');
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
var tokenPrice = 0.001; // expressed in ether.
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
var oneGweiToEther = 0.000000001;

function getTokenList(req,res,next){
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
        var tokenVal = JSON.parse(JSON.stringify(req.body));
        var tokens = parseInt(tokenVal.totalToken);

        cc.price('ETH', 'USD')
        .then(prices => {
            var price = parseFloat(prices.USD);
            // -> { USD: 1100.24 }
//            var etherPriceToDeployContract = (oneGweiToEther * web3.eth.)
            res.send(JSON.stringify({
                data: Math.ceil( ((tokenPrice*(price)*(tokens)))),
                price: prices.USD,
                tokens: tokenVal.totalToken,
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
        var purchaseTokenObj = JSON.parse(JSON.stringify(req.body));
        var stripeId = purchaseTokenObj.stripeId;
        var tokens = parseInt(purchaseTokenObj.tokens);
        var price = parseFloat(purchaseTokenObj.price);
        var amount = parseFloat(purchaseTokenObj.amount);
        var verifyAmount = Math.ceil((tokenPrice*(price)*(tokens))); 

        if(verifyAmount === amount){
            const charge = stripe.charges.create({
                amount: (verifyAmount * 100), // expressed in cents
                currency: 'usd',
                description: 'Example charge',
                source: stripeId,
              });
            
            res.send(JSON.stringify({
                status:"Payment Successful. Token will be credited in few minutes!" 
            }));
        }
        else{
            res.status(401).send(JSON.stringify({
                status: "Problem in total amount! Transaction has been cancelled!"
            }));
        }
    }
}

exports.stripePurchaseToken = stripePurchaseToken;
exports.getTokenList = getTokenList;
exports.getAmountForTokenValue = getAmountForTokenValue;