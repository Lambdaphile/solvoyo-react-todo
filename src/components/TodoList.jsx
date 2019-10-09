import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ onDeleteTodo, todos }) => {
  const handleDeleteTodo = (id) => {
    onDeleteTodo(id);
  };

  const todoList = todos.map((todo) => (
    <TodoListItem
      id={todo.id}
      key={todo.id}
      onDeleteTodo={handleDeleteTodo}
      task={todo.task}
    />
  ));
  return <ul>{todoList}</ul>;
};

TodoList.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
