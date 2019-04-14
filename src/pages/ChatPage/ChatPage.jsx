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
    descrambleKeyLeft: 0,
    descrambleKeyRight: 0,
    descramblerSettingLeft: 4,
    descramblerSettingRight: 4,
    challengeRating: 0,
    scrambledMessages: [],
  };

  /* lifecycle methods */
  async componentDidMount() {
    socket.registerApp(this);
    this.setState({
      user: userService.getUser(),
      descrambleKeyLeft: Math.floor(Math.random() * 10),
      descrambleKeyRight: Math.floor(Math.random() * 10),
    })
    await socket.joinChat(this.props.match.params.id)
    if (this.state.chat) {
      await this.setState({
        messages: this.state.chat.messages,
      })
      this.scrambleMessages();
    }
  }


  /* helper functions */
  scrambleMessages() {
    let scrambleKey =  this.getScrambleKey();
      console.log('sk: ' + scrambleKey)
    const newScrambledMessages = chatService.scrambleAllOrNewMessages(this.state.messages, this.state.scrambledMessages, scrambleKey, randChars);
    this.setState({
      scrambledMessages: newScrambledMessages,
    })
  }

  getScrambleKey() {
    return chatService.getScrambleKey(this.state.challengeRating, this.state.descramblerSettingLeft, 
      this.state.descramblerSettingRight, this.state.descrambleKeyLeft, this.state.descrambleKeyRight);
  }

  reScrambleAllMessages() {
    const key = this.getScrambleKey();
    console.log(key)
    const scrambledMessages = chatService.reScrambleAllMessages(this.state.messages, key, randChars);
    this.setState({scrambledMessages});
  }


  /* handlers */
  handleChange = async e => {
    if (e.target.name === 'descramblerSettingLeft' || e.target.name === 'descramblerSettingRight') {
      let value = parseInt(e.target.value);
      await this.setState({
        [e.target.name]: value
      });
      this.reScrambleAllMessages();
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
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
                scrambledMessages={this.state.scrambledMessages}

                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <Descrambler
                handleChange={this.handleChange}
              />
            </>)
        }
      </div>
    );
  }
}

export default ChatPage;