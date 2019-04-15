import React from 'react';
import chatService from '../../utils/chatService'
import { Link } from 'react-router-dom'
import styles from './ChatsPage.module.css'

class ChatsPage extends React.Component {

  state = {
    chats: [],
    code: '',
  };

  async componentDidMount() {
    const chats = await chatService.getAllChats();
    this.setState({
      chats
    })
  }

  handleCreateChat = async () => {
    const chat = await chatService.create();
    this.props.history.push(`/chats/${chat._id}`)
  }

  handleJoinChat = e => {
    e.preventDefault();
    this.props.history.push(`/chats/${this.state.code}`)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className='page-wrapper'>
        <div className='page-container'>
          <div className='h1ContainerWrapper'>
            <div className='h1Container'>
              <h1 className='h1'>Chats</h1>
            </div>
          </div>
          <div className='content-container'>
            {this.state.chats.map(chat => (
              <div className='inner-content'>
                <Link
                  className='inner-content-a'
                  to={`/chats/${chat._id}`}
                >
                  <p className='inner-content-p'>Users:
              {chat.users.map((u, i) =>
                    (<span className='inner-content-span'> {u.userName}{chat.users[i + 1] &&
                      <span className='inner-content-span'>,</span>}</span>)
                  )}
                  </p>
                  <span className='inner-content-p'>Date: {new Date(chat.updatedAt).toLocaleDateString() + ' - ' + new Date(chat.updatedAt).toLocaleTimeString()}</span>
                </Link>
              </div>
            ))}

          </div>
          <button
            onClick={this.handleCreateChat}
          >Create Chat</button>
          <form onSubmit={this.handleJoinChat}>
            <input
              type='text'
              name='code'
              placeholder='Enter chat code'
              value={this.state.code}
              onChange={this.handleChange}
            />
            <button type='submit'>Join Chat</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ChatsPage;