const User = require("../models/User");
const Advertisement = require("../models/Advertisement");
const Review = require("../models/Review");
const Message = require("../models/Message");


// Dashboard statistics
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAdvertisements =
      await Advertisement.countDocuments();
    const totalReviews =
      await Review.countDocuments();
    const totalMessages =
      await Message.countDocuments();

    res.json({
      totalUsers,
      totalAdvertisements,
      totalReviews,
      totalMessages
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password");

    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    await user.deleteOne();

    res.json({
      message: "User deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getDashboardStats,
  getUsers,
  deleteUser
};
