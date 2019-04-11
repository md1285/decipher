const Chat = require('../models/chat')

module.exports = {
  create,
  getAllMessages,
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

async function getAllMessages(req, res) {
  try {
    const chat = await Chat.findById(req.params.id);
    res.json(chat.messages);
  } catch (err) {
    res.status(400).json(err);
  }
}