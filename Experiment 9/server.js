const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", UserSchema);

app.post("/user", async (req, res) => {
    const user = new User({ name: req.body.name });
    await user.save();
    res.send("User saved");
});

app.listen(3000, () => console.log("Server running on port 3000"));