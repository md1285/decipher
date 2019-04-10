const Chat = require('../models/chat')

module.exports = {
  create,
  getAllMessages,
  submitMessage,
};

async function create(req, res) {
  const chat = new Chat();
  try {
    chat.users.push(req.user)
    await chat.save();
    res.json(chat);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function submitMessage(req, res) {
  try {
    const chat = await Chat.findById(req.body.id);
    chat.messages.push({
      user: req.user._id,
      userName: req.user.userName,
      content: req.body.content,
    });
    await chat.save()
    res.json(chat);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllMessages(req, res) {
  try {
    const chat = await Chat.findById(req.params.id);
    res.json(chat.messages);
  } catch (err) {
    res.status(400).json(err);
  }
}