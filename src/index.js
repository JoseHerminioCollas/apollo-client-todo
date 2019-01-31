import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import apolloClient from './apollo-client'

ReactDOM.render(
  (
    <ApolloProvider
      client={apolloClient}
    >
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root'),
)
