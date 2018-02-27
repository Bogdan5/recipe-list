import React, { Component } from 'react';
// import { VelocityComponent } from 'velocity-react';
import Velocity from 'velocity-animate';
import '../App.css';

class EditBox extends Component {
  componentWillEnter (callback) {
    const element = this.container.getDOMNode();
    Velocity(element, 'slideDown', { duration: 300 }).then(callback);
  }

  componentWillLeave (callback) {
    const element = this.container.getDOMNode();
    Velocity(element, 'slideUp', { duration: 300 }).then(callback);
  }

  setContainer = (c)=> this.container = c;

  editRecipe = ()=>this.props.editor('edit');

  deleteRecipe=()=>this.props.editor('delete');

  render() {
    return (
      <div className="EditBox" ref={this.setContainer(this)}>
        <div>Ingredients</div>
        <div>
          {this.props.ingredients.map((item)=>
            <div className="listItem">{this.item}</div>
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
