import React, { Component } from 'react';

// import { CSSTransitionGroup } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.valueName, ingredients: this.props.valueIngr, };
  }

  hideDB = () => {
    this.props.hider();
  };

  addRecipe = () => {
    // if (this.state.name.length === 0) {
    //   this.setState({ name: '(Recipe)' });
    //   console.log('name');
    // }

    this.props.adder(this.state.name, this.state.ingredients);
  };

  getValueName = (e) => {
    console.log('name',e.target.value);
    this.setState({ name: e.target.value, });};

  getValueIngredients = (e) => {
    console.log('ingred',e.target.value);
    this.setState({ ingredients:
    e.target.value.trim().split(','), });};

  render() {
    // console.log(this.state.dimensions);
    // const { top } = this.state.dimensions;
    // console.log({ top });

    return (
        <div className={this.props.containerStyle}>
          <div className={this.props.divStyle}>
              <header className="header-db">
                <div>Add a recipe</div>
                <div onClick={this.hideDB}>x</div>
              </header>
              <form>
                <p>Recipe</p>
                <input type="text" name="recipeName" value={this.props.valueName}
                onChange={this.getValueName}/>
                <p>Ingredients</p>
                <input type="text" name="ingredients" value={this.props.valueIngr}
                onChange={this.getValueIngredients}/>
              </form>
              <footer>
                <input type="submit" value="Submit" onClick={this.addRecipe}/>
                <button onClick={this.hideDB}>Cancel</button>
              </footer>
          </div>
        </div>
    );
  }
}

export default DialogBox;
