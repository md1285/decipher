import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

import Navbar from '../../components/Navbar'

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
            render={() => (
              <Login />
            )}
          />

          <Route
            exact path='/signup'
            render={() => (
              <Signup />
            )}
          />

        </Switch>
      </div>
    );
  }
}

export default App;
