import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import apolloClient from '../apollo-client'
import AddTodo from '../component/AddTodo'

describe('AddTodo Component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    const Comp = (
      <ApolloProvider client={apolloClient}>
        <AddTodo />
      </ApolloProvider>
    )
    ReactDOM.render(Comp, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
