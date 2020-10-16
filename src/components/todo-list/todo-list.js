import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({todos, onDeleted, toggleImportantHandler, toggleDoneHandler}) => {
const elements = todos.map((item) => { 
  const {id, ...itemProps} = item;

  return (
    <li key={id} className="list-group-item todo-list">
      <TodoListItem 
        {...itemProps} 
        onDeleted = {() => onDeleted(id)} 
        toggleImportantHandler = {() => toggleImportantHandler(id)}
        toggleDoneHandler = {() => toggleDoneHandler(id)}

      />
    </li>
  );
});

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;