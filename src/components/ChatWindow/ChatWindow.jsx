import React from 'react'
import styles from './ChatWindow.module.css'

class ChatWindow extends React.Component {

  render() {
    return (
      <div className={styles.ChatWindow}>
        <div className={styles.h1Container}>
          <h1 className={styles.h1}>DECIPHER</h1>
        </div>
        <div id='chat-window-messages-container' className={styles.messagesContainer}>
          {this.props.messages.map((m, i) => (
            <div
              class={styles.message}
              key={m._id}
              style={
                this.props.user._id === m.user
                  ?
                  {
                    color: 'white',
                    backgroundColor: 'black'
                  }
                  :
                  {
                    color: 'limegreen',
                    backgroundColor: 'black'
                  }
              }
            >
              <p className={styles.p}>
                {m.userName}: {this.props.user._id === m.user || this.props.descrambledForUser ? m.content : this.props.scrambledMessages[i]}
              </p>
            </div>
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