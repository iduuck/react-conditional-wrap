
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'
/* eslint-enable import/no-extraneous-dependencies */

Enzyme.configure({ adapter: new Adapter() })

const exposedProperties = ['window', 'navigator', 'document']

const dom = new JSDOM('')

global.document = dom.window.document
global.window = dom.window

Object.keys(dom.window).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = dom.window[property]
  }
})

// global.navigator = {
//   userAgent: 'chrome',
// }
