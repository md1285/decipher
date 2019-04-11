const jwt = require('jsonwebtoken');
const Chat = require('./models/chat')
let io;

module.exports = {
  init
};

function init(http) {
  io = require('socket.io')(http);
  io.on('connection', function(socket) {

    // all listeners here
    socket.on('new-message', async function({content, id, token}) {
      const user = await validateToken(token);
      if (!user) return;
      let chat = await Chat.findById(id);
      chat.messages.push({
        content: content,
        user: user._id,
        userName: user.userName,
      });
      await chat.save();
      io.emit('new-message', chat);
    })

  });
}

// helper functions
function validateToken(token) {
  return new Promise(function(resolve) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) resolve(false);
      resolve(decoded.user);    
    });
  });
}
