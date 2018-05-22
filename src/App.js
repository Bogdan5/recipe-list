import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import classNames from 'classnames';
import Cards from './components/Cards.js';
import DialogBox from './components/DialogBox.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        id: 1,
        name: 'Pizza',
        ingredients: ['Ingredient1', 'Ingredient2', 'Ingredient3'],
      },
    ],
      valueNameDB: '',
      valueIngrDB: '',
      clicked: false,
      clickedNo: null,
      animationClass: 'DialogDiv',
      visibility: 'zInvisible',
      cardEdited: 0,
      containerDB: {
        DialogBox: true,
        zVisibile: false,
        zInvisible: true,
      },
      divDB: {
        DialogDiv: true,
        moveDown: false,
        moveUp: false,
        opaque: false,
        transparent: false,
      },
    };
  }

  // uses the changeZIndex method to make the DialogBox component visible
  displayDB = () => {
    // this.changeZIndex(5);
    this.setState({ divDB: 'DialogDiv moveDown opaque', containerDB: 'DialogBox zVisible',
      valueName: '', valueIngr: '', });
  };

  // uses the changeZIndex method to make the DialogBox component invisible
  closeDB = () => {
    // this.changeZIndex(-1);
    this.setState({ divDB: 'DialogDiv moveUp transparent' });
    setTimeout(() => {this.setState({ divDB: 'DialogDiv',
        containerDB: 'DialogBox zInvisible', });}, 600);
  };

  // method that receives the data from the form of the DataBox component (see that component)
  // and adds it to state
  addRecipe = (nam, ingr) => {
    this.closeDB();
    if (this.state.cardEdited) {
      let recipesCopy = [];
      this.state.recipes.forEach((item) => {
        recipesCopy.push({ id: item.id, name: item.name, ingredients: item.ingredients.slice() });
      });
      this.state.recipes.map((item, index) => {
        if (item.id === this.state.cardEdited) {
          recipesCopy[index].name = nam;
          recipesCopy[index].ingredients = ingr;
          this.setState({ recipes: recipesCopy, cardEdited: 0, clicked: false, clickedNo: null, });
        }

      });
    } else {
      let index = this.state.recipes.length + 1;
      let list = this.state.recipes;
      list.push({
          id: index,
          name: nam.length ? nam : '(Recipe)',
          ingredients: ingr.split(',').map((item) => item.trim()),
        });
      this.setState({ recipes: list });
    }
  };

  editRecipe=(action, num) => {
    this.state.recipes.map((item) => {
      if (item.id === num) {
        if (action === 'edit') {
          this.setState({ cardEdited: num, valueNameDB: item.name, valueIngrDB: item.ingredients });
          this.displayDB();
        } else if (action === 'delete') {
          const list = this.state.recipes.filter((item) => item.id !== num);
          this.setState({ recipes: list });
        }

        return;
      }
    });
  };

  clickedCard=(cardNo) => {
    this.setState({ clicked: true, clickedNo: cardNo });
  };

  render() {
    const container = classNames(this.state.containerDB);
    const div = classNames(this.state.divDB);
    return (
      <div className="App">
        <div >
          {this.state.recipes.map((item)=><Cards key={item.id} numero={item.id}
            name = {item.name} ingredients = {item.ingredients} clicker={this.clickedCard}
            clickedNo={this.state.clickedNo} wasClicked={this.state.clicked}//make animation here
            editorApp={this.editRecipe}
          />)}
        </div>
        <button onClick={this.displayDB}>Add Recipe</button>
        {/* <div style={this.state.styleDB}> */}
          <DialogBox  editorApp={this.editRecipe} callbackApp={this.displayDB}
            hider={this.closeDB} adder={this.addRecipe}
            valueName={this.state.valueNameDB} valueIngr={this.state.valueIngrDB}
            containerStyle={container} divStyle={div}/>
        {/* </div> */}
      </div>

    );
  }
}

export default App;
