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
      update={(cache, { data: { addTodo } }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS })
        console.log('x', addTodo)
        cache.writeQuery({
          query: GET_TODOS,
          data: {
            todos: todos.concat([{
              __typename: 'Todo',
              title: addTodo.title,
              description: addTodo.description,
            }]),
          },
        })
      }}
    >
      {addTodo => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              addTodo({ variables: { title: input.value } })
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
