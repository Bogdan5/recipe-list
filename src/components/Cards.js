import React, { Component } from 'react';
import '../App.css';

class Cards extends Component {
  // this method is used to pass the signal to start slide down to the App parent
  slider=()=>{
    this.props.slide();
  }
  render() {
    return (
      <div className="Cards">
        <div onClick={this.slider}>{this.props.name}</div>
      </div>
    );
  }
}

export default Cards;
