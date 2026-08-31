const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  getProfile,
  updateProfile,
  getMyAdvertisements,
  changePassword,
  forgotPassword,
  resetPassword,
  getSellerProfile,
} = require("../controllers/userController");

// Get my profile
router.get("/profile", protect, getProfile);

// Update my profile
router.put("/profile", protect, updateProfile);

// Get my advertisements
router.get("/my-ads", protect, getMyAdvertisements);

// Change password
router.put("/change-password", protect, changePassword);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Reset password
router.post("/reset-password", resetPassword);

// Public seller profile
router.get("/seller/:id", getSellerProfile);

module.exports = router;
