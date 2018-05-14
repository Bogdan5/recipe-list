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
      styleDB: {
        zIndex: -1,
        position: 'absolute',
        width: '100%',
        top: 0,
        backgroundColor: 'rgba(103, 105, 112, 0.5)',
      },
      valueNameDB: '',
      valueIngrDB: '',
      clicked: false,
      numberClicked: null,
      animationClass: 'DialogDiv',
      visibility: 'zInvisible',
      containerDB: {
        DialogBox: true,
        zVisibile: false,
        zInvisible: true,
      },
      divDB: {
        DialogDiv: true,
        moveDown: false,
        moveUp: false,
      },
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
    // this.changeZIndex(5);
    this.setState({ containerDB: 'DialogDiv moveDown', divDB: 'DialogBox zVisible' });
  };

  // uses the changeZIndex method to make the DialogBox component invisible
  closeDB = () => {
    // this.changeZIndex(-1);
    this.setState({ containerDB: 'DialogDiv moveUp' });
    setTimeout(() => {this.setState({ divDB: 'DialogDiv zInvisible',
        containerDB: 'DialogBox', });}, 600);
  };

  // method that receives the data from the form of the DataBox component (see that component)
  // and adds it to state
  addRecipe = (nam, ingr) => {
    this.closeDB();
    let index = this.state.recipes.length + 1;
    let list = this.state.recipes;
    list.push({
        id: index,
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
