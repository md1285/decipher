import React from 'react';
import userService from '../../utils/userService'
import socket from '../../socket'
import ChatWindow from '../../components/ChatWindow/ChatWindow'

class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
    chat: '',
    serverMessage: '',
    user: '',
  };

  async componentDidMount() {
    socket.registerApp(this);
    this.setState({user: userService.getUser()})
    await socket.joinChat(this.props.match.params.id)
    if (this.state.chat) {
      this.setState({messages: this.state.chat.messages})
    }
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

        {this.state.chat === null
        ?
        <div>Invalid code</div>
        :

          this.state.serverMessage
          ?
          <div>{this.state.serverMessage}</div>
          :
          <ChatWindow 
            {...this.props}
            content={this.state.content}
            messages={this.state.messages}
            chat={this.state.chat}
            user={this.state.user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

        }
      </div>
    );
  }
}

export default ChatPage;