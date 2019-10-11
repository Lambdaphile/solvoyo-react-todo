import React, { useContext, useState } from 'react';
import shortid from 'shortid';
import { Form } from 'semantic-ui-react';
import { TodoContext } from './TodoApp';
import './TodoForm.sass';

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
    <Form className="todo__form" onSubmit={handleAdd}>
      <Form.Group>
        <Form.Input
          focus
          name="task"
          onChange={handleChange}
          placeholder="Add a task..."
          style={{ height: '50px', width: '249px' }}
          type="text"
          value={task}
        />
        <Form.Button
          color="yellow"
          style={{ margin: '0 0 0 -15px' }}
          type="submit"
        >
          Add Task
        </Form.Button>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
