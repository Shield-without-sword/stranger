const RSVP = require("../models/RSVP");
const { generateQR } = require("../utils/qrGenerator");
const { sendEmail } = require("../utils/emailService");

exports.handleRSVP = async (req, res) => {
  const { eventId, guestEmail, status } = req.body;
  const qrCode = await generateQR(guestEmail);

  const rsvp = new RSVP({ eventId, guestEmail, status, qrCode });

  try {
    await rsvp.save();
    await sendEmail(guestEmail, qrCode);
    res.json({ message: "RSVP received, QR code sent" });
  } catch (err) {
    res.status(500).json({ error: "Error handling RSVP" });
  }
};
