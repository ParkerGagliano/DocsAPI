const express = require("express");
const router = express.Router();
let LoginService = require("../services/login");
let auth = require("../middleware/authJWT");
const verifyToken = require("../middleware/authJWT");

router.post("/", async (req, res) => {
    
    let {username, password} = req.body
    let data = {"username": username, "password": password}
    if (username && password) {
        let response = await LoginService.loginUser(data)
        console.log(response)
        res.send(response)
    }
    else {
        res.send("need username and password")
    }
});

router.use(auth)

router.get("", async (req, res) => {
    if (!req.user) {
        console.log('dnasjkdas')
        
    }
    else {
        res.send('Josh is an andy')
    }

})



module.exports = router;