import React from 'react';
import chatService from '../../utils/chatService'
// import {Redirect} from 'react-router-dom'

class CreateChat extends React.Component {

  state = {
    chats: []
  };

  handleCreateChat = async () => {
    const chat = await chatService.create();
    console.log(chat._id)
  }

  render() {
    return (
      <button
        onClick={this.handleCreateChat}
      >Create Chat</button>
    )
  }
}

export default CreateChat;