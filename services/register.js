let { Users } = require("../models/users");

module.exports = {
  async registerUser(data) {
    try {
      let ins = await Users.query().insertGraph(data);
      return ins;
    } catch (err) {
      return err;
    }
  },
};
