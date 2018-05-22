import React, { Component } from 'react';

// import { VelocityComponent } from 'velocity-react';
import '../App.css';

class EditBox extends Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  setContainer = (c)=> this.container = c;

  editRecipe = ()=>this.props.editor('edit');

  deleteRecipe=()=>this.props.editor('delete');

  render() {
    return (
      <div className="EditBox" ref={this.setContainer}>
        <div>Ingredients</div>
        <div>
          {this.props.ingredients.map((item)=>
            <div className="listItem">{item}</div>
          )}
        </div>
        <div>
          <button onClick={this.deleteRecipe}>Delete</button>
          <button onClick={this.editRecipe}>Edit</button>
        </div>
      </div>
    );
  }
}

export default EditBox;
