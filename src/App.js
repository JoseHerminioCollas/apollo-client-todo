import React from 'react'
import './app.scss'

import Todos from './component/Todo'
import AddTodo from './component/AddTodo'

const App = () => (
  <section className="todo-app">
    <header>
      Apollo Todos
    </header>
    <AddTodo />
    <Todos />
  </section>
)

export default App
