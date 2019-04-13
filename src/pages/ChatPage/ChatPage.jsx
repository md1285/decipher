import React from 'react';
import userService from '../../utils/userService'
import socket from '../../socket'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import Descrambler from '../../components/Descrambler/Descrambler'
import chatService from '../../utils/chatService';

const randChars = '!@#$%^&*()<>?/_'


class ChatPage extends React.Component {

  state = {
    content: '',
    messages: [],
    chat: null,
    serverMessage: '',
    user: '',
    scrambleKey: 3,
    scrambledMessages: [],
  };

  async componentDidMount() {
    socket.registerApp(this);
    this.setState({ user: userService.getUser() })
    await socket.joinChat(this.props.match.params.id)
    if (this.state.chat) {
      this.setState({ messages: this.state.chat.messages })
      this.scrambleMessages();
    }
  }

  // componentWillReceiveProps(props) {
  //   this.scrambleMessages(props);
  // }



  /* helper functions */
  scrambleMessages() {
    const newScrambledMessages = chatService.scrambleAllOrNewMessages(this.state.messages, this.state.scrambledMessages, this.state.scrambleKey, randChars);
    this.setState({
      scrambledMessages: newScrambledMessages,
    })
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await socket.sendMessage({
        content: this.state.content,
        id: this.props.match.params.id,
      });
    } catch (err) {
      this.setState({ serverMessage: err })
    }
    this.setState({ content: '' })
    // this.scrambleMessages();
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
                // scrambleKey={this.state.scrambleKey}
                scrambledMessages={this.state.scrambledMessages}

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