import React, { useState } from 'react';
import { Form } from './components/Form';
import { Navbar } from './components/Navbar';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
      changeCompletedTrue() { this.completed = true },
      changeCompletedFalse() { this.completed = false }
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHand = (id: number) => {
    setTodos((prev) => prev.map((todo) => {
      if(todo.id === id) {
        if (!todo.completed) todo.changeCompletedTrue()
      }
      return todo
    }))
  }

  const remove = (id: number) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <h1>Hello</h1>
        <Form onAdd={addHandler}/>
        <TodoList todos={todos} onToggle={toggleHand} onRemove={remove} />
      </div>
    </div>
  );
}

export default App;
