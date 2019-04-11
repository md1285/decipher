import tokenService from './utils/tokenService'
const socket = window.io();
let ChatPage = null;

// connect on componentDidMount
function registerApp(chat) {
  ChatPage = chat;
}


// Listen for messages from server
socket.on('new-message', function(chat){
  ChatPage.setState({messages: chat.messages})
})

socket.on('inactive-code', function() {
  ChatPage.setState({chat: null});
});

// Send messages to server
function sendMessage({content, id}) {
  const token = tokenService.getToken();
  socket.emit('new-message', {content, id, token})
}

function joinChat(code) {
  const token = tokenService.getToken();
  socket.emit('join-chat', {code, token})
}

// exports
export default {
  registerApp,
  sendMessage,
  joinChat,
};