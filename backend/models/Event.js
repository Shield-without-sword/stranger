const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  description: String,
  address: String,
  date: Date,
  link: String,
});

module.exports = mongoose.model("Event", EventSchema);
