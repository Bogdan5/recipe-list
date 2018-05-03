import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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
    return (
        <div className="DialogBox zInvisible">
          <Measure bounds onResize={(contentRect) => {
            this.setState({ dimensions: contentRect.bounds });
          }
          }>
            {({ measureRef }) => { <div className="DialogDiv" ref={ measureRef }>
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
            </div>;
            }
          }
          </Measure>
        </div>
    );
  }
}

export default DialogBox;
