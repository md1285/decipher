import React from 'react';

const About = () => (
  <div className='page-wrapper'>
    <div className='page-container'>
      <div className='h1ContainerWrapper'>
        <div className='h1Container'>
          <h1 className='h1'>About</h1>
        </div>
      </div>
      <div className='content-container'>
      <div className='inner-content'>Welcome to Decipher, a one-of-a-kind interactive chat experience.</div>
      <div className='inner-content'>To start, create a chat, and send the invite code to a friend. When a chat begins, the other person’s messages will be scrambled. To decipher them, you must adjust the settings of the dials on the bottom of your screen.</div>
      <div className='inner-content'>As you get closer to the correct setting, the incoming messages will start to descramble, one character at a time. Once you crack the code, the messages will be completely descrambled.</div>
      <div className='inner-content'>We hope you enjoy Decipher!</div>
      </div>
    </div>
  </div>
);

export default About;