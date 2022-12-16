// import express from "express";
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.end("<h1> working </h1>"));

module.exports = router;
