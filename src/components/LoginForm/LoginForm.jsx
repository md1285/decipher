import React from 'react';

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

  handleSubmit = e => {
    e.preventDefault();
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