// use gridfs-stream to download the files
var Grid = require("gridfs-stream");

const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASS}@cluster0.a5lh6b2.mongodb.net/?retryWrites=true&w=majority`
);
const db = mongoose.connection;

let gfs, gridFsBucket;

// after connection is open
db.once("open", function () {
  gridFsBucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "fs",
  });
  gfs = Grid(db, mongoose.mongo);
  gfs.collection("fs");
});

// send the file URL in response after uploading it
module.exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json("file not found");
    }
    const fileUrl = `${process.env.SERVER_URL}/files/${req.file.filename}`;
    return res.status(200).json(fileUrl);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// to download file
module.exports.getFile = async (req, res) => {
  try {
    // find the file in mongoDB
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    return res.status(500).json(err);
  }
};
