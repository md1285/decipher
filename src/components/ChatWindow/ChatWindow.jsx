import React from 'react'

const randChars = '!@#$%^&*()<>?/_'

class ChatWindow extends React.Component{

  state = {
    scrambleKey: 3,
    messages: [],
    scrambledMessages: [],
  };

  componentWillReceiveProps(props) {


    if (props.messages[0] && props.messages !== this.state.messages && !this.state.scrambledMessages[0]) {
      let key = this.state.scrambleKey;
      const newScrambledMessages = props.messages.map(m => {
        return m.content.split('').map((char, idx) => {
          if (idx % key === 0 && key < 10) {
            return randChars[Math.floor(Math.random()*randChars.length)];
          } else {
            return char;
          }
        })
      })
      this.setState({
        scrambledMessages: newScrambledMessages,
        messages: props.messages
      })
    } 
    
    else if (this.state.scrambledMessages[0]) {
      let key = this.state.scrambleKey;
      const newScrambledMessage = props.messages[props.messages.length - 1].content.split('').map((char, idx) => {
        if (idx % key === 0) {
          return randChars[Math.floor(Math.random()*randChars.length)];
        } else {
          return char;
        }
      }).join('');
      const newScrambledMessages = this.state.scrambledMessages;
      newScrambledMessages.push(newScrambledMessage);
      this.setState({
        scrambledMessages: newScrambledMessages,
        messages: props.messages
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
              {backgroundColor: 'red'}
              :
              {backgroundColor: 'green'}
            }
          >{m.userName}: {this.props.user._id === m.user ? m.content : this.state.scrambledMessages[i]}</div>
        ))}
      </div>
      </div>

    )
  }
}

export default ChatWindow;