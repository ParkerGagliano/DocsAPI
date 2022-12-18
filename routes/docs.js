const express = require("express");
const router = express.Router();
let DocsService = require("../services/docs");
let auth = require("../middleware/authJWT");
const app = require("../app");

router.post("/", async (req, res) => {
    console.log(req.formdata)
    try {
        let data = {title: req.body.title, content: req.body.content, owner_id: req.body.owner_id};
        console.log(req.body.title)
        let response = await DocsService.create(data)
        res.send(response);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    });




router.get("/", async (req, res) => {
    console.log('test2')
    try {
        let response = await DocsService.getAll();
        res.send(response);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});


router.get("/owner", async (req, res) => {
    try {
        let response = await DocsService.getByOwderID();
        console.log(response)
        res.send(response);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});


module.exports = router;