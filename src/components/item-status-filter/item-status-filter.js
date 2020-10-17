
import React, {Component} from 'react';
import {capitalizeFirstLetter} from "../../utils/common";
import {FilterType} from "../../const";


import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    const {filterChangeHandler, currentFilter} = this.props;

    const filters = Object.values(FilterType).map((filter) => {
      const activeFilter = currentFilter === filter ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button type="button"
                className={`btn btn-filter ${activeFilter}`} 
                key={filter}
                onClick={() => filterChangeHandler(filter)}>
          {capitalizeFirstLetter(filter)}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {filters}
      </div>
    );
  }
}