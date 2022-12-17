let {Users} = require("../models/users");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");


module.exports = {
    async loginUser(data) {
        
        try {
            let user = await Users.query().where("username", (data.username).toLowerCase())
           
            let passwordIsValid = bcrypt.compareSync(
                data.password,
                user[0].password
              );
            if (!passwordIsValid) {
                return res.status(401)
                  .send({
                    accessToken: null,
                    message: "Invalid Password!"
                  });
              }
              //signing token with user id
            let token = jwt.sign({
            id: user.id
            }, "84fda5f67869ca09e7cb52f63192b8c88e8dcd2a7c16ee83bea5ecbf1aa3874dde3545", {
            expiresIn: 200
            });


            return {
                user: {
                  id: user[0].id,
                  username: user[0].username,
                },
                message: "Login successfull",
                accessToken: token,
              }
        }
        catch(err) {
            return err
        }
    }
}