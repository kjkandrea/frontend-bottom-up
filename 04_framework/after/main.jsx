import React, { useState } from 'react'
import mock from '../mock'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('app')).render(<Main />)

function Main() {
  const [todos, setTodos] = useState(mock)

  const deleteTodoById = id => setTodos(prev => prev.filter(todo => todo.id !== id))

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => deleteTodoById(todo.id)}>완료</button>
        </li>
      ))}
    </ul>
  )
}
