import React, { Component } from 'react';
import './MemoryCard.css';
import logo from '../dc-logo.png'

export default class MemoryCard extends Component {

  constructor(props) {
    super(props);
    this.state = { isFlipped:false }
  }

  render() {
    let innerClass = "MemoryCard_inner ";
    // actualyl flipping cards and executing css animation
    if (this.props.isFlipped) {
      innerClass += 'flipped'
    }
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={innerClass}>
          <div className="MemoryCard_back">
            <img src={logo} alt="" />
          </div>
          <div className="MemoryCard_front">
            {this.props.symbol}
          </div>
        </div>
      </div>
      
    )
  }
}