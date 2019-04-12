import React from 'react'

const randChars = '!@#$%^&*()<>?/_'

class ChatWindow extends React.Component{

  state = {
    scrambleKey: 3,
    scrambledMessages: [],
  };

  componentWillReceiveProps(props) {
    if (props.messages[0]) {
      let key = this.state.scrambleKey;
      const scrambledMessages = props.messages.map(m => m.content.split('').map((char, idx) => {
        if (idx % key === 0 && key < 10) {
          return randChars[Math.floor(Math.random()*randChars.length)];
        } else{
          return char
        }
      }).join(''));

      this.setState({
        scrambledMessages
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