import React from 'react';
import chatService from '../../utils/chatService';

class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const content = this.state.content;
      const id = this.props.match.params.id;
      const chat = await chatService.submitMessage(content, id);
      this.setState({messages: chat.messages})
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
      </div>
    );
  }
}

export default ChatPage;