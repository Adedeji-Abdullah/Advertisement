import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import User from "./model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// const CONN = String(process.env.CONN || "");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const CONN =
  process.env.NODE_ENV === "production" ? process.env.CONN2 : process.env.CONN;

// app.post("/users", async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         if (!name || !email || !password) {
//             return res.status(400).json({ error: "Name, email, and password are required" });
//         }
//         const userAvailable = await User.findOne({ email });
//         if (userAvailable) {
//             return res.status(200).json({message: "Proceed, user can register"})
//         }

//     } catch (error) {
//         console.error("Error creating user:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// });

app.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (error) {
        res.status(401).json({ message: "Invalid token" });
      }
    });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const start = async () => {
  try {
    await mongoose.connect(CONN);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
};

start();
