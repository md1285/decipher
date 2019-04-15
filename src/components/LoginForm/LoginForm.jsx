import React from 'react';
import userService from '../../utils/userService'
import styles from './LoginForm.module.css'

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
      this.props.history.push('/chats');
    } catch {
      this.props.handleInvalid()
    }
  };


  render() {
    return (
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <input
            className={styles.textInput}
            type='email'
            name='email'
            placeholder='Email address'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className={styles.textInput}
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            disabled={!this.state.email || !this.state.password}
            className={`button-green ${styles.signupButton}`}
            type='submit'>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;