import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import Todos from '../component/Todo'
import apolloClient from '../apollo-client'

describe('Todo Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const Comp = (
      <ApolloProvider client={apolloClient}>
        <Todos client={apolloClient} />
      </ApolloProvider>
    )
    ReactDOM.render(Comp, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
