const User = require("../models/User");
const Advertisement = require("../models/Advertisement");
const bcrypt = require("bcryptjs");

// Get my profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// Update my profile
const updateProfile = async (req, res) => {
  try {
    const {
      name,
      phone
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    user.name = name || user.name;
    user.phone = phone || user.phone;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


// Get my advertisements
const getMyAdvertisements = async (req, res) => {
  try {
    const advertisements = await Advertisement.find({
      owner: req.user.id
    });

    res.json(advertisements);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Change password
const changePassword = async (req, res) => {
  try {
    const {
      oldPassword,
      newPassword
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      oldPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Old password is incorrect"
      });
    }

    user.password = await bcrypt.hash(
      newPassword,
      10
    );

    await user.save();

    res.json({
      message: "Password changed successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Forgot password request
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const resetCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.resetPasswordCode = resetCode;

    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    res.json({
      message: "Reset code generated successfully",
      code: resetCode
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Reset password
const resetPassword = async (req, res) => {
  try {
    const {
      email,
      code,
      newPassword
    } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (
      user.resetPasswordCode !== code ||
      user.resetPasswordExpire < Date.now()
    ) {
      return res.status(400).json({
        message: "Invalid or expired reset code"
      });
    }

    user.password = await bcrypt.hash(
      newPassword,
      10
    );

    user.resetPasswordCode = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({
      message: "Password reset successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get public seller profile
const getSellerProfile = async (req, res) => {
  try {
    const User = require("../models/User");
    const Advertisement = require("../models/Advertisement");

    const user = await User.findById(req.params.id)
      .select("name phone profileImage createdAt");

    if (!user) {
      return res.status(404).json({
        message: "Seller not found"
      });
    }


    const advertisements = await Advertisement.find({
      owner: req.params.id
    });


    res.json({
      user,
      advertisements
    });


  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getMyAdvertisements,
  changePassword,
  forgotPassword,
  resetPassword,
  getSellerProfile
};
