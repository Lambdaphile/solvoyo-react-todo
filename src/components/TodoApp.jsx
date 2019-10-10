import { hot } from 'react-hot-loader/root';
import React, { createContext, useReducer } from 'react';
import shortid from 'shortid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import './TodoApp.sass';

export const TodoContext = createContext(null);

let initialTodos;
if (!localStorage.getItem('solvoyo-todo')) {
  initialTodos = [
    { id: shortid.generate(), task: 'Learn React', complete: true },
    { id: shortid.generate(), task: 'Learn Redux', complete: false },
    { id: shortid.generate(), task: 'Learn TypeScript', complete: false },
  ];
  localStorage.setItem('solvoyo-todo', JSON.stringify(initialTodos));
} else {
  initialTodos = JSON.parse(localStorage.getItem('solvoyo-todo'));
}

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'show-all':
      return 'all';
    case 'show-complete':
      return 'complete';
    case 'show-incomplete':
      return 'incomplete';
    default:
      throw new Error();
  }
};

const todoReducer = (state, action) => {
  let temp;
  switch (action.type) {
    case 'do':
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, complete: true };
        return todo;
      });
    case 'undo':
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, complete: false };
        return todo;
      });
    case 'add':
      temp = state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
      localStorage.setItem('solvoyo-todo', JSON.stringify(temp));
      return temp;
    case 'delete':
      temp = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem('solvoyo-todo', JSON.stringify(temp));
      return temp;
    default:
      throw new Error();
  }
};

const TodoApp = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'all');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'complete' && todo.complete) return true;
    if (filter === 'incomplete' && !todo.complete) return true;
    return false;
  });

  return (
    <section className="todo">
      <TodoContext.Provider value={dispatchTodos}>
        <TodoForm />
        <TodoList todos={filteredTodos} />
        <TodoFilter dispatch={dispatchFilter} />
      </TodoContext.Provider>
    </section>
  );
};

export default hot(TodoApp);
