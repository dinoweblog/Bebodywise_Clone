const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
