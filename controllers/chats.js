const Chat = require('../models/chat')

module.exports = {
  create,
  get,
};

async function create(req, res) {
  const chat = new Chat({content: 'Chat content'});
  try {
    await chat.save();
    res.json(chat);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function get() {

}