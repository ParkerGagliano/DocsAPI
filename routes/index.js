let docs = require("./docs");
let router = require("express").Router();
let register = require("./register");
let login = require("./login");

router.use("/api/docs", docs);
router.use("/api/register", register);
router.use("/api/login", login);

module.exports = router;
