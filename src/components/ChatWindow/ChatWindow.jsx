import React from 'react'
import styles from './ChatWindow.module.css'

class ChatWindow extends React.Component {

  render() {
    return (
      <div className={styles.ChatWindow}>

        <h1 className={styles.h1}>ChatID: {this.props.match.params.id}</h1>
        <div id='chat-window-messages-container' className={styles.messagesContainer}>
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
        <form
          className={styles.form}
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

      </div>

    )
  }
}

export default ChatWindow;