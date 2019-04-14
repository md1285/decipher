import React from 'react';
import './Descrambler.css'

class Descrambler extends React.Component {

  render() {
    return (
      <div className="dials-container">
        <div className="descrambler-container descrambler-left-container">
          <button
            className="dsc-btn dsc-lft-0"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 0 && 'green',
              color: this.props.descramblerSettingLeft === 0 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="0">0</button>
          <button
            className="dsc-btn dsc-lft-1"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 1 && 'green',
              color: this.props.descramblerSettingLeft === 1 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="1">1</button>
          <button
            className="dsc-btn dsc-lft-2"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 2 && 'green',
              color: this.props.descramblerSettingLeft === 2 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="2">2</button>
          <button
            className="dsc-btn dsc-lft-3"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 3 && 'green',
              color: this.props.descramblerSettingLeft === 3 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="3">3</button>
          <button
            className="dsc-btn dsc-lft-4"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 4 && 'green',
              color: this.props.descramblerSettingLeft === 4 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="4">4</button>
          <button
            className="dsc-btn dsc-lft-5"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 5 && 'green',
              color: this.props.descramblerSettingLeft === 5 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="5">5</button>
          <button
            className="dsc-btn dsc-lft-6"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 6 && 'green',
              color: this.props.descramblerSettingLeft === 6 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="6">6</button>
          <button
            className="dsc-btn dsc-lft-7"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 7 && 'green',
              color: this.props.descramblerSettingLeft === 7 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="7">7</button>
          <button
            className="dsc-btn dsc-lft-8"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 8 && 'green',
              color: this.props.descramblerSettingLeft === 8 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="8">8</button>
          <button
            className="dsc-btn dsc-lft-9"
            style={{
              backgroundColor: this.props.descramblerSettingLeft === 9 && 'green',
              color: this.props.descramblerSettingLeft === 9 && 'white',
            }}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="9">9</button>
        </div>
        <div className="descrambler-container descrambler-right-container">
          <button
            className="dsc-btn dsc-right-0"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 0 && 'green',
              color: this.props.descramblerSettingRight === 0 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="0">0</button>
          <button
            className="dsc-btn dsc-right-1"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 1 && 'green',
              color: this.props.descramblerSettingRight === 1 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="1">1</button>
          <button
            className="dsc-btn dsc-right-2"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 2 && 'green',
              color: this.props.descramblerSettingRight === 2 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="2">2</button>
          <button
            className="dsc-btn dsc-right-3"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 3 && 'green',
              color: this.props.descramblerSettingRight === 3 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="3">3</button>
          <button
            className="dsc-btn dsc-right-4"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 4 && 'green',
              color: this.props.descramblerSettingRight === 4 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="4">4</button>
          <button
            className="dsc-btn dsc-right-5"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 5 && 'green',
              color: this.props.descramblerSettingRight === 5 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="5">5</button>
          <button
            className="dsc-btn dsc-right-6"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 6 && 'green',
              color: this.props.descramblerSettingRight === 6 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="6">6</button>
          <button
            className="dsc-btn dsc-right-7"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 7 && 'green',
              color: this.props.descramblerSettingRight === 7 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="7">7</button>
          <button
            className="dsc-btn dsc-right-8"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 8 && 'green',
              color: this.props.descramblerSettingRight === 8 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="8">8</button>
          <button
            className="dsc-btn dsc-right-9"
            style={{
              backgroundColor: this.props.descramblerSettingRight === 9 && 'green',
              color: this.props.descramblerSettingRight === 9 && 'white',
            }}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="9">9</button>
        </div>
      </div>
    );
  }
}

export default Descrambler;