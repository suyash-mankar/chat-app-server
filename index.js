// import express from 'express';
require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;

const db = require("./config/mongoose");

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("server running on port: ", port);
});
