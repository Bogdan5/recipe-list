import React, { Component } from 'react';
import Cards from './components/Cards.js';
import DialogBox from './components/DialogBox.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        id: 0,
        name: 'Pizza',
        ingredients: ['Ingredient1', 'Ingredient2', 'Ingredient3'],
      },
    ],
      styleDB: {
        zIndex: -1,
        position: 'absolute',
        width: '100%',
        top: 0,
        backgroundColor: 'rgba(103, 105, 112, 0.5)',
      },
      valueNameDB: '',
      valueIngrDB: '',
      clicked: null,
      numberClicked: null,
    };
  }

  // this method changes the zIndex of the DialogBox component, to make it visible or invisible
  changeZIndex = (z) => {
    let styler = Object.assign({}, this.state.styleDB);
    styler.zIndex = z;
    this.setState({ styleDB: styler });
  };

  // uses the changeZIndex method to make the DialogBox component visible
  displayDB = () => {
    this.changeZIndex(5);
  };

  // uses the changeZIndex method to make the DialogBox component invisible
  closeDB = () => {
    this.changeZIndex(-1);
  };

  // method that receives the data from the form of the DataBox component (see that component)
  // and adds it to state
  addRecipe = (nam, ingr) => {
    this.closeDB();
    let index = this.state.recipes.id;
    let list = this.state.recipes;
    list.push({
        id: ++index,
        name: nam,
        ingredients: ingr.split(',').map((item) => item.trim()),
      });
    this.setState({ recipes: list });
  };

  editRecipe=(action, name) => {
    if (action === 'edit') {
      this.displayDB();
    } else if (action === 'delete') {
      const list = this.state.recipes.filter((item) => item.name !== name);
      this.setState({ recipes: list });
    }
  };

  clikedCard=(cardNo) => {
    this.setState({ clicked: true, clickedNo: cardNo });
  };

  render() {
    return (
      <div className="App">
        <div >
          {this.state.recipes.map((item)=><Cards key={item.id}
            name = {item.name} ingredients = {item.ingredients} clicked={this.clickedCard}
            clickedNo={item.clickedNo} wasClicked={item.clicked}//make animation here
          />)}
        </div>
        <button onClick={this.displayDB}>Add Recipe</button>
        <div style={this.state.styleDB}>
          <DialogBox  editorApp={this.editRecipe} callbackApp={this.displayDB}
            hider={this.closeDB} adder={this.addRecipe}
            valueName={this.state.valueNameDB} valueIngr={this.state.valueIngrDB}
          />
        </div>
      </div>

    );
  }
}

export default App;
