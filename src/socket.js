import chatService from './utils/chatService'
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

// Send messages to server
function sendMessage({content, id}) {
  const token = tokenService.getToken();
  socket.emit('new-message', {content, id, token})
}

// exports
export default {
  registerApp,
  sendMessage
};