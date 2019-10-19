import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './TodoFilter.sass';

const TodoFilter = ({ dispatch }) => {
  const handleShowAll = () => {
    dispatch({ type: 'show-all' });
  };

  const handleShowDone = () => {
    dispatch({ type: 'show-complete' });
  };

  const handleShowUndone = () => {
    dispatch({ type: 'show-incomplete' });
  };

  return (
    <div className="todo__filter">
      <Button
        circular
        inverted
        onClick={handleShowAll}
        style={{ marginRight: '15px', width: '90px' }}
      >
        All
      </Button>
      <Button
        circular
        inverted
        onClick={handleShowDone}
        style={{ marginRight: '15px', width: '90px' }}
      >
        Done
      </Button>
      <Button
        circular
        inverted
        onClick={handleShowUndone}
        style={{ width: '90px' }}
      >
        Undone
      </Button>
    </div>
  );
};

TodoFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default TodoFilter;
