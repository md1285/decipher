import React from 'react';
import userService from '../../utils/userService'
import styles from './SignupForm.module.css'

class SignupForm extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    passwordConf: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/chats');
    } catch (err) {
      this.props.handleError(err.message);
    }
  };

  isFormInvalid = () => {
    return !(this.state.userName && this.state.email && this.state.password && this.state.password === this.state.passwordConf);
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
            type='text'
            name='userName'
            placeholder='Username'
            value={this.state.userName}
            onChange={this.handleChange}
          />
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
          <input
            className={styles.textInput}
            type='password'
            name='passwordConf'
            placeholder='Confirm Password'
            value={this.state.passwordConf}
            onChange={this.handleChange}
          />
          <button
            className={`button-green ${styles.signupButton}`}
            type='submit'
            disabled={this.isFormInvalid()}
          >Submit
        </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;