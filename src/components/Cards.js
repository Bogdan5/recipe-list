import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import EditBox from './EditBox';
import '../App.css';

// const TransitionGroup = React.addons.TransitionGroup;

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  fromEB=(action) => {
    this.props.editorApp(action, this.props.name);
  };

  // this method is used to pass the signal to start slide down to the App parent
  slide=() => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div className="Cards">
        <div onClick={this.slide}>{this.props.name}</div>
        <TransitionGroup>
          <EditBox ingredients={this.props.ingredients}
            name={this.props.ingredients} editor={this.fromEB}/>
        </TransitionGroup>
      </div>
    );
  }
}

export default Cards;
