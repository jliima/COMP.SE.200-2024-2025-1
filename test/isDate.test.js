import { expect } from 'chai'
import isDate from '../src/isDate.js'

describe('isDate', () => {
  it('should return true for a Date object', () => {
    expect(isDate(new Date())).to.be.true
  })

  it('should return false for a string representation of a date', () => {
    expect(isDate('2024-12-08')).to.be.false
  })

  it('should return false for non-date types', () => {
    expect(isDate(12345)).to.be.false
    expect(isDate({})).to.be.false
    expect(isDate([])).to.be.false
    expect(isDate(null)).to.be.false
    expect(isDate(undefined)).to.be.false
    expect(isDate(true)).to.be.false
    expect(isDate(Symbol('date'))).to.be.false
  })

  it('should return true for an invalid Date object', () => {
    expect(isDate(new Date('invalid date'))).to.be.true
  })

  it('should return false for functions', () => {
    expect(isDate(() => {})).to.be.false
    expect(isDate(function () {})).to.be.false
  })

  it('should return false for objects with a custom `toString` method returning [object Date]', () => {
    const fakeDate = {
      toString: () => '[object Date]'
    }
    expect(isDate(fakeDate)).to.be.false
  })

  it('should return false for manually crafted objects mimicking Date', () => {
    const mimicDate = {
      getTime: () => Date.now(),
      getFullYear: () => new Date().getFullYear()
    }
    expect(isDate(mimicDate)).to.be.false
  })
})

