import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Measure from 'react-measure';
import '../App.css';

class DialogBox extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', ingredients: '', dimensions: { top: -1 } };
  }

  hideDB = () => {
    this.props.hider();
  };

  addRecipe = () => {
    this.props.adder(this.state.name, this.state.ingredients);
  };

  getValueName = (e) => { this.setState({ name: e.target.value });};

  getValueIngredients = (e) => { this.setState({ ingredients: e.target.value });};

  render() {
    console.log(this.state.dimensions);
    const { top } = this.state.dimensions;
    console.log({ top });

    return (
        <div className={this.props.zVisibility}>

          <div className={this.props.classer}>
              <header className="header-db">
                <div>Add a recipe</div>
                <div onClick={this.hideDB}>x</div>
              </header>
              <form>
                <p>Recipe</p>
                <input type="text" name="recipeName" value={this.state.name}
                onChange={this.getValueName}/>
                <p>Ingredients</p>
                <input type="text" name="ingredients" value={this.state.ingredients}
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
