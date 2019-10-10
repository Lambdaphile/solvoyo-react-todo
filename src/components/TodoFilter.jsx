import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

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
    <div>
      <Button onClick={handleShowAll} primary>
        Show All
      </Button>
      <Button onClick={handleShowDone} primary>
        Show Done
      </Button>
      <Button onClick={handleShowUndone} primary>
        Show Undone
      </Button>
    </div>
  );
};

TodoFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default TodoFilter;
