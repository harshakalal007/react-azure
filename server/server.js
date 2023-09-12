const express = require('express');

const app = express();


app.get("/check", (req, res) => {
  res.send({
    message: "Lekim your server is working"
  })
})

app.listen(3007, () => {
  console.log("Server is running.");
})