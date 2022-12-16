const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users_controller.js");

router.get("/", usersController.getUsers);
router.post("/add", usersController.addUser);

module.exports = router;
