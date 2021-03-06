import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends React.Component {

  state = {
    message: ''
  };

  handleInvalid = () => {
    this.setState({
      message: 'Invalid credentials.'
    })
  };

  render() {
    return (
      <div className='page-wrapper'>
        <div className='page-container'>
          <div className='h1ContainerWrapper'>
            <div className='h1Container'>
              <div
                className='h1'
              >Log In</div>
            </div>
          </div>
          <LoginForm
            {...this.props}
            
            handleInvalid={this.handleInvalid}
          />
          <div>{this.state.message}</div>
        </div>
      </div>
    )
  }
}


export default LoginPage;