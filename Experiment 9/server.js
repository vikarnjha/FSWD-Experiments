const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON request body

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema and Model
const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", UserSchema);

// POST Route to Add a User
app.post("/user", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.send("User saved");
  } catch (error) {
    res.status(500).send("Error saving user: " + error.message);
  }
});

//  GET Route to Fetch All Users
app.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
