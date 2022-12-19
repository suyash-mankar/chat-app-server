const Conversation = require("../models/Conversation");

// create a new conversation
module.exports.addConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    // find if the conversation already exists
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (conversation) {
      return res.status(200).json({ msg: "conversation already exists" });
    }

    // create a new conversation with senderId and receiverId
    const newConversation = await Conversation.create({
      members: [senderId, receiverId],
    });

    return res.status(200).json({ msg: "conversation created successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

// get the conversation with given senderId and receiverId
module.exports.getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    // find the conversation with members
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};
