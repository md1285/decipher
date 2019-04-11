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
      const chat = await Chat.findById(id);
      const user = await validateToken(token);
      if (!user) return;
      chat.messages.push({
        content: content,
        user: user._id,
        userName: user.userName,
      });
      await chat.save();
      socket.join(chat._id, function() {
        io.to(chat._id).emit('new-message', chat);
      });
    })

    socket.on('join-chat', async function({code, token}){
      const chat = await Chat.findById(code);


      const user = await validateToken(token);

      if (!user) return;
      if (!chat) {
        socket.join('inactive-code', function(){
          io.to('inactive-code').emit('inactive-code')
        });
      } else {
        // if (!chat.users.includes(user._id)) {
        //   chat.users.push(user._id)
        //   await chat.save()
        // }
        socket.join(chat._id, function() {
          io.to(chat._id).emit('new-message', chat)
        });
      }
    });

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
