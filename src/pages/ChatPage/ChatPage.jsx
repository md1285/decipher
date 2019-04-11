import React from 'react';
import chatService from '../../utils/chatService';
import socket from '../../socket'
import ChatWindow from '../../components/ChatWindow/ChatWindow'

class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
    chat: '',
  };

  async componentDidMount() {
    socket.registerApp(this);
    await socket.joinChat(this.props.match.params.id)
    // const chat = await chatService.getChat(this.props.match.params.id);
    // this.setState({
    //   chat,
    // })
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
        {this.state.chat !== null
        ?
        <ChatWindow 
          {...this.props}
          content={this.state.content}
          messages={this.state.messages}
          chat={this.state.chat}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        :
        <div>Invalid code</div>
        }
      </div>
    );
  }
}

export default ChatPage;