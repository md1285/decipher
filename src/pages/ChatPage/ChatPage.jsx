import React from 'react';
import chatService from '../../utils/chatService';
import socket from '../../socket'

class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
  };

  async componentDidMount() {
    socket.registerApp(this);
    const messages = await chatService.getAllMessages(this.props.match.params.id);
    this.setState({messages})
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      socket.sendMessage({
        content: this.state.content, 
        id: this.props.match.params.id,
      });
    } catch (err) {
      alert(`There was an error: ${err}`)
    }
    this.setState({content: ''})
  };

  render() {
    return (
      <div>
        <h1>Chat Page {this.props.match.params.id}</h1>
        <form
          onSubmit={this.handleSubmit}
        >
          <input 
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button
            type='submit'
            disabled={this.state.content === ''}
          >Submit</button>
        </form>
        <div>
          {this.state.messages.map(m => (
            <div
              key={m._id}
            >{m.userName}: {m.content}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChatPage;