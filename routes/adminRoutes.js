const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getDashboardStats,
  getUsers,
  deleteUser
} = require("../controllers/adminController");

// Dashboard statistics
router.get("/dashboard", protect, admin, getDashboardStats);

// Get all users
router.get("/users", protect, admin, getUsers);

router.delete("/users/:id", protect, admin, deleteUser);

module.exports = router;
