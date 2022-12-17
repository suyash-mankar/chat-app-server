const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const url = `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASS}@cluster0.a5lh6b2.mongodb.net/?retryWrites=true&w=majority`;

// Create a storage object with a given configuration
const storage = new GridFsStorage({
  url,
  file: (req, file) => {
    return {
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

// Set multer storage engine to the newly created object
module.exports = multer({ storage });
