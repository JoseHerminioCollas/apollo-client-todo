import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import apolloClientMock from './apollo-client-mock'
import AddTodo from '../component/AddTodo'

describe('AddTodo Component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    const Comp = (
      <ApolloProvider client={apolloClientMock}>
        <AddTodo />
      </ApolloProvider>
    )
    ReactDOM.render(Comp, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
