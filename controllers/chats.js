const Chat = require('../models/chat')

module.exports = {
  create,
  getChat,
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

async function getChat(req, res) {
  // try {
    const chat = await Chat.findById(req.params.id);
    if (chat) {
      res.json(chat);
    } else {
      res.json(null)
    }
  // } catch (err) {
  //   res.status(400).json(err);
  // }
}