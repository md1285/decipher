import React from 'react';
import chatService from '../../utils/chatService'

class ChatsPage extends React.Component {

  state = {
    chats: [],
    code: '',
  };

  handleCreateChat = async () => {
    const chat = await chatService.create();
    this.props.history.push(`/chats/${chat._id}`)
  }

  handleJoinChat = e => {
    e.preventDefault();
    this.props.history.push(`/chats/${this.state.code}`)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <>

      <button
        onClick={this.handleCreateChat}
      >Create Chat</button>
      
      <form onSubmit={this.handleJoinChat}>
      <input
        type='text'
        name='code'
        placeholder='Enter code'
        value={this.state.code}
        onChange={this.handleChange}
      />
      <button type='submit'>Join Chat</button>
      </form>

      </>
    )
  }
}

export default ChatsPage;