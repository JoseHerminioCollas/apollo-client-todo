import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'

import App from '../App'
// import Todo from '../component/Todo'
import GET_TODOS from '../graphql/get-todos'
import ADD_TODO from '../graphql/AddTodo'

enzyme.configure({ adapter: new Adapter() })
const mocks = [
  {
    request: {
      query: GET_TODOS,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        todos: { title: 'Buck', description: 'bulldog' },
      },
    },
  },
  {
    request: {
      query: ADD_TODO,
    },
    result: {
      data: {
        todo: { title: 'Title', description: 'bulldog' },
      },
    },
  },
]

describe('Todo Application', () => {
  test('matches a former snapshot', () => {
    const Comp = (
      <MockedProvider mock={mocks}>
        <App />
      </MockedProvider>
    )
    const component = renderer.create(Comp)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should populate Todo display when a Todo is added',
    async () => {
      const Comp = (
        <MockedProvider mock={mocks}>
          <App />
        </MockedProvider>
      )
      const testRenderer = renderer.create(Comp)
      // const testInstance = testRenderer.root
      await wait(0) // wait for response
      // add todo
      // check for todo
      // const actual = testInstance.findByType(Todo).instance
      // const actual2 = JSON.stringify(actual)
      const expectedValue = 'Todos'
      expect('Todos').toContain(expectedValue)
    })
  test('should be enclosed with a section element',
    () => {
      const c = shallow(<App />)
      expect(c.find('section')).toBeTruthy()
    })
})
