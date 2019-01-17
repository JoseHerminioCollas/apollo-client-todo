import ApolloClient from 'apollo-boost'

const apolloClient = uri => (
  new ApolloClient({
    uri,
  })
)

export default apolloClient
