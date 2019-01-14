import React from 'react'
import renderer from 'react-test-renderer'
import enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

enzyme.configure({ adapter: new Adapter() })


describe('Todo Application', () => {
  test('matches a former snapshot', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('should start with a blank input field',
    () => {
      const c = mount(<App />)
      expect(c.find('input').length).toBe(1)
      expect(c.find('input').instance().value).toBe('')
    })
  test('should be enclosed with a section element',
    () => {
      const c = shallow(<App />)
      expect(c.find('section')).toBeTruthy()
    })
})
