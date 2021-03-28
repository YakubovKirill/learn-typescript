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
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  function toggleHand(id: number) {
    setTodos(prev => {
      const newArr = prev.map(todo => {
        if(todo.id === id) todo.completed = !todo.completed
        return todo
      })
      return newArr
  })
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <h1>Hello</h1>
        <Form onAdd={addHandler}/>
        <TodoList onToggle={toggleHand} todos={todos}  />
      </div>
    </div>
  );
}

export default App;
