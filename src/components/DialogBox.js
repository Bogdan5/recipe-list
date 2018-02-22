import React, { Component } from 'react';
import '../App.css';

class DialogBox extends Component {
  constructor(props){
      super(props);
      this.state={name:'',ingredients:''};
  }

  removeDB=()=>{
    this.props.callbackFromParent();
  }

  addRecipe=()=>{
    this.props.adder(this.state.name,this.state.ingredients);
  }
  render() {
    return (
      <div className="DialogBox">
        <div className="DialogDiv">
          <header className="header-db">
            <div>Add a recipe</div>
            <div onClick={this.removeDB}>x</div>
          </header>
          <form>
            <p>Recipe</p>
            <input type="text" name="recipeName" value={this.state.name}/>
            <p>Ingredients</p>
            <input type="text" name="ingredients" value={this.state.ingredients}/>
          </form>
          <footer>
            <input type="submit" value="Submit" onClick={this.addRecipe}/>
            <button onClick={this.removeDB}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default DialogBox;
