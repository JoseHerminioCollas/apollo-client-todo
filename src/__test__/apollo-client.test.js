import ApolloClient from 'apollo-boost'
import apolloClient from '../apollo-client'

describe('Apollo Client', () => {
  test('provide a URI and recieve an object of type ApolloClient', () => {
    const isI = apolloClient instanceof ApolloClient
    expect(isI).toEqual(true)
  })
})
