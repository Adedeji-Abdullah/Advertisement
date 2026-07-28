const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  createAdvertisement,
  getAdvertisements,
  getAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  searchAdvertisements,
  getByCategory
} = require("../controllers/advertisementController");


// Search advertisements
router.get("/search", searchAdvertisements);

// Get advertisements by category
router.get("/category/:category", getByCategory);

// Get all advertisements
router.get("/", getAdvertisements);

// Get single advertisement
router.get("/:id", getAdvertisement);

// Create advertisement
router.post(
  "/",
  protect,
  upload.single("image"),
  createAdvertisement
);
// Update advertisement
router.put("/:id", protect, updateAdvertisement);

// Delete advertisement
router.delete("/:id", protect, deleteAdvertisement);


module.exports = router;
