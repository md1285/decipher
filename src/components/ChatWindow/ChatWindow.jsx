import React from 'react'
import chatService from '../../utils/chatService';

const randChars = '!@#$%^&*()<>?/_'

class ChatWindow extends React.Component {

  state = {
    scrambleKey: 3,
    scrambledMessages: [],
  };

  componentDidMount() {
    if (this.props.messages[0] && !this.state.scrambledMessages[0]) {
      const newScrambledMessages = chatService.scrambleAllMessages(this.props, this.state.scrambleKey, randChars);
      this.setState({
        scrambledMessages: newScrambledMessages,
      })
    }
  }

  componentWillReceiveProps(props) {
    if (props.messages[0] && !this.state.scrambledMessages[0]) {
      const newScrambledMessages = chatService.scrambleAllMessages(props, this.state.scrambleKey, randChars);
      this.setState({
        scrambledMessages: newScrambledMessages,
      })
    } else if (props.messages[0] && props.messages.length !== this.state.scrambledMessages.length) {
      const newScrambledMessage = chatService.scrambleLastMessage(props, this.state.scrambleKey, randChars)
      const newScrambledMessages = this.state.scrambledMessages;
      newScrambledMessages.push(newScrambledMessage);
      this.setState({
        scrambledMessages: newScrambledMessages,
      })
    }
  }


  render() {
    return (
      <div>

        <h1>Chat Page {this.props.match.params.id}</h1>
        <form
          onSubmit={this.props.handleSubmit}
        >
          <input
            type='text'
            name='content'
            value={this.props.content}
            onChange={this.props.handleChange}
          />
          <button
            type='submit'
            disabled={this.props.content === ''}
          >Submit</button>
        </form>
        <div>
          {this.props.messages.map((m, i) => (
            <div
              key={m._id}
              style={
                this.props.user._id === m.user
                  ?
                  { backgroundColor: 'red' }
                  :
                  { backgroundColor: 'green' }
              }
            >{m.userName}: {this.props.user._id === m.user ? m.content : this.state.scrambledMessages[i]}</div>
          ))}
        </div>
      </div>

    )
  }
}

export default ChatWindow;