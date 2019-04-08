const User = require('../models/user');

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {

}