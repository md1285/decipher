import tokenService from './utils/tokenService'
const socket = window.io();
let ChatPage = null;

// connect on componentDidMount
function registerApp(chat) {
  ChatPage = chat;
}


// Listen for messages from server
socket.on('new-message', async function(chat){
  await ChatPage.setState({
    messages: chat.messages,
    chat: true,
  });
  const user = tokenService.getUserFromToken();
  if (chat.descrambledFor.map(u => u._id).includes(user._id)) {
    await ChatPage.setState({descrambledForUser: true})
  }
  ChatPage.scrambleMessages();
  const chatWindow = document.getElementById('chat-window-messages-container');
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

socket.on('inactive-code', function() {
  ChatPage.setState({chat: false});
});

socket.on('unauthorized-user', function() {
  ChatPage.setState({serverMessage: 'You are not authorized to post in this room.'});
})

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