import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';

import App from '../App'

it('matches a former snapshot', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
