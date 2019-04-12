import React from 'react';
import userService from '../../utils/userService'
import socket from '../../socket'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import Descrambler from '../../components/Descrambler/Descrambler'

class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
    chat: null,
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
      this.setState({serverMessage: err})
    }
    this.setState({content: ''})
  };

  render() {
    return (
      <div>
        {this.state.chat === false && <div>Inactive Code</div>}
        {this.state.chat === true && 
          (this.state.serverMessage
          ?
          <div>{this.state.serverMessage}</div>
          :
          <>
          <ChatWindow 
            {...this.props}
            content={this.state.content}
            messages={this.state.messages}
            chat={this.state.chat}
            user={this.state.user}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Descrambler />
          </>)
        }
      </div>
    );
  }
}

export default ChatPage;