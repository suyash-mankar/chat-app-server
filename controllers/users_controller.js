const User = require("../models/User");

module.exports.addUser = async (req, res) => {
  try {
    let user = await User.findOne({ sub: req.body.sub });
    if (user) {
      return res.status(200).json({ msg: "user already exists" });
    }
    const newUser = await User.create(req.body);
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    let users = await User.find({});
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};
