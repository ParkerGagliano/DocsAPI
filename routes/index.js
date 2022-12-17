let docs = require("./docs");
let router = require("express").Router();
let register = require("./register")

router.use("/api/docs", docs);
router.use("/api/register", register);




module.exports = router;