const express = require("express");
const { createEvent } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/create", authMiddleware, createEvent);

module.exports = router;
