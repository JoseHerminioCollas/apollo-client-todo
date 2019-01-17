import React from 'react'
import { ApolloProvider } from 'react-apollo'
import enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import wait from 'waait'

import { resolvers, apolloClientMock } from './apollo-client-mock'
import AddTodo from '../component/AddTodo'

enzyme.configure({ adapter: new Adapter() })

function ApolloAddTodo() {
  return (
    <ApolloProvider client={apolloClientMock}>
      <AddTodo />
    </ApolloProvider>
  )
}

describe('AddTodo Component', () => {
  let wrapper
  const expectedTitle = 'abc'
  const expectedDescription = 'xyz'
  beforeEach(async () => {
    wrapper = mount(<ApolloAddTodo />)
  })
  test('adds a Todo record to the GraphQL data', async () => {
    wrapper.find('[name="title"]').instance().value = expectedTitle
    wrapper.find('[name="description"]').instance().value = expectedDescription
    wrapper.find('button').simulate('click')
    await wait(0)
    expect(resolvers.Query.todos().length).toEqual(1)
    expect(resolvers.Query.todos()[0].title).toEqual(expectedTitle)
  })
  test('displays a title', () => {
    const actual = wrapper.find(AddTodo).text()
    expect(actual).toEqual(expect.stringContaining('Add Todo'))
  })
  test('has input fields for title and description', () => {
    expect(wrapper.find('[name="title"]').exists()).toEqual(true)
    expect(wrapper.find('[name="description"]').exists()).toEqual(true)
  })
})
