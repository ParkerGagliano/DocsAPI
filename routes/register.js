const express = require("express");
const router = express.Router();
let bcrypt = require("bcrypt");
let registerService = require("../services/register");

router.post("/", async (req, res) => {
  try {
    let { username, password } = req.body;
    if (username && password) {
      let data = { username: username, password: bcrypt.hashSync(password, 8) };
      let response = await registerService.registerUser(data);
      res.send(response);
    } else {
      res.send("need username and password");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
