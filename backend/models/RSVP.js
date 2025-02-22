const mongoose = require("mongoose");

const RSVPSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  guestEmail: String,
  status: { type: String, enum: ["accepted", "declined"], default: "pending" },
  qrCode: String,
});

module.exports = mongoose.model("RSVP", RSVPSchema);
