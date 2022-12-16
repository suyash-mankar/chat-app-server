const express = require("express");
const router = express.Router();

const conversationsController = require("../controllers/conversations_controller.js");

router.post("/add", conversationsController.addConversation);

module.exports = router;
