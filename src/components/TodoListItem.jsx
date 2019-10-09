import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TodoListItem = ({ onDeleteTodo, task, id }) => {
  return (
    <li>
      {task}
      <Button onClick={() => onDeleteTodo(id)}>Deleteeee</Button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
};

export default TodoListItem;
