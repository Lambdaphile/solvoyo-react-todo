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

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <section className="todo-list">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        onDone={handleDone}
        onDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </section>
  );
};

export default hot(App);
