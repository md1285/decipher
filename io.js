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
    socket.on('new-message', function() {
      io.emit('new-message');
    })


  });
}