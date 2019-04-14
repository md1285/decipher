import React from 'react'

class ChatWindow extends React.Component {

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
            >{m.userName}: {this.props.user._id === m.user  || this.props.descrambledForUser ? m.content : this.props.scrambledMessages[i]}</div>
          ))}
        </div>
      </div>

    )
  }
}

export default ChatWindow;