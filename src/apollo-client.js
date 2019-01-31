import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const uri = 'http://localhost:8888/graphql'
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  uri,
  cache,
})

export default apolloClient
