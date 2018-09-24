var express = require('express');
var router = express.Router();
let fs = require('fs')
var moment = require('moment-timezone');

// load web3 configurations
let Web3 = require('web3');
const web3 = new Web3();

// load sol compiler
let solc = require('solc');

// load ganache test rpc configuration
var Ganache = require("ganache-core");
web3.setProvider(Ganache.provider());

// Load db configurations
var MongoClient = require('mongodb').MongoClient;
var DatabaseUrl = process.env.DatabaseUri;
var DatabaseName = process.env.DatabaseName;
var DatabaseCollectionName = process.env.DatabaseCollectionName;

function login(req,res,next)
{
    console.log(req.body);
    var result = JSON.parse(JSON.stringify(req.body));
    var userObject = getUserFromDb(result.emailOfPerson);
    console.log(userObject);

    if(userObject !== undefined && userObject !== "")
    {
        const tokenWithEmailAddressAndPassword = jwt.sign(userObject.emaiId, userObject.metadata.password); // <==== The all-important "jwt.sign" function
        const token = jwt.sign(tokenWithEmailAddressAndPassword,serverJWT_Secret);
        res.status(200).send({
            status: "Created Successfully",
            emailAddress: userObject.emaiId,
            userToken: jwt.sign(userObject.metadata.address,serverJWT_Secret),
            sessionToken: token
        });
    }
    else
    {
        res.status(400).send(JSON.stringify({
            status: "User does not exists! Please create an account to access this application."
        }));
    }
}

function signup(req,res,next)
{
    console.log(req.body);
    var result = JSON.parse(JSON.stringify(req.body));
    var userObject = getUserFromDb(result.emailOfPerson);
    console.log(userObject);

    if(userObject !== undefined && userObject !== "")
    {
        res.status(400).send(JSON.stringify({
            status: "User already exists"
        }));
    }
    else
    {
        createUserAccount(result,res);
    }
}

var getUserFromDb = (emailOfPerson) =>{
    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if(err) throw new Error();
        const db = database.db(DatabaseName);
        var emailId = emailOfPerson;
        db.collection(DatabaseCollectionName).findOne({ emailId: emailId }).then((document) => {
            return document;
        });
    });
}

var createUserAccount = (userInfo,res)=>{
    web3.eth.accounts.create()
        .then(function(accountJson){
            if(accountJson !== undefined && Object.keys(accountJson).length > 0)
            {
                accountJson["name"] = userInfo.nameOfPerson;
                accountJson["password"] = userInfo.passwordOfPerson;
                accountJson["cityName"] = userInfo.cityname;
                accountJson["stateName"] = userInfo.statename;
                accountJson["zipCode"] = userInfo.zipcodename;
                accountJson["createdDateAndTime"] = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                
                MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                    if(err) throw new Error();
                    const db = database.db(DatabaseName)
                    db.collection(DatabaseCollectionName).findAndModify(
                        {emailId : userInfo.emailOfPerson},
                        [],
                        {metadata : accountJson},
                        { "upsert": "true" },
                        function (error, object) {
                            if (!error) 
                            {
                                const tokenWithEmailAddressAndPassword = jwt.sign(userInfo.emailOfPerson, userInfo.passwordOfPerson); // <==== The all-important "jwt.sign" function
                                const token = jwt.sign(tokenWithEmailAddressAndPassword,serverJWT_Secret);
                                res.status(200).send({
                                    status: "Created Successfully",
                                    emailAddress: userInfo.emailOfPerson,
                                    userToken: jwt.sign(accountJson.address,serverJWT_Secret),
                                    sessionToken: token
                                });
                            }
                            else 
                            {
                                res.status(403).send(JSON.stringify({
                                    status: "Something went wrong!"
                                }));
                            }
                        }
                    );
                });

            }
            else
            {
                res.status(400).send(JSON.stringify({
                    status: "Error creating an account in network! Please contact Administrator."
                }));    
            }
        });
}

exports.login = login;
exports.signup = signup;
module.exports = router;