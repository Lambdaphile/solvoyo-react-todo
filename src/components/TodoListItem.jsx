import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Icon, List } from 'semantic-ui-react';
import { TodoContext } from './TodoApp';
import './TodoListItem.sass';

const TodoListItem = ({ todo }) => {
  const dispatch = useContext(TodoContext);

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
      <List.Item style={{ padding: '0' }}>
        <List.Content>
          <div className="list__task">
            <Checkbox checked={todo.complete} onChange={handleCheck} />
            <p style={{ fontSize: '15px', margin: '0 5px', width: '100%' }}>
              <strike>{todo.task}</strike>
            </p>
            <Icon
              name="close"
              onClick={handleDelete}
              size="large"
              style={{ cursor: 'pointer' }}
            />
          </div>
        </List.Content>
      </List.Item>
    );
  }

  return (
    <List.Item style={{ padding: '0' }}>
      <List.Content>
        <div className="list__task">
          <Checkbox checked={todo.complete} onChange={handleCheck} />
          <p style={{ fontSize: '15px', margin: '0 5px', width: '100%' }}>
            {todo.task}
          </p>
          <Icon
            name="close"
            onClick={handleDelete}
            size="large"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </List.Content>
    </List.Item>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodoListItem;
