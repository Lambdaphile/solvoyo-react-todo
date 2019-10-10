import { hot } from 'react-hot-loader/root';
import React, { useReducer } from 'react';
import shortid from 'shortid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import './TodoApp.sass';

const initialTodos = [
  { id: shortid.generate(), task: 'Learn React', complete: true },
  { id: shortid.generate(), task: 'Learn Redux', complete: false },
  { id: shortid.generate(), task: 'Learn TypeScript', complete: false },
];

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
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    case 'delete':
      return state.filter((todo) => todo.id !== action.id);
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
      <TodoForm dispatch={dispatchTodos} />
      <TodoList dispatch={dispatchTodos} todos={filteredTodos} />
      <TodoFilter dispatch={dispatchFilter} />
    </section>
  );
};

export default hot(TodoApp);
