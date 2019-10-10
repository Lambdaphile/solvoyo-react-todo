import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TodoListItem = ({ dispatch, todo }) => {
  const handleCheck = () => {
    dispatch({
      type: todo.complete ? 'undo' : 'do',
      id: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({ type: 'delete', task: todo.task, id: todo.id });
  };

  if (todo.complete) {
    return (
      <li>
        <Button onClick={handleCheck}>Undone</Button>
        {todo.task}
        <Button onClick={handleDelete}>Delete</Button>
      </li>
    );
  }

  return (
    <li>
      <Button onClick={handleCheck}>Done</Button>
      {todo.task}
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

TodoListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodoListItem;
