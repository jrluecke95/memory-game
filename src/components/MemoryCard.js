import React, { Component } from 'react';
import './MemoryCard.css';
import logo from '../dc-logo.png'

export default class MemoryCard extends Component {

  constructor() {
    super();
    this.state = { isFlipped:false }
  }

  clickHandler = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    })
  }

  render() {
    let innerClass = "MemoryCard_inner ";
    if (this.state.isFlipped) {
      innerClass += 'flipped'
    }
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={innerClass}>
          <div className="MemoryCard_back">
            <img src={logo} alt="" />
          </div>
          <div className="MemoryCard_front">
            ∆
          </div>
        </div>
      </div>
      
    )
  }
}