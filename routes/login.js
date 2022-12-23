const express = require("express");
const router = express.Router();
let LoginService = require("../services/login");
let auth = require("../middleware/authJWT");
const verifyToken = require("../middleware/authJWT");

router.post("/", async (req, res) => {
  try {
    let { username, password } = req.body;
    let data = { username: username, password: password };
    if (username && password) {
      let response = await LoginService.loginUser(data);
      res.send(response);
    } else {
      res.send("need username and password");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
