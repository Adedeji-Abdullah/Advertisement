const Review = require("../models/Review");

// Create review
const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const review = await Review.create({
      advertisement: req.params.id,
      user: req.user.id,
      rating,
      comment,
    });

    res.status(201).json({
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get advertisement reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      advertisement: req.params.id,
    }).populate("user", "name profileImage");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  getReviews,
};
