import React from 'react';
import ReactDOM from 'react-dom';

import './granimjs/granimInstance';
import './granimjs/granimInstance.css';

import TodoApp from './components/TodoApp';

import './index.sass';
import '../public/assets/favicon.ico';

ReactDOM.render(<TodoApp />, document.getElementById('root'));
