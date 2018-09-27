var fs = require('fs');
var moment = require('moment-timezone');
var jwt = require('jsonwebtoken');
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';

console.log("Inside Regulator");

// load web3 configurations
let Web3 = require('web3');
const web3 = new Web3();

// load sol compiler
let solc = require('solc');

// load ganache test rpc configuration
//var Ganache = require("ganache-core");
//web3.setProvider(Ganache.provider());

//connection establishing
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));

web3.eth.getAccounts(function (error, result) {
    if (error != null)
        console.log("Couldn't get accounts");

    console.log(result); //logs all accounts
});

// Load db configurations
var MongoClient = require('mongodb').MongoClient;
var DatabaseUrl = process.env.DatabaseUri;
var DatabaseName = process.env.DatabaseName;
var DatabaseCollectionName = process.env.DatabaseCollectionName;

function login(req, res, next) {
    console.log(req.body);
    var result = JSON.parse(JSON.stringify(req.body));
    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);
        var emailId = result.emailOfPerson;
        db.collection(DatabaseCollectionName).findOne({ emailId: emailId }).then((userObject) => {
            console.log(userObject);
            if (userObject !== undefined && userObject !== "") {
                var tokenWithEmailAddressAndPassword = jwt.sign(userObject.emailId, userObject.password); // <==== The all-important "jwt.sign" function
                var token = jwt.sign(tokenWithEmailAddressAndPassword, serverJWT_Secret);
                res.status(200).send({
                    status: "Created Successfully",
                    emailAddress: userObject.emaiId,
                    userToken: jwt.sign(userObject.address, serverJWT_Secret),
                    sessionToken: token
                });
            }
            else {
                res.status(400).send(JSON.stringify({
                    status: "User does not exists! Please create an account to access this application."
                }));
            }
        });
    });
}

function signup(req, res, next) {
    console.log(req.body);
    var result = JSON.parse(JSON.stringify(req.body));

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);
        var emailId = result.emailOfPerson;
        db.collection(DatabaseCollectionName).findOne({ emailId: emailId }).then((userObject) => {
            if (userObject !== undefined && userObject !== "") {
                res.status(400).send(JSON.stringify({
                    status: "User already exists"
                }));
            }
            else {
                createUserAccount(result, res);
            }        
        });
    });    
}

var createUserAccount = (userInfo, res) => {
    console.log("Inside createUserAccount")
    var accountJson = web3.eth.accounts.create();
    console.log(accountJson);
    if (accountJson !== undefined && Object.keys(accountJson).length > 0) {
        console.log("Inside accountJson");
        accountJson["emailId"] = userInfo.emailOfPerson;
        accountJson["name"] = userInfo.nameOfPerson;
        accountJson["password"] = userInfo.passwordOfPerson;
        accountJson["cityName"] = userInfo.cityname;
        accountJson["stateName"] = userInfo.statename;
        accountJson["zipCode"] = userInfo.zipcodename;
        accountJson["createdDateAndTime"] = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
        accountJson["signTransaction"] = JSON.stringify(accountJson["signTransaction"]);
        accountJson["sign"] = JSON.stringify(accountJson["sign"]);
        accountJson["encrypt"] = JSON.stringify(accountJson["encrypt"]);

        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).findAndModify(
                { emailId: userInfo.emailOfPerson },
                [],
                accountJson,
                { "upsert": "true" },
                function (error, object) {
                    if (!error) {
                        var tokenWithEmailAddressAndPassword = jwt.sign(userInfo.emailOfPerson, userInfo.passwordOfPerson); // <==== The all-important "jwt.sign" function
                        var token = jwt.sign(tokenWithEmailAddressAndPassword, serverJWT_Secret);
                        res.status(200).send({
                            status: "Created Successfully",
                            emailAddress: userInfo.emailOfPerson,
                            userToken: jwt.sign(accountJson.address, serverJWT_Secret),
                            sessionToken: token
                        });
                    }
                    else {
                        console.log(err)
                        res.status(403).send(JSON.stringify({
                            status: "Something went wrong!"
                        }));
                    }
                }
            );
        });
    }
    else {
        res.status(400).send(JSON.stringify({
            status: "Error creating an account in network! Please contact Administrator."
        }));
    }
}

exports.login = login;
exports.signup = signup;