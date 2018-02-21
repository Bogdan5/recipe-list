import React, { Component } from 'react';
import '../App.css';

class DialogBox extends Component {
  render() {
    return (
      <div className="DialogBox">
        <div className="DialogDiv">        
          <header className="header-db">
            <div>Add a recipe</div>
            <div>x</div>
          </header>
          <form>
            <p>Recipe</p>
            <input type="text" name="recipeName"/>
            <p>Ingredients</p>
            <input type="text" name="ingredients"/>
          </form>
          <footer>
            <button>Add recipe</button>
            <button>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default DialogBox;
