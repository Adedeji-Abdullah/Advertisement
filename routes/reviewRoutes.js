const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const { createReview, getReviews } = require("../controllers/reviewController");

// Add review to advertisement
router.post("/:id", protect, createReview);

// Get advertisement reviews
router.get("/:id", getReviews);

module.exports = router;
