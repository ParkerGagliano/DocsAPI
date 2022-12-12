let docs = require("./docs");
let router = require("express").Router();

router.use("/api/docs", docs);


module.exports = router;