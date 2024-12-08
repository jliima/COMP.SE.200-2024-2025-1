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
  })
})
