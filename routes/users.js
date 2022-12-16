const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users_controller.js");

router.post("/add", usersController.addUser);

module.exports = router;
