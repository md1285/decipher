import React from 'react'
import chatService from '../../utils/chatService';

const randChars = '!@#$%^&*()<>?/_'

class ChatWindow extends React.Component {

  state = {
    scrambleKey: 3,
    scrambledMessages: [],
  };

  componentDidMount() {
    this.scrambleMessages(this.props);
  }

  componentWillReceiveProps(props) {
    this.scrambleMessages(props);
  }

  /* helper functions */
  scrambleMessages(props) {
    const newScrambledMessages = chatService.scrambleAllOrNewMessages(props, this.state.scrambledMessages, this.state.scrambleKey, randChars);
    this.setState({
      scrambledMessages: newScrambledMessages,
    })
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