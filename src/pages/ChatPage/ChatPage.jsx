import React from 'react';
import userService from '../../utils/userService'
import socket from '../../socket'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import Descrambler from '../../components/Descrambler/Descrambler'
import chatService from '../../utils/chatService';
import styles from './ChatPage.module.css'

const randChars = '!@#$%^&*()<>?/_'


class ChatPage extends React.Component {

  state = {
    user: '',
    chat: null,
    content: '',

    messages: [],
    scrambledMessages: [],
    descrambledForUser: false,

    descrambleKeyLeft: 0,
    descrambleKeyRight: 0,
    descramblerSettingLeft: 4,
    descramblerSettingRight: 4,
    challengeRating: 0,

    serverMessage: '',
  };

  /* lifecycle methods */
  async componentDidMount() {
    socket.registerApp(this);
    let descrambleKeyLeft = this.generateDescrambleKey(this.state.descramblerSettingLeft);
    let descrambleKeyRight = this.generateDescrambleKey(this.state.descramblerSettingRight);
    await this.setState({
      user: userService.getUser(),
      descrambleKeyLeft,
      descrambleKeyRight,
    });
    await socket.joinChat(this.props.match.params.id);
    if (this.state.chat) {
      await this.setState({
        messages: this.state.chat.messages,
      });
      this.scrambleMessages();
    }
  }

  /* helper functions */

  scrambleMessages() {
    let scrambleKey = this.getScrambleKey();
    const newScrambledMessages = chatService.scrambleAllOrNewMessages(this.state.messages, this.state.scrambledMessages, scrambleKey, randChars);
    this.setState({
      scrambledMessages: newScrambledMessages,
    })
  }

  generateDescrambleKey(descramblerSetting) {
    return chatService.generateDescrambleKey(descramblerSetting);
  }

  getScrambleKey() {
    return chatService.getScrambleKey(this.state.challengeRating, this.state.descramblerSettingLeft,
      this.state.descramblerSettingRight, this.state.descrambleKeyLeft, this.state.descrambleKeyRight);
  }

  async reScrambleAllMessages() {
    const key = this.getScrambleKey();
    if (key === 10) {
      await this.setState({
        descrambledForUser: true,
      });
      chatService.addUserToDescrambledFor(this.props.match.params.id);
    }
    const scrambledMessages = chatService.reScrambleAllMessages(this.state.messages, key, randChars);
    this.setState({ scrambledMessages });
  }


  /* handlers */
  handleChange = async e => {
    if (e.target.name === 'descramblerSettingLeft' || e.target.name === 'descramblerSettingRight') {
      let value = parseInt(e.target.value);
      await this.setState({
        [e.target.name]: value
      });
      if (!this.state.descrambledForUser) this.reScrambleAllMessages();
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

  handleBackButtonClick = () => {
    this.props.history.push('/chats')
  }

  render() {
    return (
      <div className={styles.chatContainer}>
        <div className={styles.chatWrapper}>
          {this.state.chat === false &&
          <div className={styles.errorPageWrapper}>
            <div className='h1ContainerWrapper'>
              <div className='h1Container'>
                <div
                  className='h1'
                >INVALID CODE</div>
              </div>
            </div>
            <button
              onClick={this.handleBackButtonClick}
              className={`button-green ${styles.backButton}`}
            >Back</button>
          </div>
          }
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
                  descrambledForUser={this.state.descrambledForUser}

                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
                <div className={styles.footer}>
                  <Descrambler
                    descramblerSettingLeft={this.state.descramblerSettingLeft}
                    descramblerSettingRight={this.state.descramblerSettingRight}

                    handleChange={this.handleChange}
                  />
                </div>
              </>)
          }
        </div>
      </div>
    );
  }
}

export default ChatPage;