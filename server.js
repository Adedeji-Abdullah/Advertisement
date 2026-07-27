require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const connectDB = require("./config/database");

const authRoutes = require("./routes/authRoutes");
const advertisementRoutes = require("./routes/advertisementRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/users", userRoutes);

const favoriteRoutes = require("./routes/favoriteRoutes");

app.use("/api/favorites", favoriteRoutes);

const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Advertisement API is running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
