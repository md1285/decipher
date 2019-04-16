import React from 'react';
import './Descrambler.css'

class Descrambler extends React.Component {

  render() {
    return (
      <div className="dials-container">
        <div className="descrambler-container descrambler-left-container">
          <button
            className={`dsc-btn dsc-lft-0 ${this.props.descramblerSettingLeft === 0 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="0">0</button>
          <button
            className={`dsc-btn dsc-lft-1 ${this.props.descramblerSettingLeft === 1 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="1">1</button>
          <button
            className={`dsc-btn dsc-lft-2 ${this.props.descramblerSettingLeft === 2 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="2">2</button>
          <button
            className={`dsc-btn dsc-lft-3 ${this.props.descramblerSettingLeft === 3 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="3">3</button>
          <button
            className={`dsc-btn dsc-lft-4 ${this.props.descramblerSettingLeft === 4 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="4">4</button>
          <button
            className={`dsc-btn dsc-lft-5 ${this.props.descramblerSettingLeft === 5 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="5">5</button>
          <button
            className={`dsc-btn dsc-lft-6 ${this.props.descramblerSettingLeft === 6 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="6">6</button>
          <button
            className={`dsc-btn dsc-lft-7 ${this.props.descramblerSettingLeft === 7 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="7">7</button>
          <button
            className={`dsc-btn dsc-lft-8 ${this.props.descramblerSettingLeft === 8 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="8">8</button>
          <button
            className={`dsc-btn dsc-lft-9 ${this.props.descramblerSettingLeft === 9 && 'dsc-btn-sel'}`}
            name="descramblerSettingLeft"
            onClick={this.props.handleChange}
            value="9">9</button>
          <div className="dcs-display-number-cont dcs-display-number-left">
            <div className="dcs-display-number">
              {this.props.descramblerSettingLeft}
            </div>
          </div>
        </div>
        <div className="descrambler-container descrambler-right-container">
          <button
            className={`dsc-btn dsc-right-0 ${this.props.descramblerSettingRight === 0 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="0">0</button>
          <button
            className={`dsc-btn dsc-right-1 ${this.props.descramblerSettingRight === 1 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="1">1</button>
          <button
            className={`dsc-btn dsc-right-2 ${this.props.descramblerSettingRight === 2 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="2">2</button>
          <button
            className={`dsc-btn dsc-right-3 ${this.props.descramblerSettingRight === 3 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="3">3</button>
          <button
            className={`dsc-btn dsc-right-4 ${this.props.descramblerSettingRight === 4 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="4">4</button>
          <button
            className={`dsc-btn dsc-right-5 ${this.props.descramblerSettingRight === 5 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="5">5</button>
          <button
            className={`dsc-btn dsc-right-6 ${this.props.descramblerSettingRight === 6 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="6">6</button>
          <button
            className={`dsc-btn dsc-right-7 ${this.props.descramblerSettingRight === 7 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="7">7</button>
          <button
            className={`dsc-btn dsc-right-8 ${this.props.descramblerSettingRight === 8 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="8">8</button>
          <button
            className={`dsc-btn dsc-right-9 ${this.props.descramblerSettingRight === 9 && 'dsc-btn-sel'}`}
            name="descramblerSettingRight"
            onClick={this.props.handleChange}
            value="9">9</button>
          <div className="dcs-display-number-cont dcs-display-number-right">
          <div className="dcs-display-number">
              {this.props.descramblerSettingRight}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Descrambler;