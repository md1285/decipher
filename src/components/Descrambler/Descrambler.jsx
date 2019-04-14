import React from 'react';
// import { Link } from 'react-router-dom'

class Descrambler extends React.Component {

  render() {
    return (
      <div>
        <p>Descrambler</p>
        <div>Left
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="0">0</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="1">1</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="2">2</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="3">3</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="4">4</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="5">5</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="6">6</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="7">7</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="8">8</button>
          <button name="descramblerSettingLeft" onClick={this.props.handleChange} value="9">9</button>
        </div>
        <div>Right
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="0">0</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="1">1</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="2">2</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="3">3</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="4">4</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="5">5</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="6">6</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="7">7</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="8">8</button>
          <button name="descramblerSettingRight" onClick={this.props.handleChange} value="9">9</button>
        </div>
      </div>
    );
  }
}

export default Descrambler;