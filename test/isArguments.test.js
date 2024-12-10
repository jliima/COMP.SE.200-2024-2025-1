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
    expect(isArguments(123)).to.be.false
    expect(isArguments(null)).to.be.false
    expect(isArguments(undefined)).to.be.false
    expect(isArguments(true)).to.be.false
  })

  it('should return false for functions', () => {
    expect(isArguments(function () {})).to.be.false
    expect(isArguments(() => {})).to.be.false
  })

  it('should return false for an object with a custom [object Arguments] tag', () => {
    const fakeArguments = {
      toString: () => '[object Arguments]'
    }
    expect(isArguments(fakeArguments)).to.be.false
  })

  it('should return false for an object mimicking arguments structure', () => {
    const mimicArguments = {
      0: 'arg1',
      1: 'arg2',
      length: 2
    }
    expect(isArguments(mimicArguments)).to.be.false
  })

  it('should handle objects with properties similar to arguments', () => {
    const mimicArguments = Object.create(null)
    mimicArguments[0] = 'arg1'
    mimicArguments[1] = 'arg2'
    mimicArguments.length = 2
    expect(isArguments(mimicArguments)).to.be.false
  })
})
