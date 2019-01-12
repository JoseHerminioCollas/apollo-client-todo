import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const uri = 'http://goatstone.com:4000/graphql'
const apolloClient = new ApolloClient({
  uri,
})
apolloClient.query({
  query: gql`
      {
        todos { title }
      }
    `,
})
  .then(result => result)

export default apolloClient
