import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TodoListItem = ({ done, onDone, onDeleteTodo, task, id }) => {
  if (done) {
    return (
      <li>
        <Button onClick={() => onDone(id)}>Undone</Button>
        {task}
        <Button onClick={() => onDeleteTodo(id)}>Deleteeee</Button>
      </li>
    );
  }
  return (
    <li>
      <Button onClick={() => onDone(id)}>Done</Button>
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
