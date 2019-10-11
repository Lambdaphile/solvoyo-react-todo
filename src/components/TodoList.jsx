import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => (
  <List divided relaxed>
    {todos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
