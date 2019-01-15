import React from 'react'
// import { ApolloProvider } from 'react-apollo'

// import apolloClient from './apollo-client'
import Todos from './component/Todo'
import AddTodo from './component/AddTodo'

const App = () => (
  // <ApolloProvider client={apolloClient}>
  <section className="todo-app">
    <header>
      Todos
    </header>
    <AddTodo />
    <Todos />
  </section>
  // </ApolloProvider>
)

export default App
