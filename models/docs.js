"use strict";

const { Model } = require("objection");

class Docs extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "docs";
  }
}

module.exports = {
  Docs,
};
