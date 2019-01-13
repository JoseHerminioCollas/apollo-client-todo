import React from 'react'
import { ApolloProvider, Mutation } from 'react-apollo'
import apolloClient from './apollo-client'
import Todos from './component/Todo'

import ADD_TODO from './graphql/AddTodo'
import GET_TODOS from './graphql/get-todos'

const AddTodo = () => {
  let input

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { b } }) => {
        // console.log('arg', b)
        const { todos } = cache.readQuery({ query: GET_TODOS })
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([{ __typename: 'Todo', title: b, author: 'abvc' }]) },
        })
      }}
    >
      {b => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              b({ variables: { z: input.value } })
              input.value = ''
            }}
          >
            <input
              ref={(node) => {
                input = node
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}

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
