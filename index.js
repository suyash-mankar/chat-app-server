const express = require("express");
const app = express();
const port = 8000;

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("server running on port: ", port);
});
