import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TodoListItem = ({ done, onDone, onDeleteTodo, task, id, todo }) => {
  if (todo.complete) {
    return (
      <li>
        <Button onClick={() => onDone(todo)}>Undone</Button>
        {task}
        <Button onClick={() => onDeleteTodo(todo)}>Deleteeee</Button>
      </li>
    );
  }

  return (
    <li>
      <Button onClick={() => onDone(todo)}>Done</Button>
      {task}
      <Button onClick={() => onDeleteTodo(todo)}>Deleteeee</Button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired,
};

export default TodoListItem;
