import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const TodoForm = ({ dispatch }) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => setTask(event.target.value);

  const handleAdd = () => {
    if (task) {
      dispatch({ type: 'add', task, id: shortid.generate() });
    }
    setTask('');
  };

  return (
    <Form onSubmit={handleAdd}>
      <Form.Group>
        <Form.Input
          name="task"
          onChange={handleChange}
          placeholder="Add a task..."
          type="text"
          value={task}
        />
        <Form.Button circular color="violet" inverted type="submit">
          Add Task
        </Form.Button>
      </Form.Group>
    </Form>
  );
};

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default TodoForm;
