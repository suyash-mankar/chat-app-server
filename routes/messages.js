const express = require("express");
const router = express.Router();

const messagesController = require("../controllers/messages_controller.js");

router.post("/add", messagesController.addMessage);
router.get("/get/:id", messagesController.getMessage);

module.exports = router;
