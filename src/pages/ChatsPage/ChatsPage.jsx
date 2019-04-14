import React from 'react';
import chatService from '../../utils/chatService'
import { Link } from 'react-router-dom'

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
      <div>
        <button
          onClick={this.handleCreateChat}
        >Create Chat</button>
        <form onSubmit={this.handleJoinChat}>
          <input
            type='text'
            name='code'
            placeholder='Enter code'
            value={this.state.code}
            onChange={this.handleChange}
          />
          <button type='submit'>Join Chat</button>
        </form>
        <div>
          {this.state.chats.map(chat => (
            <Link
              to={`/chats/${chat._id}`}
            >
              <p>Users: 
              {chat.users.map((u, i) =>
                (<span> {u.userName}{chat.users[i + 1] &&
                  <span>,</span>}</span>)
                )}
              </p>
              <p>{new Date(chat.updatedAt).toLocaleDateString() + ' - ' + new Date(chat.updatedAt).toLocaleTimeString()}</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default ChatsPage;