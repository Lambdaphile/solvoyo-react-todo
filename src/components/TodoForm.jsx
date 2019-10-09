import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import shortid from 'shortid';

const TodoForm = ({ onAddTodo }) => {
  const handleAddTodo = (event) => {
    const newTodo = {
      task: new FormData(event.target).get('task'),
      id: shortid.generate(),
      done: false,
    };
    onAddTodo(newTodo);
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Form.Group>
        <Form.Input name="task" placeholder="Add a task..." type="text" />
        <Form.Button circular color="violet" inverted type="submit">
          Add Task
        </Form.Button>
      </Form.Group>
    </Form>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
