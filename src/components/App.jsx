import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.sass';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="todo-list">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList onDeleteTodo={handleDeleteTodo} todos={todos} />
    </section>
  );
};

export default hot(App);
