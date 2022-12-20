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
        res.cookie("session", "123456", { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })
        res.send(response)
    }
    else {
        res.send("need username and password")
    }
});




module.exports = router;