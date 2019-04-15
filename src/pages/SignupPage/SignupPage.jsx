import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'

class SignupPage extends React.Component {

  state = {
    message: '',
  };

  handleError = e => {
    this.setState({ message: e });
  }

  render() {
    return (
      <div className='page-wrapper'>
        <div className='page-container'>
          <div className='h1ContainerWrapper'>
            <div className='h1Container'>
              <div
                className='h1'
              >Signup</div>
            </div>
          </div>
        <SignupForm
          {...this.props}
          handleError={this.handleError}
        />
        <div>{this.state.message}</div>
        </div>

      </div>
    )
  }

}

export default SignupPage;