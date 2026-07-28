const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");

const {
  addFavorite,
  removeFavorite,
  getFavorites
} = require("../controllers/favoriteController");


// Add advertisement to favorites
router.post("/:id", protect, addFavorite);

// Remove advertisement from favorites
router.delete("/:id", protect, removeFavorite);

// Get my favorites
router.get("/", protect, getFavorites);


module.exports = router;
