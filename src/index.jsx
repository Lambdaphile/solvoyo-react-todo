import React from 'react';
import ReactDOM from 'react-dom';

import './granimjs/granimInstance';
import './granimjs/granimInstance.css';

import TodoApp from './components/TodoApp';

import './index.sass';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<TodoApp />, document.getElementById('root'));
