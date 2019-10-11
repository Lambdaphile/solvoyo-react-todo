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
    { id: shortid.generate(), task: 'Eat', complete: false },
    { id: shortid.generate(), task: 'Sleep', complete: false },
    { id: shortid.generate(), task: 'Code', complete: true },
    { id: shortid.generate(), task: 'Repeat', complete: true },
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
    <TodoContext.Provider value={dispatchTodos}>
      <h1 className="solvoyo">Solvoyo</h1>
      <TodoForm />
      <section className="todo">
        <TodoList todos={filteredTodos} />
      </section>
      <TodoFilter dispatch={dispatchFilter} />
    </TodoContext.Provider>
  );
};

export default hot(TodoApp);
