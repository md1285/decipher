import React from 'react'

class ChatWindow extends React.Component{

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
        {this.props.messages.map(m => (
          <div
            key={m._id}
          >{m.userName}: {m.content}</div>
        ))}
      </div>
      </div>

    )
  }
}

export default ChatWindow;