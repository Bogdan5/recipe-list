import React, { Component } from 'react';
import { VelocityComponent } from 'velocity-react';
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
          <button>Delete</button>
          <button onClick={}>Edit</button>
        </div>
      </div>
    );
  }
}

export default EditBox;
