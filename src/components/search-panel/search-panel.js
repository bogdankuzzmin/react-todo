
import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  searchChangeHandler = (evt) => {
    const term = evt.target.value
    this.setState({term});
    this.props.searchChangeHandler(term);
  };

  render() {
    return (
      <input type="text" 
             className="form-control search-input" 
             placeholder="type to search" 
             value={this.state.term} 
             onChange={this.searchChangeHandler} />
    );
  }
}
