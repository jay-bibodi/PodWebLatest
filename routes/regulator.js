var fs = require('fs');
var moment = require('moment-timezone');
var jwt = require('jsonwebtoken');
var async = require('async');
var crypto = require('crypto');
var bcrypt = require('bcrypt');
var sgMail = require('@sendgrid/mail');
var detect = require('detect-file-type');

const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var FileReader = require('filereader')

sgMail.setApiKey("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");
var serverJWT_Secret = 'kpTxN=)7mX3W3SEJ58Ubt8-';

// Publishable key: pk_test_CoMBkQnIgd8vejmt3EsQTasU
// Secret key: sk_test_F2JU8TVN1he8TAAh90ByLXbr
var stripe = require("stripe")("sk_test_F2JU8TVN1he8TAAh90ByLXbr");
var tokenPrice = 1000000000000000; // expressed in wei //0.001; // expressed in ether.
global.fetch = require('node-fetch')
const cc = require('cryptocompare')
//var oneGweiToEther = 0.000000001;
var tokensAvailable = 600000;

var userInfoStructure = {
    "token": "",
    "name": "",
    "emailAddress": "",
    "secondaryEmailAddress": "",
    "userAddress": "",
    "city": "",
    "country": "",
    "postalCode": ""
};

console.log("Inside Regulator");

// load web3 configurations
let Web3 = require('web3');
const web3 = new Web3();

// load sol compiler
let solc = require('solc');

//connection establishing
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:7545'));

// mapping user to account, user to file contract
var contractInstance;
var input = {
    'Regulator.sol': fs.readFileSync('../contracts/Regulator.sol', 'utf8')
};
let compiledContract = solc.compile({ sources: input }, 1);
let abi = compiledContract.contracts['Regulator.sol:Regulator'].interface;
let bytecode = '0x' + compiledContract.contracts['Regulator.sol:Regulator'].bytecode;
var myContract = new web3.eth.Contract(JSON.parse(abi));
var myContractTx = myContract.deploy({ data: bytecode });

// Deploy pods token contract
var podsTokenContractInstance;
var podsTokenInput = {
    'PodsToken.sol': fs.readFileSync('../contracts/PodsToken.sol', 'utf8')
};
let podsTokenCompiledContract = solc.compile({ sources: podsTokenInput }, 1);
let podsTokenAbi = podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].interface;
let podsTokenBytecode = '0x' + podsTokenCompiledContract.contracts['PodsToken.sol:PodsToken'].bytecode;
var podsTokenContract = new web3.eth.Contract(JSON.parse(podsTokenAbi));
var podsTokenContractTx = podsTokenContract.deploy({ data: podsTokenBytecode, arguments: [1000000] });

// Deploy pods token sale contract
var podsTokenSaleContractInstance;
var podsTokenSaleInput = {
    'PodsToken.sol': fs.readFileSync('../contracts/PodsToken.sol', 'utf8'),
    'PodsTokenSale.sol': fs.readFileSync('../contracts/PodsTokenSale.sol', 'utf8')
};
let podsTokenSaleCompiledContract = solc.compile({ sources: podsTokenSaleInput }, 1);
let podsTokenSaleAbi = podsTokenSaleCompiledContract.contracts['PodsTokenSale.sol:PodsTokenSale'].interface;
let podsTokenSaleBytecode = '0x' + podsTokenSaleCompiledContract.contracts['PodsTokenSale.sol:PodsTokenSale'].bytecode;
var podsTokenSaleContract = new web3.eth.Contract(JSON.parse(podsTokenSaleAbi));
var podsTokenSaleContractTx;// = podsTokenSaleContract.deploy({data:podsTokenSaleBytecode,arguments:[1000000]});

addFileToIpfs();

function addFileToIpfs(){

    fs.readFile("../uploads/file-1540458990081", function (err, data) {
        if (err) throw err;
        console.log(data);
        detect.fromFile('../uploads/file-1540458990081', function(err, result) {
 
            if (err) {
              return console.log(err);
            }
         
            console.log(result); // { ext: 'jpg', mime: 'image/jpeg' }
          });
        /*ipfs.add(Buffer.from(data), (err, result) => {
            if (err || !result) {
              console.log("Unable to upload to IPFS API: "+err);
            } else {
                console.log(result);
            }
          })*/
    });
}

//  getEthAccounts and deployContract
var ethAccounts = [];
//getEthAccounts(deployContract);
function getEthAccounts(callback) {
    web3.eth.getAccounts(function(error, result) {
        if (error != null)
            console.log("Couldn't get accounts");
        ethAccounts = result;
        callback();
    });
}

function deployContract() {

    myContractTx.send({ from: ethAccounts[0], gas: 327027 }, function(error, transactionHash) { }).on('error', function(error) { })
        .on('transactionHash', function(transactionHash) { })
        .on('receipt', function(receipt) {
            console.log(receipt.contractAddress) // contains the new contract address
        })
        .on('confirmation', function(confirmationNumber, receipt) { })
        .then(function(newContractInstance) {
            console.log(newContractInstance.options.address) // instance with the new contract address
            contractInstance = newContractInstance
            podsTokenContractTx.send({ from: ethAccounts[0], gas: 4712388 }, function(error, transactionHash) { }).on('error', function(error) { })
                .on('transactionHash', function(transactionHash) { })
                .on('receipt', function(receipt) {
                    console.log(receipt.contractAddress) // contains the new contract address
                })
                .on('confirmation', function(confirmationNumber, receipt) { })
                .then(function(newContractInstance) {
                    console.log(newContractInstance.options.address) // instance with the new contract address
                    podsTokenContractInstance = newContractInstance
                    podsTokenSaleContract.deploy({ data: podsTokenSaleBytecode, arguments: [newContractInstance.options.address, tokenPrice] }).send({
                        from: ethAccounts[0],
                        gas: 4712388
                    }, function(error, transactionHash) { })
                        .on('error', function(error) { })
                        .on('transactionHash', function(transactionHash) { })
                        .on('receipt', function(receipt) {
                            console.log(receipt.contractAddress) // contains the new contract address
                        })
                        .on('confirmation', function(confirmationNumber, receipt) { })
                        .then(function(newContractInstance) {
                            console.log(newContractInstance.options.address) // instance with the new contract address
                            podsTokenSaleContractInstance = newContractInstance;
                            podsTokenContractInstance.methods.transfer(newContractInstance.options.address, tokensAvailable).send({ from: ethAccounts[0] }).then((receipt)=>{
                                console.log("Transfer 60% of the token to token sale")
                                console.log(receipt);
                            })
                        });
                });

        });
}

// Load db configurations
var MongoClient = require('mongodb').MongoClient;
var DatabaseUrl = "mongodb://podweb1:zyiF9C2bTNt75wpnpuJqpEoA0riWV8izvxINQzKxRHS1dJnE0SZ5otRhUGBEq3CWPmGjN6Rgn0KQrehqGRailA==@podweb1.documents.azure.com:10255/?ssl=true"; //process.env.DatabaseUri;
var DatabaseName = "podweb1";
var DatabaseCollectionName = "AppUser";

function login(req, res, next) {
    var userCredentials = JSON.parse(JSON.stringify(req.body));
    // console.log("Inside regulator login");

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
        if (err) throw new Error();
        var db = database.db(DatabaseName);

        db.collection(DatabaseCollectionName).findOne({ emailId: userCredentials.emailOfPerson }, function(err, result) {
            if (err) throw err;

            /*console.log("Get ETH balance");
            web3.eth.getBalance(result.address)
                .then(console.log);
            
            web3.eth.sendTransaction({from:ethAccounts[0], to:ethAccounts[1], value: web3.utils.toWei("10", "ether")});
            web3.eth.sendTransaction({from:ethAccounts[0], to:result.address, value: web3.utils.toWei("10", "ether")});
            
            web3.eth.getBalance(result.address)
                .then(console.log);*/

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
    console.log("Inside token sold");
    podsTokenSaleContractInstance.methods.tokensSold().call({ from: ethAccounts[0] }).then(console.log);
}

function signup(req, res, next) {
    var result = JSON.parse(JSON.stringify(req.body));

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
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
    /*console.log("Get ETH balance createUserAccount");
    web3.eth.getBalance(accountJson.address)
        .then(console.log);*/
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

        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).findAndModify(
                { emailId: userInfo.emailOfPerson },
                [],
                accountJson,
                { "upsert": "true" },
                function(error, object) {
                    if (!error) {
                        //console.log(ethAccounts[0]);
                        contractInstance.methods.storeEmailAddressMapping(accountJson.address, userInfo.emailOfPerson).send({ from: ethAccounts[0] }, function(error, result) {
                            console.log(error);
                            console.log(result);
                            if (result !== undefined) {
                                console.log("Account Address: " + accountJson.address);
                                contractInstance.methods.emailAddressMapping(accountJson.address).call({ from: ethAccounts[0] }).then(console.log);
                                //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);
                                                                
                                podsTokenContractInstance.methods.transfer(accountJson.address, 10).send({ from: ethAccounts[0] })
                                    .then(function(receipt) {
                                        //console.log("Inside get Receipt");
                                        //console.log(receipt);
                                        //podsTokenContractInstance.methods.balanceOf(ethAccounts[0]).call().then(console.log).catch(console.error);
                                        var jwtToken = jwt.sign({ emailId: userInfo.emailOfPerson }, serverJWT_Secret);
                                        console.log(jwt.verify(jwtToken, serverJWT_Secret));
                                        res.status(200).send({
                                            status: "Created Successfully",
                                            emailAddress: userInfo.emailOfPerson,
                                            token: jwtToken
                                        });
                                    });
                            }
                            else {
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

function forgotPassword(req, res, next) {
    console.log("Inside forgotPassword")

    crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        console.log("Token: " + token)
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).find({ "emailId": req.body.emailOfPerson }).toArray((err, result) => {
                if (err) throw err;
                if (result.length >= 1) {
                    var timeStamp = moment(new Date()).tz("America/Los_Angeles").format("MM/DD/YYYY hh:mm:ss a");
                    var updateRequestPasswordToken = { $push: { requestPassword: { $each: [{ "resetToken": token, "resetDateAndTime": timeStamp }] } } }

                    db.collection(DatabaseCollectionName).update(updateRequestPasswordToken, result[0], { upsert: true }, function(err, obj) {
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
function resetPassword(req, res, next) {

    MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
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
                    db.collection(DatabaseCollectionName).update({ "password": getEncryptedPassword(req.body.passwordOfPerson) }, result[0], { upsert: true }, function(err, obj) {
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

function updateUserDetails(req, res, next) {
    console.log("Inside update user details")

    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        console.log(req.body);
        var userInfo = JSON.parse(JSON.stringify(req.body));

        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)

            var myquery = { emailId: jwtVerified.emailId };
            var newvalues = { $set: { name: userInfo.userName, userAddress: userInfo.userAddress, secondaryEmailAddress: userInfo.userSecondaryEmail, city: userInfo.userCity, country: userInfo.userCountry, postalCode: userInfo.userPostalCode } };

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

function getUserInfo(req, res, next) {
    console.log("Inside getUserInfo");
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
            if (err) { console.log(err); throw new Error(); }
            var db = database.db(DatabaseName)
            db.collection(DatabaseCollectionName).find({ "emailId": jwtVerified.emailId }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                else {
                    var userInfoDetails = JSON.parse(JSON.stringify(userInfoStructure));
                    console.log(result);

                    podsTokenContractInstance.methods.balanceOf(result[0].address).call().then((balance) => {
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

function getTokenList(req, res, next) {
    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        res.status(400).send(JSON.stringify({
            status: "Invalid login credentials. Please login again!"
        }));
    }
    else {
        res.send(JSON.stringify({
            data: [
                { value: '25', viewValue: '25' },
                { value: '50', viewValue: '50' },
                { value: '75', viewValue: '75' },
                { value: '100', viewValue: '100' }
            ],
            status: "results fetched successfully"
        }));
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

                web3.eth.getGasPrice().then(getGasPrice => {
                    var gasPrice = getGasPrice;
                    console.log("What is gas price");
                    console.log(gasPrice);

                    web3.eth.estimateGas({
                        from: ethAccounts[0],
                        data: podsTokenSaleBytecode
                    })
                        .then((gas) => {
                            console.log("What is gas");
                            console.log(gas);

                            console.log("Gas * GasPrice")
                            console.log(gas * gasPrice);

                            var gasCostInString = (gas * gasPrice).toString();
                            console.log(gasCostInString);

                            var ethers = parseFloat(web3.utils.fromWei(gasCostInString, 'ether'))
                            console.log("Ethers: " + ethers);

                            var etherToDollar = parseFloat(ethers * price);
                            console.log("Ethers TO dollar: " + etherToDollar);

                            var tokenPriceInWei = (tokenPrice * tokens).toString();
                            var tokenPriceInEther = parseFloat(web3.utils.fromWei(tokenPriceInWei, 'ether'));
                            var tokenPriceInDollars = tokenPriceInEther * price;

                            res.send(JSON.stringify({
                                data: Math.ceil(tokenPriceInDollars + etherToDollar),
                                price: prices.USD,
                                tokens: tokenVal.totalToken,
                                gasPrice: gasPrice,
                                gas: gas,
                                status: "amount fetched successfully"
                            }));
                        });
                })
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

        console.log("Inside else stripe payment");
        var tokens = parseInt(purchaseTokenObj.tokens);
        console.log("Tokens:" + tokens);
        var price = parseFloat(purchaseTokenObj.price);
        console.log("price:" + price);
        var amount = parseFloat(purchaseTokenObj.amount);
        console.log("amount:" + amount);
        var gasPrice = parseInt(purchaseTokenObj.gasPrice);
        console.log("gasPrice:" + gasPrice);
        var gas = parseInt(purchaseTokenObj.gas);
        console.log("gas:" + gas);

        var tokenPriceInWei = (tokenPrice * tokens).toString();
        var tokenPriceInEther = parseFloat(web3.utils.fromWei(tokenPriceInWei, 'ether'));
        var tokenPriceInDollars = tokenPriceInEther * price;

        var gasCostInString = (gas * gasPrice).toString();
        console.log(gasCostInString);

        var ethers = parseFloat(web3.utils.fromWei(gasCostInString, 'ether'))
        console.log("Ethers: " + ethers);

        var etherToDollar = parseFloat(ethers * price);
        console.log("Ethers TO dollar: " + etherToDollar);

        var verifyAmount = Math.ceil(tokenPriceInDollars + etherToDollar);

        if (verifyAmount === amount) {
            const charge = stripe.charges.create({
                amount: (verifyAmount * 100), // expressed in cents
                currency: 'usd',
                description: 'Example charge',
                source: stripeId,
            });

            var id = jwtVerified.emailId;

            MongoClient.connect(DatabaseUrl, { useNewUrlParser: true }, function(err, database) {
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
                                // transfer ether
                                web3.eth.sendTransaction({from:ethAccounts[0], to:address, value: gasCostInString}).then((receipt)=>{
                                    console.log(receipt);

                                    podsTokenSaleContractInstance.methods.buyTokens(address,tokens).send({ from: ethAccounts[0], value:(tokens*tokenPrice)}).then((receipt)=>{
                                        console.log("Call tokenSold()");
                                        tokenSold();
                                        podsTokenContractInstance.methods.balanceOf(address).call().then(console.log).catch(console.error);
                                        res.status(200).send({
                                            status: "Tokens Credited"
                                        });
                                    })
                                });
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

exports.getUserInfo = getUserInfo;
exports.login = login;
exports.signup = signup;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;
exports.updateUserDetails = updateUserDetails;
exports.stripePurchaseToken = stripePurchaseToken;
exports.getTokenList = getTokenList;
exports.getAmountForTokenValue = getAmountForTokenValue;