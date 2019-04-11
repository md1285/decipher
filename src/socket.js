import chatService from './utils/chatService'
const socket = window.io();
let ChatPage = null;

// connect on componentDidMount
function registerApp(chat) {
  ChatPage = chat;
}


// Listen for messages from server
socket.on('new-message', async function(id){
  console.log('client message received', id);
  let messages = await chatService.getAllMessages(id);
  console.log(messages)
  ChatPage.setState({messages})

})

// Send messages to server
function sendMessage(message, id) {
  socket.emit(message, id)
}

// exports
export default {
  registerApp,
  sendMessage
};