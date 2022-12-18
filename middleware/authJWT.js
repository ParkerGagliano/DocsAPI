
const jwt = require("jsonwebtoken");
let {Users} = require("../models/users");
//decode.id seems like its better because its getting the id of the user based on the token
//for now im going to just make the user_id from request itself. 
function verifyToken (req, res, next)  {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], "84fda5f67869ca09e7cb52f63192b8c88e8dcd2a7c16ee83bea5ecbf1aa3874dde3545", function (err, decode) {
        if (err) {req.user = undefined;
        res.send(err); console.log(err)}
        else {
            try {
                //req.user =  findUser(decode.id)
                req.id = req.headers.authorization.split(' ')[2]
                next();
            }
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
      }
    )}
    else {
        res.send('No or wrong token')
    }
}

module.exports = verifyToken;


