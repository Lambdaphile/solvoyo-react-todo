import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const TodoForm = ({ onAddTask }) => {
  const handleAddTask = (e) => {
    onAddTask(new FormData(e.target).get('task'));
  };

  return (
    <Form onSubmit={handleAddTask}>
      <Form.Group>
        <Form.Input name="task" placeholder="Enter a task..." type="text" />
        <Form.Button circular color="violet" inverted type="submit">
          Add Task
        </Form.Button>
      </Form.Group>
    </Form>
  );
};

TodoForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default TodoForm;
