import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import EditBox from './EditBox';
import '../App.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  //toggles the height of the EditBox component
  toggle = () => {
    const { height } = this.state;
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
    this.sliderClose();
  };

  //receives data from Cards- type of action: delete or edit card
  fromEB=(action) => {
    this.props.editorApp(action, this.props.numero);
    this.slideUp();
  };

  // this method is used to pass the number of the card clicked to the App component
  sliderClose=() => {
    this.props.clicker(this.props.numero);
  };

  componentDidUpdate (prevProps) {
    //slides up when a card is open and clicked on or when another card is cliked
    if (this.props.wasClicked && prevProps.clickedNo &&
      this.props.clickedNo !== prevProps.clickedNo && this.props.clickedNo !== this.props.numero) {
      this.slideUp();
    }

    //slides up when the Add recipe button is clicked
    if (this.props.wasClicked && this.props.addRecipeClicked &&
      this.props.clickedNo === this.props.numero && !prevProps.addRecipeClicked) {
      this.slideUp();
    }
  }

  //slides up the EditBox
  slideUp = () => {
    // const { height } = this.state;
    this.setState({
      height: 0,
    });
  };

  render() {
    const { height } = this.state;
    let editKey = 'e' + this.props.numero;

    return (
      <div className="Cards">
        <div onClick={this.toggle}>{this.props.name}</div>

        <AnimateHeight duration={ 500 } height={ height }>
          <EditBox key={editKey} name={this.props.name} ingredients={this.props.ingredients}
          editor={ this.fromEB }/>
        </AnimateHeight>
      </div>
    );
  }
}

export default Cards;
