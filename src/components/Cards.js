import React, { Component } from 'react';
import '../App.css';

class Cards extends Component {
  render() {
    return (
      <div className="Cards">
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Cards;
