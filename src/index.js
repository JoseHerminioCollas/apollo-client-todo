import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import apolloClient from './apollo-client'

const uri = 'http://goatstone.com:4000/graphql'

ReactDOM.render(
  (
    <ApolloProvider client={apolloClient(uri)}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root'),
)
