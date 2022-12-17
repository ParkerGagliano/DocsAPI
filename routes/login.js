const express = require("express");
const router = express.Router();
let LoginService = require("../services/login");

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





module.exports = router;