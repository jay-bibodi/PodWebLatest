var fs = require('fs');
var moment = require('moment-timezone');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var bcrypt = require('bcrypt');
//var sgMail = require('@sendgrid/mail');
var detect = require('detect-file-type');
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
//sgMail.setApiKey("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");
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';
// Publishable key: pk_test_CoMBkQnIgd8vejmt3EsQTasU
// Secret key: sk_test_F2JU8TVN1he8TAAh90ByLXbr
var stripe = require("stripe")("sk_test_F2JU8TVN1he8TAAh90ByLXbr");
var tokenPrice = 1000000000000000; // expressed in wei //0.001; // expressed in ether.
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
var tokensAvailable = 600000;
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var CircularJSON = require('circular-json')
var DIR = path.join(__dirname, '..', 'uploads'); //'../uploads/';
var ValidateUser = require('./validateUser');
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "podwebapplication@gmail.com",
        pass: "podweb1010@"
    }
});
var mailOptions = {
    from: "podwebapplication@gmail.com", // sender address
    to: '', // list of receivers
    subject: 'Reset Password - PodWeb Application',
    text: '',
    html: ''
};

// Load user detail collection configurations
var MongoClient = require('mongodb').MongoClient;
var DatabaseUrl = "mongodb://localhost:27017/podweb1";//"mongodb://podweb1:zyiF9C2bTNt75wpnpuJqpEoA0riWV8izvxINQzKxRHS1dJnE0SZ5otRhUGBEq3CWPmGjN6Rgn0KQrehqGRailA==@podweb1.documents.azure.com:10255/?ssl=true"; //process.env.DatabaseUri;
var DatabaseName = "podweb1";
var DatabaseCollectionName = "AppUser";

// Load podcast detail collection configuration
var PodcastCollectionName = "PodcastDetail";

// Load Token Purchased detail collection configuration
var TokenPurchasedDetailCollectionName = "TokenPurchasedDetail";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ //multer settings
    storage: storage
}).single('file');


var userInfoStructure = JSON.parse(fs.readFileSync(__dirname+'/models/userInfoStructure.json'));
var podcastDetailStructure = JSON.parse(fs.readFileSync(__dirname+'/models/podcastDetailStructure.json'));
var tokenPurchasedDetail = JSON.parse(fs.readFileSync(__dirname+'/models/tokenPurchasedDetail.json'));

console.log("Inside Regulator");

// load web3 configurations
let Web3 = require('web3');
const web3 = new Web3();

// load sol compiler
let solc = require('solc');

//connection establishing
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));

//let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://kovan.infura.io/ws/'))

// mapping user to account, user to file contract
var contractInstance;
var input = {
    'NewRegulator.sol': fs.readFileSync(path.join(__dirname,'..','contracts','NewRegulator.sol'), 'utf8')
};
let compiledContract = solc.compile({ sources: input }, 1);
let abi = compiledContract.contracts['NewRegulator.sol:NewRegulator'].interface;
let bytecode = '0x' + compiledContract.contracts['NewRegulator.sol:NewRegulator'].bytecode;
var myContract = new web3.eth.Contract(JSON.parse(abi));
var myContractTx = myContract.deploy({ data: bytecode });

// Deploy pods token contract
var podsTokenContractInstance;
var podsTokenInput = {
    'PodsToken.sol': fs.readFileSync(path.join(__dirname,'..','contracts','PodsToken.sol'), 'utf8')
};
let podsTokenCompiledContract = solc.compile({ sources: podsTokenInput }, 1);
let podsTokenAbi = podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].interface;
let podsTokenBytecode = '0x' + podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].bytecode;
var podsTokenContract = new web3.eth.Contract(JSON.parse(podsTokenAbi));
var podsTokenContractTx = podsTokenContract.deploy({ data: podsTokenBytecode, arguments: [1000000] });

// Deploy pods token sale contract
var podsTokenSaleContractInstance;
var podsTokenSaleInput = {
    'PodsToken.sol': fs.readFileSync(path.join(__dirname,'..','contracts','PodsToken.sol'), 'utf8'),
    'PodsTokenSale.sol': fs.readFileSync(path.join(__dirname,'..','contracts','PodsTokenSale.sol'), 'utf8')
};
let podsTokenSaleCompiledContract = solc.compile({ sources: podsTokenSaleInput }, 1);
let podsTokenSaleAbi = podsTokenSaleCompiledContract.contracts['PodsTokenSale.sol:PodsTokenSale'].interface;
let podsTokenSaleBytecode = '0x' + podsTokenSaleCompiledContract.contracts['PodsTokenSale.sol:PodsTokenSale'].bytecode;
var podsTokenSaleContract = new web3.eth.Contract(JSON.parse(podsTokenSaleAbi));
var podsTokenSaleContractTx;// = podsTokenSaleContract.deploy({data:podsTokenSaleBytecode,arguments:[1000000]});

//  getEthAccounts and deployContract
var ethAccounts = [];
getEthAccounts(deployContract);

function getEthAccounts(callback) {
    web3.eth.getAccounts(function (error, result) {
        if (error != null)
            console.log("Couldn't get accounts");
        ethAccounts = result;
        callback();
    });
}

function deployContract() {

    myContractTx.send({ from: ethAccounts[0], gas: 4712388 }, function (error, transactionHash) { }).on('error', function (error) { })
        .on('transactionHash', function (transactionHash) { })
        .on('receipt', function (receipt) {
            console.log(receipt.contractAddress) // contains the new contract address
        })
        .on('confirmation', function (confirmationNumber, receipt) { })
        .then(function (newContractInstance) {
            console.log(newContractInstance.options.address) // instance with the new contract address
            contractInstance = newContractInstance
            podsTokenContractTx.send({ from: ethAccounts[0], gas: 4712388 }, function (error, transactionHash) { }).on('error', function (error) { })
                .on('transactionHash', function (transactionHash) { })
                .on('receipt', function (receipt) {
                    console.log(receipt.contractAddress) // contains the new contract address
                })
                .on('confirmation', function (confirmationNumber, receipt) { })
                .then(function (newContractInstance) {
                    console.log(newContractInstance.options.address) // instance with the new contract address
                    podsTokenContractInstance = newContractInstance
                    podsTokenSaleContract.deploy({ data: podsTokenSaleBytecode, arguments: [newContractInstance.options.address, tokenPrice] }).send({
                        from: ethAccounts[0],
                        gas: 4712388
                    }, function (error, transactionHash) { })
                        .on('error', function (error) { })
                        .on('transactionHash', function (transactionHash) { })
                        .on('receipt', function (receipt) {
                            console.log(receipt.contractAddress) // contains the new contract address
                        })
                        .on('confirmation', function (confirmationNumber, receipt) { })
                        .then(function (newContractInstance) {
                            console.log(newContractInstance.options.address) // instance with the new contract address
                            podsTokenSaleContractInstance = newContractInstance;
                            podsTokenContractInstance.methods.transfer(newContractInstance.options.address, tokensAvailable).send({ from: ethAccounts[0] }).then((receipt) => {
                                //console.log("Transfer 60% of the token to token sale")
                                //console.log(receipt);
                            })
                        });
                });

        });
}

function login(req, res, next) {
    var userCredentials = JSON.parse(JSON.stringify(req.body));

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);

        db.collection(DatabaseCollectionName).findOne({ emailId: userCredentials.emailOfPerson }, function (err, result) {
            if (err) throw err;

            if (result !== undefined && bcrypt.compareSync(userCredentials.passwordOfPerson, result.password)) {
                var jwtToken = jwt.sign({ emailId: userCredentials.emailOfPerson }, serverJWT_Secret);
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

// from pods token
function tokenSold() {
    podsTokenSaleContractInstance.methods.tokensSold().call({ from: ethAccounts[0] }).then(console.log);
}

function signup(req, res, next) {
    var result = JSON.parse(JSON.stringify(req.body));

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);
        var emailId = result.emailOfPerson;
        db.collection(DatabaseCollectionName).findOne({ emailId: emailId }).then((userObject) => {
            console.log("User object");
            console.log(userObject);
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
                        contractInstance.methods.storeEmailAddressMapping(accountJson.address, userInfo.emailOfPerson).send({ from: ethAccounts[0] }, function (error, result) {

                            if (result !== undefined) {
                                console.log("Account Address: " + accountJson.address);
                                contractInstance.methods.emailAddressMapping(accountJson.address).call({ from: ethAccounts[0] }).then(console.log);
                                //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);

                                podsTokenContractInstance.methods.transfer(accountJson.address, 10).send({ from: ethAccounts[0] })
                                    .then(function (receipt) {
                                        //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);

                                        var tokenObject = JSON.parse(JSON.stringify(tokenPurchasedDetail));
                                        tokenObject.amountPaid = "$0.00";
                                        tokenObject.blockHash = receipt.blockHash;
                                        tokenObject.blockNumber = receipt.blockNumber;
                                        tokenObject.podsPurchased = "10 Pods Gifted";
                                        tokenObject.reason = "Joining Bonus"
                                        tokenObject.transactionHash = receipt.transactionHash;
                                        tokenObject.createdDateTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");

                                        try {
                                            db.collection(TokenPurchasedDetailCollectionName).insertOne({ "emailId": userInfo.emailOfPerson, "purchaseTokenHistory": [tokenObject] }).then(tokenHistoryStatus => {
                                                var jwtToken = jwt.sign({ emailId: userInfo.emailOfPerson }, serverJWT_Secret);
                                                console.log("Jwt token");

                                                res.status(200).send({
                                                    status: "Created Successfully",
                                                    emailAddress: userInfo.emailOfPerson,
                                                    token: jwtToken
                                                });
                                            })
                                        } catch (e) {
                                            console.log("Jwt token catch");
                                            res.status(403).send(JSON.stringify({
                                                status: "Something went wrong!"
                                            }));
                                            print(e);
                                        };
                                    });
                            }
                            else {
                                console.log("Jwt token catch One");
                                res.status(403).send(JSON.stringify({
                                    status: "Something went wrong!"
                                }));
                            }
                        });
                    }
                    else {
                        console.log("Jwt token catch two");
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

function forgotPassword(req, res, next) {
    console.log("Inside forgotPassword")

    var user = JSON.parse(JSON.stringify(req.body));
    console.log(user);

    if(user.emailId !== ""){
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).findOne({ "emailId": user.emailId },function(err,result){
                contractInstance.methods.emailAddressMapping(result.address).call({ from: ethAccounts[0] }).then((emailId) => {
                    if(emailId === user.emailId){
                        
                        var tokenId = jwt.sign({ address: result.address, emailId:user.emailId,timestamp:moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a")}, serverJWT_Secret)

                        mailOptions.to = user.emailId;
                        mailOptions.text = 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://localhost:3000/pages/resetpassword/' + tokenId + '\n\n' +
                        'If you did not request this, please ignore this email and your password will remain unchanged.\n';

                        transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                console.log(error);
                                res.status(400).send(JSON.stringify({
                                    status:"Error sending email!"
                                }))
                            }
                            else {
                                res.status(200).send(JSON.stringify({
                                    status:"Email sent successfully!"
                                }))
                            }
                        });
                    }
                });
            })
        })
    }

    /*crypto.randomBytes(20, function (err, buf) {
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
                            to: user.emailId,
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
    });*/
}

// reset token
function resetPassword(req, res, next) {
    console.log("Reset password");

    var body = JSON.parse(JSON.stringify(req.body));
    var encodedObject = JSON.parse(JSON.stringify(jwt.verify(body.id,serverJWT_Secret)));
    console.log(encodedObject);

    //var tokenId = jwt.sign({ address: result.address, emailId:user.emailId,timestamp:moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a")}, serverJWT_Secret)

    var end = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
    var duration = moment.duration(end.diff(moment(encodedObject.timestamp).format("MM/DD/YYYY hh:mm:ss a")));
    console.log(duration);

    var hours = duration.asHours();
    console.log(hours);

    if(hours > 1){

    }

    /*MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
        if (err) { console.log(err); throw new Error(); }
        var db = database.db(DatabaseName)
        db.collection(DatabaseCollectionName).find({ "emailId": req.body.emailOfPerson }).toArray((err, result) => {
            if (err) throw err;
            if (result.length >= 1) {
                var requestPasswordLength = result[0].requestPassword.length;
                var latestRequestPassword = result[0].requestPassword[requestPasswordLength - 1];
                var end = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                var duration = moment.duration(end.diff(moment(latestRequestPassword.resetDateAndTime).format("MM/DD/YYYY hh:mm:ss a")));
                var hours = duration.asHours();

                if (hours > 1) {
                    res.status(400).send(JSON.stringify({
                        status: "Token expired! Reset Password token is valid only for 1 hour!"
                    }));
                }
                else {
                    db.collection(DatabaseCollectionName).update({ "password": getEncryptedPassword(req.body.passwordOfPerson) }, result[0], { upsert: true }, function (err, obj) {
                        if (err) throw err;
                        db.close();
                        res.status(200).send(JSON.stringify({
                            status: "Password updated successfully!"
                        }));
                    });
                }
            }
        })
    });*/
}

function updateUserDetails(req, res, next) {

    console.log("Inside updateUserDetails");
    console.log(ValidateUser.validateUser(req));

    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        var userInfo = JSON.parse(JSON.stringify(req.body));

        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)

            var myquery = { emailId: jwtVerified.emailId };
            var newvalues = { $set: { name: userInfo.userName, userAddress: userInfo.userAddress, secondaryEmailAddress: userInfo.userSecondaryEmail, city: userInfo.userCity, country: userInfo.userCountry, postalCode: userInfo.userPostalCode } };

            db.collection(DatabaseCollectionName).updateOne(myquery, newvalues, function (err, updateResult) {
                if (err) throw err;
                database.close();

                res.status(200).send(JSON.stringify({
                    status: "User details updated successfully!"
                }));
            });
        })
    }
}

function getUserInfo(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).find({ "emailId": jwtVerified.emailId }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                else {
                    var userInfoDetails = JSON.parse(JSON.stringify(userInfoStructure));

                    podsTokenContractInstance.methods.balanceOf(result[0].address).call().then((balance) => {
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

function getTokenList(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) throw err;

            var db = database.db(DatabaseName);

            db.collection(TokenPurchasedDetailCollectionName).findOne({ "emailId": jwtVerified.emailId }).then((purchaseTokenObject) => {
                res.send(JSON.stringify({
                    data: [
                        { value: '25', viewValue: '25' },
                        { value: '50', viewValue: '50' },
                        { value: '75', viewValue: '75' },
                        { value: '100', viewValue: '100' }
                    ],
                    purchaseHistory: purchaseTokenObject.purchaseTokenHistory,
                    status: "results fetched successfully"
                }));
            });
        })
    }
}

function getAmountForTokenValue(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        var tokenVal = JSON.parse(JSON.stringify(req.body));
        var tokens = parseInt(tokenVal.totalToken);

        cc.price('ETH', 'USD')
            .then(prices => {
                var price = parseFloat(prices.USD);

                var tokenPriceInWei = (tokenPrice * tokens).toString();
                var tokenPriceInEther = parseFloat(web3.utils.fromWei(tokenPriceInWei, 'ether'));
                var tokenPriceInDollars = tokenPriceInEther * price;

                res.send(JSON.stringify({
                    data: Math.ceil(tokenPriceInDollars),
                    price: prices.USD,
                    tokens: tokenVal.totalToken,
                    status: "amount fetched successfully"
                }));
            })
            .catch(console.error)
    }
}

function stripePurchaseToken(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        var purchaseTokenObj = JSON.parse(JSON.stringify(req.body));
        var stripeId = purchaseTokenObj.stripeId;

        var tokens = parseInt(purchaseTokenObj.tokens);
        var price = parseFloat(purchaseTokenObj.price);
        var amount = parseFloat(purchaseTokenObj.amount);

        var tokenPriceInWei = (tokenPrice * tokens).toString();
        var tokenPriceInEther = parseFloat(web3.utils.fromWei(tokenPriceInWei, 'ether'));
        var tokenPriceInDollars = tokenPriceInEther * price;

        var verifyAmount = Math.ceil(tokenPriceInDollars /*+ etherToDollar*/);

        if (verifyAmount === amount) {
            const charge = stripe.charges.create({
                amount: (verifyAmount * 100), // expressed in cents
                currency: 'usd',
                description: 'Example charge',
                source: stripeId,
            });

            var id = jwtVerified.emailId;

            MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                if (err) { console.log(err); throw new Error(); }
                var db = database.db(DatabaseName)
                db.collection(DatabaseCollectionName).find({ "emailId": id }).toArray((err, result) => {
                    console.log("get address from mongo db");
                    var address = result[0].address;
                    console.log(address);
                    if (web3.utils.isAddress(address)) {
                        contractInstance.methods.emailAddressMapping(address).call({ from: ethAccounts[0] }).then((emailId) => {
                            console.log("From smart contract");
                            console.log(emailId);
                            if (emailId === id) {

                                podsTokenSaleContractInstance.methods.buyTokens(address, tokens).send({ from: ethAccounts[0], value: (tokens * tokenPrice) }).then((receipt) => {

                                    var tokenObject = JSON.parse(JSON.stringify(tokenPurchasedDetail));
                                    tokenObject.amountPaid = "$" + amount;
                                    tokenObject.blockHash = receipt.blockHash;
                                    tokenObject.blockNumber = receipt.blockNumber;
                                    tokenObject.podsPurchased = tokens + " Pods purchased";
                                    tokenObject.reason = ""
                                    tokenObject.transactionHash = receipt.transactionHash;
                                    tokenObject.createdDateTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");

                                    var updatePurchaseTokenList = { $push: { purchaseTokenHistory: tokenObject } }

                                    db.collection(TokenPurchasedDetailCollectionName).findAndModify(
                                        { "emailId": jwtVerified.emailId },
                                        [['_id', 'asc']],
                                        updatePurchaseTokenList,
                                        { new: true, upsert: true },
                                        function (err, updatedDoc) {
                                            console.log('find and modified  ' + updatedDoc);

                                            if (err) throw err;

                                            console.log("Inside updatedDoc")
                                            console.log(updatedDoc);
                                            res.status(200).send(JSON.stringify({
                                                purchaseHistory: updatedDoc.value.purchaseTokenHistory,
                                                status: "Tokens Credited"
                                            }));
                                        }
                                    );
                                })
                            }
                        })
                    }
                })
            });
        }
        else {
            res.status(401).send(JSON.stringify({
                status: "Problem in total amount! Transaction has been cancelled!"
            }));
        }
    }
}

function uploadfile(req, res, next) {
    upload(req, res, function (err) {
        if (err) throw err;

        var body = JSON.parse(JSON.stringify(req.body));
        var fileDetail = JSON.parse(JSON.stringify(req.file));

        var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(body.token, serverJWT_Secret)));

        if (jwtVerified.emailId !== body.emailAddress) {
            res.status(400).send(JSON.stringify({
                status: "Invalid login credentials. Please login again!"
            }));
        }
        else {
            var filePath = path.join(__dirname, "..", "uploads", fileDetail.originalname);

            detect.fromFile(filePath, function (err, result) {
                if (err) 
                {
                    console.log(err);
                }
                else if (result.ext !== "mp3") {
                    res.status(400).send(JSON.stringify({
                        status: "Only mp3 format are supported!"
                    }));
                }
                else {
                    fs.readFile(filePath, function (err, data) {
                        ipfs.add(Buffer.from(data), (err, result) => {
                            if (err || !result) {
                                console.log("Unable to upload to IPFS API: " + err);
                            }
                            else 
                            {

                                MongoClient.connect(DatabaseUrl,{useNewUrlParser:true},function(err,database){
                                    var db = database.db(DatabaseName);
                                    db.collection(DatabaseCollectionName).findOne({"emailId":jwtVerified.emailId}, function (err, userDocs) {
                                        var address = userDocs.address;

                                        contractInstance.methods.addrToIpfsCount(address).call().then((count)=>{
                                            count = parseInt(count);

                                            var isFilePresent = false;
                                            for(var i=0;i<count;i++){
                                                contractInstance.methods.addressToIpfsStruct(address,i).call().then((resultForPathAddressAndAMount)=>{
                                                    if(resultForPathAddressAndAMount.ipfsAddress === result[0].hash){
                                                        isFilePresent = true;
                                                        fs.unlink(filePath, (err) => {
                                                            if (err) throw err;
            
                                                            res.status(400).send(JSON.stringify({
                                                                status: "File with the same content is already present"
                                                            }));
                                                        });    
                                                    }
                                                }).catch(console.error);
                                            }
                                            
                                            if(!isFilePresent)
                                            {
                                                contractInstance.methods.storeAddressAndIpfsStruct(address,result[0].path,result[0].hash,(body.amount !== undefined? body.amount : 0)).send({ from: ethAccounts[0], gas: 4712388 }).then((result) => {

                                                    var podcastObject = JSON.parse(JSON.stringify(podcastDetailStructure));
                                             
                                                    podcastObject.uploadedBy = body.emailAddress;
                                                    podcastObject.location = count;
                                                    podcastObject.address = address;
                                                    podcastObject.title = body.title
                                                    podcastObject.tags = body.tags;
                                                    podcastObject.artistName = body.artist;
                                                    podcastObject.isPodcastPaid = body.isPaidPodcast;
                                                    podcastObject.comments = [];
                                                    podcastObject.likes = [];
                                                    podcastObject.createdDateTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                                                    podcastObject.modifiedDataTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
        
                                                    db.collection(PodcastCollectionName).insertOne(podcastObject).then((result) => {
                                                        
                                                        fs.unlink(filePath, (err) => {
                                                            if (err) throw err;
        
                                                            res.status(200).send({
                                                                status: "File uploaded successfully!"
                                                            });
                                                        });
                                                    })  
                                                });
                                               }
                                        }).catch(console.error);
                                    })
                                })
                            }
                        })
                    })
                }
            })
        }
    })
}

function getLatestPodcast(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            var db = database.db(DatabaseName)
            db.collection(PodcastCollectionName).find({}).sort({ "createdDateTime": -1 }).limit(10).toArray((err, docs) => {
                if (err) throw err;

                var mainArr = [];
                var lengthOfArray = docs.length;

                if(lengthOfArray > 0){
                    for(var i=0;i<lengthOfArray;i++)
                    {
                        returnPromise(docs[i],i,true).then((r) => {
                            mainArr.push(r.subArr);       
                            if(r.i === lengthOfArray-1){
                                res.status(200).send(JSON.stringify({
                                    data: mainArr,
                                    status: "Results fetched successfully"
                                }))            
                            }
                        });
                    }    
                }
                else{
                    res.status(200).send(JSON.stringify({
                        data: mainArr,
                        status: "Results fetched successfully"
                    }))
                }
            });
        });
    }
}

function getUserPublishedPodcast(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else 
    {
        var mainArr = [];
        var emailId = jwtVerified.emailId;
        
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            var db = database.db(DatabaseName);
            db.collection(PodcastCollectionName).find({ "uploadedBy": emailId }).toArray((err, docs) => {
                var lengthOfArray = docs.length;
                if(lengthOfArray > 0){
                    for(var i=0;i<lengthOfArray;i++)
                    {
                        returnPromise(docs[i],i,false).then((r) => {
                            mainArr.push(r.subArr);       
                            if(r.i === lengthOfArray-1){
                                res.status(200).send(JSON.stringify({
                                    data: mainArr,
                                    status: "Results fetched successfully"
                                }))            
                            }
                        });
                    }    
                }
                else{
                    res.status(200).send(JSON.stringify({
                        data: mainArr,
                        status: "Results fetched successfully"
                    }))
                }

            })
        })
    }
}

function returnPromise(docs,i,purpose){
    console.log(purpose);
    return new Promise((resolve, reject) => {
        contractInstance.methods.addressToIpfsStruct(docs.address,docs.location).call().then((resultForPathAddressAndAMount)=>{
            var podPaid = (docs.isPodcastPaid === "true") ? "Yes" : "No";
            var subArr = [];
            if(purpose === ""){
                console.log("Inside else if of undefined return promise");
                subArr = [docs.title, docs.artistName, moment(docs.createdDateTime).format('L'), docs.tags, (podPaid === "Yes") ? "Purchased":podPaid, '',jwt.sign({ address: docs.address, emailId:docs.uploadedBy, location:docs.location }, serverJWT_Secret),''];
            }
            else if(!purpose){
                subArr = [docs.title, docs.artistName, moment(docs.createdDateTime).format('L'), docs.tags, podPaid, '', '', jwt.sign({ address:docs.address, emailId:docs.uploadedBy, location:docs.location }, serverJWT_Secret), resultForPathAddressAndAMount.amount];
            }
            else if(purpose){
                subArr = [docs.title, docs.artistName, moment(docs.createdDateTime).format('L'), docs.tags, podPaid, '',jwt.sign({ address: docs.address, emailId:docs.uploadedBy, location:docs.location }, serverJWT_Secret)];
            }
            resolve({"subArr":subArr,"i":i});                                
        })
    })
}

function getPodcastDetailsForView(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else 
    {
        jwt.verify(req.body.id,serverJWT_Secret,function(err,decoded){
            if(err){
                res.status(200).send(JSON.stringify({
                    status: "Adding Podcast"
                }));    
            }
            else{
                var body = JSON.parse(JSON.stringify(jwt.verify(req.body.id,serverJWT_Secret)));
                console.log("Print body")
                console.log(body);

                contractInstance.methods.addressToIpfsStruct(body.address,body.location).call().then((resultForPathAddressAndAMount)=>{
                    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                        if(err) {console.log(err);throw err;}    
        
                        var db = database.db(DatabaseName)
                        
                        db.collection(PodcastCollectionName).findOne({"uploadedBy":body.emailId,"location":body.location},function(err,result){
                            console.log("Inside get Podcast details");
                            console.log(result);
        
                            if(result!==undefined && result !== "")
                            {
                                result["path"] = resultForPathAddressAndAMount.ipfsPath;
                                result["amount"] = resultForPathAddressAndAMount.amount;
                                console.log(result);
                                res.status(200).send(JSON.stringify({
                                    data: result,
                                    amountDisable: true,
                                    status: "Details fetched successfully!"
                                }));    
                            }
                        })
                    })
                })
            }
        })
    }
}

function updatePodcastDetails(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else 
    {
        console.log("Update podcast")
        var body = JSON.parse(JSON.stringify(req.body));
        var parameterIdBody = jwt.verify(body.parameterId,serverJWT_Secret);
        console.log(body);
        console.log(parameterIdBody);

        contractInstance.methods.addressToIpfsStruct(parameterIdBody.address,parameterIdBody.location).call().then((resultForPathAddressAndAMount)=>{
            console.log(resultForPathAddressAndAMount.ipfsPath !== body.id);
            if(resultForPathAddressAndAMount.ipfsPath !== body.id){
                res.status(200).send(JSON.stringify({
                    status: "Some of secret values are altered! Please refresh the page or contact system administrator!"
                }));
            }
            else{

                MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                    var db = database.db(DatabaseName)
        
                    var myquery = {"uploadedBy": parameterIdBody.emailId,"location":parameterIdBody.location,"address":parameterIdBody.address};
                    var newvalues = { $set: { title: body.title, artistName: body.artist, tags: body.tags } };
        
                    db.collection(PodcastCollectionName).updateOne(myquery, newvalues, function (err, updateResult) {
                        if (err) throw err;
                        database.close();
        
                        res.status(200).send(JSON.stringify({
                            status: "Podcast details updated successfully!"
                        }));
                    });
                });
            }
        })
    }
}

function transferPodsToPurchase(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else 
    {
        var requestBody = JSON.parse(JSON.stringify(req.body));
        var body = JSON.parse(JSON.stringify(jwt.verify(requestBody.id,serverJWT_Secret)));
        var amount = requestBody.amount;

        contractInstance.methods.addressToIpfsStruct(body.address,body.location).call().then((resultForPathAddressAndAMount)=>{
            var path = resultForPathAddressAndAMount.ipfsPath;
            var amountFromChain = resultForPathAddressAndAMount.amount;

            // validate the amount
            if ((parseInt(amountFromChain) !== parseInt(amount))) 
            {
                res.status(400).send(JSON.stringify({
                    status: "Amount altered! Please refresh your page or contact system administrator"
                }));
            }
            else
            {
                MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                    if (err) throw err;

                    var db = database.db(DatabaseName);
                    db.collection(PodcastCollectionName).findOne({"uploadedBy":body.emailId,"location":body.location},function(err,docs){
                        var isAlreadyPurchased = false;
                        for(var i=0;i<(docs.purchasedUserList).length;i++){
                            var obj = docs.purchasedUserList[i];
                            if(obj.emailId === jwtVerified.emailId){
                                isAlreadyPurchased = true;
                                break;
                            }
                        }

                        // validate if user has not purchased this already
                        if (isAlreadyPurchased) {
                            res.status(400).send(JSON.stringify({
                                status: "You already have purchased this podcast! If you cannot access it, Please refresh your page or contact system administrator!"
                            }));
                        }
                        else {
                            // validate if user have specific amount
                            db.collection(DatabaseCollectionName).findOne({"emailId":jwtVerified.emailId},function(err,userDocs){
                                // validate email Id and address
                                contractInstance.methods.emailAddressMapping(userDocs.address).call().then((contractEmail) => {
                                    if (contractEmail === jwtVerified.emailId) {
                                        // check balance of the purchaser
                                        podsTokenContractInstance.methods.balanceOf(userDocs.address).call().then((balance) => {

                                            if (parseInt(balance) >= parseInt(amountFromChain)) {
                                                
                                                podsTokenContractInstance.methods.transferFrom(userDocs.address, body.address, parseInt(amountFromChain)).send({ from: ethAccounts[0] }).then((receipt) => {
                                                    db.collection(PodcastCollectionName).updateOne({ "uploadedBy": body.emailId,"location":body.location }, { $addToSet: { purchasedUserList: {"name":userDocs.name,"emailId":jwtVerified.emailId} } }, function (err, updateResult) {
                                                        if (err) throw err;

                                                        var tokenObject = JSON.parse(JSON.stringify(tokenPurchasedDetail));
                                                        tokenObject.amountPaid = parseInt(amountFromChain)+" Pods Token";
                                                        tokenObject.blockHash = receipt.blockHash;
                                                        tokenObject.blockNumber = receipt.blockNumber;
                                                        tokenObject.podsPurchased = parseInt(amountFromChain) + " Pods Token Received";
                                                        tokenObject.reason = "Tokens Received for "+docs.title+" Podcast"//+" from "+userDocs.name;
                                                        tokenObject.transactionHash = receipt.transactionHash;
                                                        tokenObject.createdDateTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");

                                                        var updatePurchaseTokenList = { $push: { purchaseTokenHistory: tokenObject } }

                                                        // for podcast publisher
                                                        db.collection(TokenPurchasedDetailCollectionName).updateOne({"emailId":body.emailId},updatePurchaseTokenList,function(err,updatedPodcastPublisherData){
                                                            // for podcast purchaser
                                                            var tokenObject = JSON.parse(JSON.stringify(tokenPurchasedDetail));
                                                            tokenObject.amountPaid = parseInt(amountFromChain)+" Pods Token";
                                                            tokenObject.blockHash = receipt.blockHash;
                                                            tokenObject.blockNumber = receipt.blockNumber;
                                                            tokenObject.podsPurchased = parseInt(amountFromChain) + " Pods Token Transferred";
                                                            tokenObject.reason = "Tokens transferred for "+docs.title+" Podcast";
                                                            tokenObject.transactionHash = receipt.transactionHash;
                                                            tokenObject.createdDateTime = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                                                            updatePurchaseTokenList = { $push: { purchaseTokenHistory: tokenObject } }
                                                            db.collection(TokenPurchasedDetailCollectionName).updateOne({"emailId":userDocs.emailId},updatePurchaseTokenList,function(err,updatedPodcastPurchaserData){
                                                                res.status(200).send(JSON.stringify({
                                                                    purchasedStatus: "Purchased",
                                                                    path:path,
                                                                    status: "Podcast Purchased Successfully"
                                                                }));
                                                            })
                                                        })
                                                    });
                                                })
                                            }
                                            else {
                                                res.status(400).send(JSON.stringify({
                                                    status: "You don't have sufficient Pods Token! Please purchase token first!"
                                                }));
                                            }
                                        });
                                    }
                                });    
                            })
                        }
                    })
                })        
            }
        })
    }
}

function getPurchasedPodcastList(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
            if (err) throw err;

            var db = database.db(DatabaseName);

            db.collection(PodcastCollectionName).find({ "purchasedUserList.emailId": jwtVerified.emailId }).toArray((err, docs) => {
                var mainArr = [];

                var lengthOfArray = docs.length;
                if(lengthOfArray > 0){
                    for(var i=0;i<lengthOfArray;i++)
                    {
                        returnPromise(docs[i],i,"").then((r) => {
                            mainArr.push(r.subArr);       
                            if(r.i === lengthOfArray-1){
                                res.status(200).send(JSON.stringify({
                                    data: mainArr,
                                    status: "Results fetched successfully"
                                }))            
                            }
                        });
                    }    
                }
                else{
                    res.status(200).send(JSON.stringify({
                        data: mainArr,
                        status: "Results fetched successfully"
                    }))
                }
                
                
                

                /*for (var i = 0; i < docs.length; i++) {
                    var subArr = [docs[i].title, docs[i].artistName, moment(docs[i].createdDateTime).format('L'), docs[i].tags, "Purchased",'', docs[i].fileHashKey[0].hash, '']
                    mainArr.push(subArr);
                }

                console.log(mainArr);

                res.status(200).send(JSON.stringify({
                    data: mainArr,
                    status: "Results fetched successfully"
                }))*/
            });
        });
    }
}

function getPodcastForCurrUser(req,res,next){
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        var body = JSON.parse(JSON.stringify(jwt.verify(req.body.id, serverJWT_Secret)));
        console.log("get specific file details");
        console.log(body);

        contractInstance.methods.addressToIpfsStruct(body.address,body.location).call().then((resultForPathAddressAndAMount)=>{
            var path = resultForPathAddressAndAMount.ipfsPath;
            MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function (err, database) {
                var db = database.db(DatabaseName)
                db.collection(PodcastCollectionName).find({ "uploadedBy":body.emailId,"location":body.location}).toArray((err, docs) => {
                    if (docs.length !== 0) {
                    
                        var purchasedUserList = docs[0].purchasedUserList;
                        var isPurchasedPodcast = false;
    
                        for(var i=0;i<purchasedUserList.length;i++){
                            if(purchasedUserList[i].emailId === jwtVerified.emailId){
                                isPurchasedPodcast = true;
                                break;
                            }
                        }
    
                        res.status(200).send(JSON.stringify({
                            uploadedByValue: docs[0].uploadedBy,
                            titleValue: docs[0].title,
                            tagsValue: docs[0].tags,
                            artistNameValue: docs[0].artistName,
                            createdDateTimeValue: moment(docs[0].createdDateTime).format('L'),
                            likesValue: (docs[0].likes).length,
                            amountValue: (resultForPathAddressAndAMount.amount !== undefined? resultForPathAddressAndAMount.amount : 0), 
                            isPaidPodcast: ((docs[0].uploadedBy !== jwtVerified.emailId) ? docs[0].isPodcastPaid : "false"),
                            isPurchasedPodcast: ((docs[0].uploadedBy !== jwtVerified.emailId) ? isPurchasedPodcast:"false"),
                            path:path,
                            isLikedPodcast: (((docs[0].likes).includes(jwtVerified.emailId)) ? "true" : "false"),
                            status: "Details fetched successfully!"
                        }));
                    }
                    else {
                        res.status(400).send(JSON.stringify({
                            status: "No file present with file id: "+body.id
                        }));
                    }    
                })
            })
        })
    }        
}
function likePodcast(req,res,next){
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        var body = JSON.parse(JSON.stringify(jwt.verify(req.body.id, serverJWT_Secret)));
        console.log(body);

        MongoClient.connect(DatabaseUrl,{useNewUrlParser:true},function(err,database){
            var db = database.db(DatabaseName);

            db.collection(PodcastCollectionName).updateOne({"uploadedBy":body.emailId,"address":body.address,"location":body.location},{$addToSet:{likes:jwtVerified.emailId}},function (err, updateResult) {
                res.status(200).send("success");
            })
        })
    }
}

exports.getUserInfo = getUserInfo;
exports.login = login;
exports.signup = signup;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.updateUserDetails = updateUserDetails;
exports.stripePurchaseToken = stripePurchaseToken;
exports.getTokenList = getTokenList;
exports.getAmountForTokenValue = getAmountForTokenValue;
exports.uploadfile = uploadfile;
exports.getLatestPodcast = getLatestPodcast;
exports.getUserPublishedPodcast = getUserPublishedPodcast;
exports.getPodcastDetailsForView = getPodcastDetailsForView;
exports.updatePodcastDetails = updatePodcastDetails;
exports.transferPodsToPurchase = transferPodsToPurchase;
exports.getPurchasedPodcastList = getPurchasedPodcastList;
exports.getPodcastForCurrUser = getPodcastForCurrUser;
exports.likePodcast = likePodcast;