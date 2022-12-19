const User = require("../models/User");

// create a new user
module.exports.addUser = async (req, res) => {
  try {
    // find if the user already exists
    let user = await User.findOne({ sub: req.body.sub });
    if (user) {
      return res.status(200).json({ msg: "user already exists" });
    }
    // create user
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// get all the users
module.exports.getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};
