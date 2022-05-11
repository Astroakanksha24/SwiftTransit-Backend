const mongoose = require("mongoose");

const user = new mongoose.Schema({
  _id: {type: String},
  password: {type: String},
  name: {type: String},
  email: {type: String},
  phoneNumber: {type: String},
  aadharNumber: {type: String}
});

module.exports = mongoose.model("User", user);