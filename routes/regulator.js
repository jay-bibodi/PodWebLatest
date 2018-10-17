var fs = require('fs');
var moment = require('moment-timezone');
var jwt = require('jsonwebtoken');
var async = require('async');
var crypto = require('crypto');
var bcrypt = require('bcrypt');
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
//const RSA_PRIVATE_KEY = fs.readFileSync('../.ssh/key');
//var cert = fs.readFileSync('../.ssh/key.pub');  // get public key
//console.log(cert)
//console.log(RSA_PRIVATE_KEY);

var userInfoStructure = {
    "token":"",
    "name":"",
    "emailAddress":"",
    "secondaryEmailAddress":"",
    "userAddress":"",
    "city":"",
    "country":"",
    "postalCode":""
};

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

var contractInstance;
var input = {
    'regulator.sol': fs.readFileSync('../contracts/regulator.sol', 'utf8')
};

let compiledContract = solc.compile({ sources: input }, 1);

let abi = compiledContract.contracts['regulator.sol:Regulator'].interface;

let bytecode = '0x' + compiledContract.contracts['regulator.sol:Regulator'].bytecode;

var myContract = new web3.eth.Contract(JSON.parse(abi));

var myContractTx = myContract.deploy({data:bytecode});

var podsTokenContractInstance;
var podsTokenInput = {
    'PodsToken.sol': fs.readFileSync('../contracts/PodsToken.sol', 'utf8')
};

let podsTokenCompiledContract = solc.compile({ sources: podsTokenInput }, 1);

let podsTokenAbi = podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].interface;

let podsTokenBytecode = '0x' + podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].bytecode;

var podsTokenContract = new web3.eth.Contract(JSON.parse(podsTokenAbi));

var podsTokenContractTx = podsTokenContract.deploy({data:podsTokenBytecode,arguments:[1000000]});

var ethAccounts = [];

getEthAccounts(deployContract);

function getEthAccounts(callback)
{
    web3.eth.getAccounts(function(error, result) {
        if(error != null)
            console.log("Couldn't get accounts");
        ethAccounts = result;
        callback();
    });        
}

function deployContract()
{
    myContractTx.send({from:ethAccounts[0],gas:4712388}).then((instance) => contractInstance=instance);

    podsTokenContractTx.send({from:ethAccounts[0],gas:4712388}).then((instance) => {
        podsTokenContractInstance=instance;
        //console.log(podsTokenContractInstance);
        /*console.log("Print token supply")
        console.log(podsTokenContractInstance.methods.getBalance(ethAccounts[0]).call({from: ethAccounts[0]}, function(error, result){
            console.log(error);
            console.log(result);
        }));*/
    });
}

// Load db configurations
var MongoClient = require('mongodb').MongoClient;
var DatabaseUrl = "mongodb://podweb1:zyiF9C2bTNt75wpnpuJqpEoA0riWV8izvxINQzKxRHS1dJnE0SZ5otRhUGBEq3CWPmGjN6Rgn0KQrehqGRailA==@podweb1.documents.azure.com:10255/?ssl=true"; //process.env.DatabaseUri;
var DatabaseName = "podweb1";
var DatabaseCollectionName = "AppUser";

function login(req, res, next) {
    var userCredentials = JSON.parse(JSON.stringify(req.body));
    console.log("Inside regulator login");

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);

        db.collection(DatabaseCollectionName).findOne({emailId: userCredentials.emailOfPerson}, function(err, result) {
            if (err) throw err;

            if (result !== undefined && bcrypt.compareSync(userCredentials.passwordOfPerson,result.password)) {
                var jwtToken = jwt.sign({emailId: userCredentials.emailOfPerson},serverJWT_Secret);
                res.status(200).send({
                    status: "login Successful",
                    emailAddress: userCredentials.emailOfPerson,
                    token: jwtToken
                });
            }
            else {
                res.status(400).send(JSON.stringify({
                    status: "User does not exists! Please create an account to access this application."
                }));
            }
            database.close();
          });
    });
}

function signup(req, res, next) {
    var result = JSON.parse(JSON.stringify(req.body));

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);
        var emailId = result.emailOfPerson;
        db.collection(DatabaseCollectionName).findOne({ emailId: emailId }).then((userObject) => {
            if (userObject !== null && userObject !== "") {
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
    var accountJson = web3.eth.accounts.create();
    if (accountJson !== undefined && Object.keys(accountJson).length > 0) {
        accountJson["emailId"] = userInfo.emailOfPerson;
        accountJson["name"] = userInfo.nameOfPerson;
        accountJson["password"] = getEncryptedPassword(userInfo.passwordOfPerson);
        accountJson["createdDateAndTime"] = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
        accountJson["signTransaction"] = JSON.stringify(accountJson["signTransaction"]);
        accountJson["sign"] = JSON.stringify(accountJson["sign"]);
        accountJson["encrypt"] = JSON.stringify(accountJson["encrypt"]);
        accountJson["secondaryEmailAddress"] = "";
        accountJson["userAddress"] = "";
        accountJson["city"] = "";
        accountJson["country"] = "";
        accountJson["postalCode"] = "";

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
                        console.log(ethAccounts[0]);
                        contractInstance.methods.storeEmailAddressMapping(userInfo.emailOfPerson,accountJson.address).call({from: ethAccounts[0]}, function(error, result){
                            if (result !== undefined) {
                                console.log("Account Address: "+accountJson.address);
                                //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);
                                podsTokenContractInstance.methods.transfer(accountJson.address,10).send({from: ethAccounts[0]})
                                    .then(function(receipt){
                                        console.log("Inside get Receipt");
                                        console.log(receipt);
                                        //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);
                                        var jwtToken = jwt.sign({emailId: userInfo.emailOfPerson},serverJWT_Secret);
                                            console.log(jwt.verify(jwtToken,serverJWT_Secret));
                                            res.status(200).send({
                                                status: "Created Successfully",
                                                emailAddress: userInfo.emailOfPerson,
                                                token: jwtToken
                                            });
                                    });


                                /*podsTokenContractInstance.methods.transfer(accountJson.address,10).send({from: ethAccounts[0]}, function(error, result){
                                    setTimeout(()=>{
                                        podsTokenContractInstance.methods.getBalance(accountJson.address).call({from: ethAccounts[0]}, function(error, result){
                                            console.log(error);
                                            console.log(result);
                                            var jwtToken = jwt.sign({emailId: userInfo.emailOfPerson},serverJWT_Secret);
                                            console.log(jwt.verify(jwtToken,serverJWT_Secret));
                                            res.status(200).send({
                                                status: "Created Successfully",
                                                emailAddress: userInfo.emailOfPerson,
                                                token: jwtToken
                                            });
                                        })
                                    },15000)
                                });*/
                            }
                            else
                            {
                                res.status(403).send(JSON.stringify({
                                    status: "Something went wrong!"
                                }));
                            }
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

// while storing password in DB
function getEncryptedPassword(password) {
    var saltRounds = 5;
    return bcrypt.hashSync(password, saltRounds);
}

// verify a token asymmetric
/*function verifyJWT(token){
    var verifyOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  ["RS256"]
    };
    return jwt.verify(token, cert, verifyOptions);
}*/

/*function signJWT(emailId){
    var signOptions = {
        issuer:  i,
        subject:  s,
        audience:  a,
        expiresIn:  "12h",
        algorithm:  "RS256"
    };

    return jwt.sign({email:emailId}, RSA_PRIVATE_KEY, signOptions);
    
    var jwtToken = jwt.sign({email:emailId}, RSA_PRIVATE_KEY, {
        algorithm: 'RS256',
    });
    return jwtToken;
}*/

function forgotPassword(req, res, next) {
    console.log("Inside forgotPassword")

    crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        console.log("Token: " + token)
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).find({ "emailId": req.body.emailOfPerson }).toArray((err, result) => {
                if (err) throw err;
                if (result.length >= 1) {
                    var timeStamp = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                    var updateRequestPasswordToken = { $push: { requestPassword: { $each: [{ "resetToken": token, "resetDateAndTime": timeStamp }] } } }

                    db.collection(DatabaseCollectionName).update(updateRequestPasswordToken, result[0], { upsert: true }, function (err, obj) {
                        if (err) throw err;
                        db.close();
                        const msg = {
                            to: user.emaiId,
                            from: 'jay23193@gmail.com',
                            subject: 'PodWeb - Password Reset',
                            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                            //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                        };
                        sgMail.send(msg);
                        res.status(200).send(JSON.stringify({
                            status: "Check your email address to reset your password"
                        }));
                    });
                }
                else {
                    res.status(400).send(JSON.stringify({
                        status: "User does not exists!"
                    }));
                }
            });
        });
    });
}

// reset token
function resetPassword(req, res,next) {

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) { console.log(err); throw new Error(); }
        var db = database.db(DatabaseName)
        db.collection(DatabaseCollectionName).find({ "emailId": req.body.emailOfPerson }).toArray((err, result) => {
            if (err) throw err;
            if (result.length >= 1) {
                var requestPasswordLength = result[0].requestPassword.length;
                var latestRequestPassword = result[0].requestPassword[requestPasswordLength-1];
                var end = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                var duration = moment.duration(end.diff(moment(latestRequestPassword.resetDateAndTime).format("MM/DD/YYYY hh:mm:ss a")));
                var hours = duration.asHours();

                if(hours > 1)
                {
                    res.status(400).send(JSON.stringify({
                        status: "Token expired! Reset Password token is valid only for 1 hour!"
                    }));
                }
                else
                {
                    db.collection(DatabaseCollectionName).update({"password":getEncryptedPassword(req.body.passwordOfPerson)}, result[0], { upsert: true }, function (err, obj) {
                        if (err) throw err;
                        db.close();
                        res.status(200).send(JSON.stringify({
                            status: "Password updated successfully!"
                        }));
                    });
                }
            }
        })
    });        
}

function updateUserDetails(req,res,next){
    console.log("Inside update user details")
    
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
        var userInfo = JSON.parse(JSON.stringify(req.body));

        MongoClient.connect(DatabaseUrl,{useNewUrlParser:true},function(err,database){
            if(err) {console.log(err); throw new Error();}
            var db = database.db(DatabaseName)

            var myquery = { emailId: jwtVerified.emailId };
            var newvalues = { $set: {name: userInfo.userName, userAddress: userInfo.userAddress,secondaryEmailAddress: userInfo.userSecondaryEmail, city:userInfo.userCity, country:userInfo.userCountry,postalCode: userInfo.userPostalCode } };

            db.collection(DatabaseCollectionName).updateOne(myquery, newvalues, function(err, updateResult) {
                if (err) throw err;
                database.close();

                res.status(200).send(JSON.stringify({
                    status: "User details updated successfully!"
                }));
            });
        })
    }
}

function getUserInfo(req,res,next){
    console.log("Inside getUserInfo");
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token,serverJWT_Secret)));
    
    if(jwtVerified.emailId !== headers.emailaddress)
    {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    } 
    else{
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).find({ "emailId": jwtVerified.emailId }).toArray((err, result) => {
                if (err){
                    console.log(err);
                    throw err;  
                } 
                else{
                    var userInfoDetails = JSON.parse(JSON.stringify(userInfoStructure));
                    console.log(result);
                    //console.log(result[0].address);
                    //console.log(web3.utils.stringToHex((result[0].address).slice(2)))
                    //console.log(web3.utils.stringToHex(result[0].address));
                    podsTokenContractInstance.methods.balanceOf(result[0].address).call().then((balance)=>{
                        console.log(balance);
                        userInfoDetails.token = balance
                        userInfoDetails.name = result[0].name;
                        userInfoDetails.emailAddress = result[0].emailId;
                        userInfoDetails.secondaryEmailAddress = result[0].secondaryEmailAddress;
                        userInfoDetails.userAddress = result[0].userAddress;
                        userInfoDetails.city = result[0].city;
                        userInfoDetails.country = result[0].country;
                        userInfoDetails.postalCode = result[0].postalCode;

                        res.send(JSON.stringify({
                            data: userInfoDetails,
                            status: "results fetched successfully"
                        }));
                    }).catch(console.error);
                }    
            });
        });        
    }
}

exports.getUserInfo = getUserInfo;
exports.login = login;
exports.signup = signup;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.updateUserDetails = updateUserDetails;