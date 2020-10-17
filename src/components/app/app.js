import React, { Component } from 'react';
import {nanoid} from "nanoid";

import {generateList} from "../../mocks/tasks";
import {FilterType} from "../../const";

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

const MAX_TASKS = 4;

export default class App extends Component {
  state = {
    todoData: new Array(MAX_TASKS).fill().map(() => generateList()),
    term: '',
    currentFilter: FilterType.DEFAULT,
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => element.id === id);

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: nanoid(3),
    };

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });

  };

  toggleImportantHandler = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `important`)
      };
    });
  };

  toggleDoneHandler = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `done`)
      };
    });
  };

  toggleProperty = (array, id, propName) => {
    const index = array.findIndex((element) => element.id === id);

    const oldItem = array[index];

    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};
      
    return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1),
    ];
  };

  search = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  };

  searchChangeHandler = (term) => {
    this.setState({term});
  };

  filterTasks = (tasks, currentFilter) => {
    switch (currentFilter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter((it) => !it.done);
      case 'done':
        return tasks.filter((it) => it.done);
      default:
        return tasks;
    }

  };

  filterChangeHandler = (currentFilter) => {
    this.setState({currentFilter});
  };

  render() {
    const {todoData, term, currentFilter} = this.state;

    const visibleItems = this.filterTasks(this.search(todoData, term), currentFilter);
    const doneCount = todoData.filter((element) => element.done).length;
    const todoCount = todoData.filter((element) => !element.done).length;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchChangeHandler={this.searchChangeHandler} />
          <ItemStatusFilter filterChangeHandler={this.filterChangeHandler} currentFilter={currentFilter} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          toggleImportantHandler={this.toggleImportantHandler}
          toggleDoneHandler={this.toggleDoneHandler} />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};