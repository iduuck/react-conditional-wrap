
import React from 'react'
import { shallow } from 'enzyme'

import { Wrap } from '../src'

describe('<Wrap />', () => {
  describe('`when` prop', () => {
    it('should render if true', () => {
      const wrapper = shallow(<Wrap element="div" when />)
      expect(wrapper.find('div')).toHaveLength(1)
    })

    it('shouldn\'t render if false', () => {
      const wrapper = shallow(<Wrap element="div" when={false} />)
      expect(wrapper.find('div')).toHaveLength(0)
    })

    it('should render if method returning true', () => {
      const wrapper = shallow(<Wrap element="div" when={() => true} />)
      expect(wrapper.find('div')).toHaveLength(1)
    })

    it('shouldn\'t render if method returning false', () => {
      const wrapper = shallow(<Wrap element="div" when={() => false} />)
      expect(wrapper.find('div')).toHaveLength(0)
    })
  })

  describe('`element` prop', () => {
    it('should accept string', () => {
      const wrapper = shallow(<Wrap element="div" when />)
      expect(wrapper.find('div')).toHaveLength(1)
    })

    it('should accept react element', () => {
      const Wrapper = ({ children }) => <div>{children}</div>
      const element = shallow(<Wrap element="div" when />)

      expect(element.find('div')).toHaveLength(1)
    })
  })

  describe('other props', () => {
    it('should pass all other props', () => {
      const Wrapper = ({ children }) => <div >{children}</div>
      const element = shallow(<Wrap element="div" when className="randomName" />)

      expect(element.find('div').prop('className')).toEqual('randomName')
    })
  })
})
