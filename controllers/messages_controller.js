const Message = require("../models/Message");
const Conversation = require("../models/Conversation");

module.exports.addMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);

    // update the message field in Conversation model
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    res.status(200).json({ message: "Message has been sent successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getMessage = async (req, res) => {
  try {
    let messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err);
  }
};
