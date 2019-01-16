import React from 'react'
import { ApolloProvider } from 'react-apollo'
import enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import wait from 'waait'

import Todos from '../component/Todo'
import { resolvers, apolloClientMock } from './apollo-client-mock'

const expectedTitle = 'bbb'
resolvers.Mutation.addTodo(null, { title: expectedTitle })

enzyme.configure({ adapter: new Adapter() })

function Comp() {
  return (
    <ApolloProvider client={apolloClientMock}>
      <Todos />
    </ApolloProvider>
  )
}

describe('Todo Component', () => {
  test('renders todo add to GQL client', async () => {
    const wrapper = mount(<Comp />)
    await wait(0) // wait for response
    const actual = wrapper.find(Todos).text()
    expect(actual).toEqual(expect.stringContaining(expectedTitle))
  })
})
