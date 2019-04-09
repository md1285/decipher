import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'

class SignupPage extends React.Component {

  state={
    message: '',
  };

  handleError = e => {
    this.setState({message: e});
  }

  render() {
    return(
      <>
      <SignupForm
        {...this.props}
        handleError={this.handleError}
      />
      <div>{this.state.message}</div>
      </>
    )
  }

}

export default SignupPage;