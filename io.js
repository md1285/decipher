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
      const chat = await Chat.findById(id).populate('users');
      const user = await validateToken(token);
      if (!user) return;
      // if user is authorized on chat
      const authorized = chat.users.map(u => u.id).includes(user._id);
      if (authorized) {
        chat.messages.push({
          content: content,
          user: user._id,
          userName: user.userName,
        });
        await chat.save();
        socket.join(chat._id, function() {
          io.to(chat._id).emit('new-message', {chat});
        });

      } else {
        const code = Math.random().toString(16).substr(2,)
        socket.join(`unauthorized-user-${code}`, function() {
          io.to(`unauthorized-user-${code}`).emit('unauthorized-user');
        });
      }
    })

    socket.on('join-chat', async function({code, token}){
      try {
        const chat = await Chat.findById(code).populate('users descrambledFor');
        const user = await validateToken(token);
        if (!user) return;
        if (!chat.users.map(u => u.id).includes(user._id)) {
          chat.users.push(user._id)
          await chat.save()
        }
        let descrambledForUser;
        if (chat.descrambledFor.map(u => u.id).includes(user._id)) {
          descrambledForUser = true;
        } else {
          descrambledForUser = false;
        }
        socket.join(chat._id, function() {
          io.to(chat._id).emit('new-message', {chat, descrambledForUser})
        });
      } catch (err){
        const roomCode = Math.random().toString(16).substr(2,)
        socket.join(`inactive-code-${roomCode}`, function(){
          io.to(`inactive-code-${roomCode}`).emit('inactive-code')
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
