import React from 'react'
import { ApolloProvider } from 'react-apollo'

import apolloClient from './apollo-client'
import Todos from './component/Todo'
import AddTodo from './component/AddTodo'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Todos />
      </header>
    </div>
  </ApolloProvider>
)

export default App
