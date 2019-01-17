import ApolloClient from 'apollo-boost'
import apolloClient from '../apollo-client'

describe('Apollo Client', () => {
  test('provide a URI and recieve an object of type ApolloClient', () => {
    const uri = 'http://goatstone.com:4000/graphql'
    const isI = apolloClient(uri) instanceof ApolloClient
    expect(isI).toEqual(true)
  })
})
