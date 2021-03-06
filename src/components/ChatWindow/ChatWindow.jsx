import React from 'react'
import styles from './ChatWindow.module.css'

class ChatWindow extends React.Component {

  render() {
    return (
      <div className={styles.ChatWindow}>
        <div className='h1ContainerWrapper'>
          <div className='h1Container'>
            <h1 className={styles.h1}>DECIPHER</h1>
          </div>
        </div>
        <div className={styles.chatCodeDisplay}>
          <div>
            Invite code: {this.props.match.params.id}
          </div>
        </div>
        <div id='chat-window-messages-container' className={styles.messagesContainer}>
          {this.props.messages.map((m, i) => (
            <div
              key={m._id}
              style={
                this.props.user._id === m.user
                  ?
                  {
                    color: 'white',
                  }
                  :
                  {
                    color: 'limegreen',
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
            className={
              this.props.content
                ?
                styles.textInput
                :
                styles.textInputEmpty
            }
            type='text'
            name='content'
            value={this.props.content}
            onChange={this.props.handleChange}
          />
          <button
            className='button-green'
            type='submit'
            disabled={this.props.content === ''}
          >Submit</button>
        </form>

      </div>

    )
  }
}

export default ChatWindow;