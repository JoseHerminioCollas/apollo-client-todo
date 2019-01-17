import React from 'react'
import { ApolloProvider } from 'react-apollo'
import enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Todos from '../component/Todo'
import { resolvers, apolloClientMock } from './apollo-client-mock'

enzyme.configure({ adapter: new Adapter() })

function ApolloTodo() {
  return (
    <ApolloProvider client={apolloClientMock}>
      <Todos />
    </ApolloProvider>
  )
}

describe('Todo Component', () => {
  const expectedTitle = 'abc'
  let wrapper
  beforeEach(() => {
    resolvers.Mutation.addTodo(null, { title: expectedTitle })
    wrapper = mount(<ApolloTodo />)
  })
  test('renders todo added to GQL client', () => {
    const actual = wrapper.find(Todos).text()
    expect(actual).toEqual(expect.stringContaining(expectedTitle))
  })
  test('has specific elements', () => {
    const actual = wrapper.find('section').exists()
    expect(actual).toEqual(true)
    const actual2 = wrapper.find('ul').exists()
    expect(actual2).toEqual(true)
  })
})
