import React from 'react';
import userService from '../../utils/userService'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };


  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          type='email'
          name='email'
          placeholder='Email address'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'>Log In</button>
      </form>
    );
  }
}

export default LoginForm;