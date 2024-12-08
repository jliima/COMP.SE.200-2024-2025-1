import { expect } from 'chai'
import isArguments from '../src/isArguments.js'

describe('isArguments', () => {
  it('should return true for an arguments object', () => {
    function testFunc() {
      return arguments
    }
    expect(isArguments(testFunc())).to.be.true
  })

  it('should return false for an array', () => {
    expect(isArguments([1, 2, 3])).to.be.false
  })

  it('should return false for other object types', () => {
    expect(isArguments({})).to.be.false
    expect(isArguments('string')).to.be.false
  })
})
