import React, { Component } from 'react';
import Cards from './components/Cards.js';
import DialogBox from './components/DialogBox.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      recipes:[{
        'id':0,
        'name':'Pizza',
        'ingredients':['Ingredient1', 'Ingredient2', 'Ingredient3']
      }],
      styleDB:{
        zIndex:-1,
        position:'absolute',
        width:'100%',
        top:0,
        backgroundColor:'rgba(103, 105, 112, 0.5)'
      }
    }
  }

  displayDB = ()=>{
    let styler = Object.assign({},this.state.styleDB);
    styler['zIndex']=5;
    this.setState({styleDB:styler});
  }


  render() {
    return (
      <div className="App">
        <div >
          {this.state.recipes.map((item)=><Cards key={item.id}
            name={item.name} ingredients={item.ingredients}
          />)}
        </div>
        <button onClick={this.displayDB}>Add Recipe</button>
        <div style={this.state.styleDB}><DialogBox/></div>
      </div>

    );
  }
}

export default App;
