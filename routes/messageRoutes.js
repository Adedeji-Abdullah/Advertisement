const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  sendMessage,
  getInbox
} = require("../controllers/messageController");

// Send message to seller
router.post("/:id", protect, sendMessage);

// Get my inbox
router.get("/", protect, getInbox);

module.exports = router;
