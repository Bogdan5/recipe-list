import React, { Component } from 'react';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimateHeight from 'react-animate-height';
import EditBox from './EditBox';
import '../App.css';

// const TransitionGroup = React.addons.TransitionGroup;

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  toggle = () => {
    const { height } = this.state;
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
    this.sliderClose();
  };

  fromEB=(action) => {
    this.props.editorApp(action, this.props.name);
  };

  // this method is used to pass the number of the card clicked
  sliderClose=() => {
    // this.setState({ visible: !this.state.visible });
    this.props.clicked(this.props.key);
  };

  componentDidUpdate (prevProps) {
    if (this.props.wasClicked && this.props.clicked === prevProps.clicked
      && this.props.clicked !== this.props.key) {
      this.slideUp();
    }
  }

  slideUp = () => {
    const { height } = this.state;
    this.setState({
      height: 0,
    });
  };

  render() {
    const { height } = this.state;

    return (
      <div className="Cards">
        <div onClick={this.toggle}>{this.props.name}</div>

        <AnimateHeight duration={ 500 } height={ height }>
          <EditBox name={this.props.name} ingredients={this.props.ingredients}/>
        </AnimateHeight>
      </div>
    );
  }
}

export default Cards;
