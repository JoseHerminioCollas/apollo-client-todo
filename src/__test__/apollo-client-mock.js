import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'

import { typeDefs, resolvers } from './schema'

const cache = new InMemoryCache()
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
})

const apolloClientMock = new ApolloClient({
  link: new SchemaLink({ schema: executableSchema }),
  cache,
})

export default apolloClientMock
