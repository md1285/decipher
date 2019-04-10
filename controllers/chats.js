const Chat = require('../models/chat')

module.exports = {
  create,
  get,
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
  console.log(req.body);
  try {
    const chat = await Chat.findById(req.body.id);
    chat.messages.push({
      user: req.user,
      content: req.body.content,
    });
    await chat.save()
    res.json(chat);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function get() {

}