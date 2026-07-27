const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    profileImage: {
      type: String
    },
    
    favorites: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advertisement"
  }
],
    resetPasswordCode: {
      type: String
    },

   resetPasswordExpire: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
