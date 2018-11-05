var constants = require('./constants');
var jwt = require('jsonwebtoken');

function validateUser(req)
{
    console.log("Inside validate User");
    console.log(req.headers);
    console.log(constants.serverJWT_Secret);

    var headers = JSON.parse(JSON.stringify(req.headers));
    var jwtVerified = JSON.parse(JSON.stringify(jwt.verify(headers.token, constants.serverJWT_Secret)));

    if (jwtVerified.emailId !== headers.emailaddress) {
        return {"emailId":"","validate":false};
    }
    else{
        return {"emailId":jwtVerified.emailId,"validate":true};
    }
}

exports.validateUser = validateUser;