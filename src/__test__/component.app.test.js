import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

it('matches a former snapshot', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
