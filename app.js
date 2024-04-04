const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = 3000;

const obj = {
  title: "Hola Nacho",
};

// Use CORS
app.use(cors());

// Define a route to serve the HTML file
app.get("/home", (req, res) => {
  res.json(obj);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
