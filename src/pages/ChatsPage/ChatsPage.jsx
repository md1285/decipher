import React from 'react';
import chatService from '../../utils/chatService'

class CreateChat extends React.Component {

  state = {
    chats: []
  };

  handleCreateChat = () => {
    chatService.create();
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