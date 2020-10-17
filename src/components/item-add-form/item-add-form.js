import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  labelChangeHandler = (evt) => {
    this.setState({
      label: evt.target.value,
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    })
  };
  
  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.submitHandler}>
        <input type="text" 
               className="form-control" 
               onChange={this.labelChangeHandler}
               placeholder="What's need to be done?" 
               value={this.state.label} />

        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
