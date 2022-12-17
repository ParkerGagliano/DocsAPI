const express = require("express");
const router = express.Router();
let DocsService = require("../services/docs");

router.post("/", async (req, res) => {
    let {username, password} = req.body
    if (username && password) {

    }
    else {
        res.send("need username and password")
    }

});





module.exports = router;