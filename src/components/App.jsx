import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

import './App.sass';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [taskArray, setTaskArray] = useState([]);

  const handleAddTask = (task) => {
    setTaskArray([...taskArray, task]);
  };

  const handleDeleteTask = (element) => {
    taskArray.splice(taskArray.indexOf(element), 1);
    setTaskArray([...taskArray]);
  };

  return (
    <section className="todo-list">
      <TodoForm onAddTask={handleAddTask} />
      <TodoList onDeleteTask={handleDeleteTask} tasks={taskArray} />
    </section>
  );
};

export default hot(App);
