const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.end("<h1> working </h1>"));

router.use("/users", require("./users"));
router.use("/conversations", require("./conversations"));
router.use("/messages", require("./messages"));
router.use("/files", require("./files"));

module.exports = router;
