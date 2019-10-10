import React, { useContext, useState } from 'react';
import shortid from 'shortid';
import { Form } from 'semantic-ui-react';
import { TodoContext } from './TodoApp';

const TodoForm = () => {
  const dispatch = useContext(TodoContext);
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

export default TodoForm;
