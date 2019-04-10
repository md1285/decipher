const socket = window.io();
let ChatPage = null;

// connect on componentDidMount
function registerApp(chat) {
  ChatPage = chat;
}


// Listen for messages from server
socket.on('new-message', function(){

  ChatPage.setState()
})

// Send messages to server
function sendMessage(id) {
  socket.emit('new-message', id)
}

// exports
export default {
  registerApp,
  sendMessage
};