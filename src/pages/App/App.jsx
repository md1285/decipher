import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../About/About'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import ChatsPage from '../ChatsPage/ChatsPage'
import ChatPage from '../ChatPage/ChatPage'

import Navbar from '../../components/Navbar/Navbar'

import userService from '../../utils/userService'


class App extends Component {
  state = {
    user: userService.getUser(),
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  render() {
    return (
      <div className='App'>
        <Navbar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>

          <Route
            exact path='/'
            render={() => (
              <h1>App.jsx</h1>
            )}
          />

          <Route 
            exact path='/about'
            render={() => (
              <About />
            )}
          />

          <Route
            exact path='/login'
            render={(props) => (
              <LoginPage 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />

          <Route
            exact path='/signup'
            render={(props) => (
              <SignupPage 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />

          <Route 
            exact path='/chats'
            render={(props) => (
              this.state.user
              ?
              <ChatsPage 
                {...props}
              />
              :
              <Redirect to='/login/' />
            )}
          />
          <Route 
            exact path='/chats/:id'
            render={(props) => (
              this.state.user?
              <ChatPage 
                {...props}
              />
              :
              <Redirect to='/login/' />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;