import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

import Navbar from '../../components/Navbar/Navbar'

import userService from '../../utils/userService'


class App extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    this.handleSignupOrLogin();
  }

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

        </Switch>
      </div>
    );
  }
}

export default App;
