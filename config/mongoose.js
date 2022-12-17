const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASS}@cluster0.a5lh6b2.mongodb.net/?retryWrites=true&w=majority`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to MongoDB"));

db.once("open", function () {
  console.log("connected to database::MongoDB");
});

module.exports = db;
