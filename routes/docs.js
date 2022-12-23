const express = require("express");
const router = express.Router();
let DocsService = require("../services/docs");
let auth = require("../middleware/authJWT");
const app = require("../app");

router.get("/", async (req, res) => {
  try {
    let response = await DocsService.getAll();
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.use(auth);

router.post("/", async (req, res) => {
  try {
    let data = {
      title: req.body.title,
      content: req.body.content,
      owner_id: req.body.owner_id,
    };
    let response = await DocsService.create(data);
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/owner", async (req, res) => {
  try {
    let response = await DocsService.getByOwderID(req.id);
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.patch("/owner", async (req, res) => {
  try {
    let data = {
      title: req.body.title,
      content: req.body.content,
      owner_id: req.body.owner_id,
      id: req.body.id,
    };
    let response = await DocsService.editDoc(data);
    res.send(response);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/owner", async (req, res) => {
  try {
    let response = await DocsService.deleteDoc(req.body.id);
    res.send(response);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
