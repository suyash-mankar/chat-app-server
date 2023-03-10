const express = require("express");
const router = express.Router();

const upload = require("../utils/upload");

const filesController = require("../controllers/files_controller.js");

// use upload as middleware to upload file to db
router.post("/upload", upload.single("file"), filesController.uploadFile);
router.get("/:filename", filesController.getFile);

module.exports = router;
