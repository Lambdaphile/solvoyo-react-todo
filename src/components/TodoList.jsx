import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ onDeleteTask, tasks }) => {
  const handleDeleteTask = (e) => {
    onDeleteTask(e.target.innerHTML);
  };

  const taskList = tasks.map((item) => (
    <li key={item} onClick={handleDeleteTask}>
      {item}
    </li>
  ));
  return <ul>{taskList}</ul>;
};

TodoList.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
