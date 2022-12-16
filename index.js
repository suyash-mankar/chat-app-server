require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const bodyParser = require("body-parser");
const db = require("./config/mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("server running on port: ", port);
});
