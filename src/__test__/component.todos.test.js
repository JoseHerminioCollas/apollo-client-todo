import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import apolloClientMock from './apollo-client-mock'
import Todos from '../component/Todo'

describe('Todo Component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    const Comp = (
      <ApolloProvider client={apolloClientMock}>
        <Todos />
      </ApolloProvider>
    )
    ReactDOM.render(Comp, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
