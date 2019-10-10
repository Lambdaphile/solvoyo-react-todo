import React, { useState, useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'semantic-ui-react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.sass';
import shortid from 'shortid';

const initalTodos = [
  {
    id: shortid.generate(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: shortid.generate(),
    task: 'Learn Firebase',
    complete: true,
  },
  {
    id: shortid.generate(),
    task: 'Learn GraphQL',
    complete: false,
  },
];

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return 'ALL';
    case 'SHOW_COMPLETE':
      return 'COMPLETE';
    case 'SHOW_INCOMPLETE':
      return 'INCOMPLETE';
    default:
      throw new Error();
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case 'ADD_TODO':
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
      });
    case 'DELETE':
      console.log(state);
      console.log(action.id.id);
      return state.filter((todo) => todo.id !== action.id.id);
    default:
      throw new Error();
  }
};
const App = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initalTodos);

  const handleAddTodo = (newTodo) => {
    dispatchTodos({ type: 'ADD_TODO', task: newTodo.task, id: newTodo.id });
  };

  const handleDeleteTodo = (id) => {
    dispatchTodos({ type: 'DELETE', task: 'Learn React', id });
  };

  const handleDone = (todo) => {
    dispatchTodos({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  const handleShowAll = () => {
    dispatchFilter({ type: 'SHOW_ALL' });
  };

  const handleShowDone = () => {
    dispatchFilter({ type: 'SHOW_COMPLETE' });
  };

  const handleShowUndone = () => {
    dispatchFilter({ type: 'SHOW_INCOMPLETE' });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });

  return (
    <section className="todo-list">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        onDone={handleDone}
        onDeleteTodo={handleDeleteTodo}
        todos={filteredTodos}
      />
      <div>
        <Button onClick={handleShowAll} primary>
          Show All
        </Button>
        <Button onClick={handleShowDone} primary>
          Show Done
        </Button>
        <Button onClick={handleShowUndone} primary>
          Show Undone
        </Button>
      </div>
    </section>
  );
};

export default hot(App);
