import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ dispatch, todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoListItem key={todo.id} dispatch={dispatch} todo={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
