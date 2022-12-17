
const jwt = require("jsonwebtoken");
let {Users} = require("../models/docs");

const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], "84fda5f67869ca09e7cb52f63192b8c88e8dcd2a7c16ee83bea5ecbf1aa3874dde3545", function (err, decode) {
        if (err) req.user = undefined;
        try {
            req.user = Users.query().where("id", decode.id)
            next();
        }
        catch {
            res.send('jeoaeasdnjlaks')
        }
      }
    )}
    else {
        
        res.send('dnakoldsal')
    }
}

module.exports = verifyToken;