import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'

import Navbar from '../../components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
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
              />
            )}
          />

          <Route
            exact path='/signup'
            render={(props) => (
              <SignupPage 
                {...props}
              />
            )}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
