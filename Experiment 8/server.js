const express = require("express");
const app = express();

app.get("/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

app.listen(3000, () => console.log("Server running on port 3000"));