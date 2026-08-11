const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log(
      "MongoDB URI not configured, continuing without database connection",
    );
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.log(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = connectDB;
