const express = require("express");
const app = express();

app.use(express.json());

// GET request (query parameter)
app.get("/name", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).send("Name is required as a query parameter.");
  }
  res.send(`Hello, ${name}!`);
});

// POST request (body parameter)
app.post("/name", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).send("Name is required in the request body.");
  }
  res.send(`Hello, ${name}!`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
