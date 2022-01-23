const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://dinesh:dinesh@cluster0.qhbqm.mongodb.net/bebodywise?retryWrites=true&w=majority"
  );
};
