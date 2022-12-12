"use strict";
//let db = require("./database.js")
let express = require("express");
let app = (module.exports = express());
const cors = require("cors");
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE"],
}
app.use(cors(corsOpts));
const Knex = require("knex");
const knexConfig = require("./knexfile");
const { Model } = require("objection");
const { docs } = require("./models/docs");
const routes = require("./routes");

const knex = Knex(knexConfig.development);
// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);
async function createSchema() {
  if (await knex.schema.hasTable("docs")) {
    return;
  }
  // Create database schema. You should use knex migration files
  // to do this. We create it here for simplicity.
  await knex.schema.createTable("docs", (table) => {
    table.increments("id").primary();
    table.string("title")
    table.string("content")
  });
}
createSchema();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let apiKeys = ["tochangeonaws"];


app.use(routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
