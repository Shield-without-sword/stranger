const Event = require("../models/Event");
const shortid = require("shortid");

exports.createEvent = async (req, res) => {
  const { name, description, address, date } = req.body;
  const eventLink = `${process.env.BASE_URL}/event/${shortid.generate()}`;

  const event = new Event({ userId: req.user.id, name, description, address, date, link: eventLink });

  try {
    await event.save();
    res.json({ message: "Event created successfully", event });
  } catch (err) {
    res.status(500).json({ error: "Error creating event" });
  }
};
