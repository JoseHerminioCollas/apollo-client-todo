import apolloClientMock from './apollo-client-mock'

const resolvers = require('./schema/resolvers')
const typeDefs = require('./schema/schema')

module.exports = { resolvers, typeDefs, apolloClientMock }
