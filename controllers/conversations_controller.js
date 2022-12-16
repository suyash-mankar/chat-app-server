const Conversation = require("../models/Conversation");

module.exports.addConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (conversation) {
      return res.status(200).json({ msg: "conversation already exists" });
    }

    const newConversation = await Conversation.create({
      members: [senderId, receiverId],
    }); 

    return res.status(200).json({ msg: "conversation created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
