const express = require('express');
const path = require('path');

const app = express();
require("dotenv").config();
const port = process.env.PORT ; 

app.use(express.static("./client/build"));

app.get("/", (req, res) => {
  res.send({ message: "Hey, you are using render to deploy." });
});

app.get("/check", (req, res) => {
  res.send({
    message: "Lekim your server is working"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
