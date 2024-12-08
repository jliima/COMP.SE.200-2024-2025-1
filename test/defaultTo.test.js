import { expect } from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {
  const defaultValue = 0

  it('should return the value if it is not null or undefined', () => {
    expect(defaultTo(1, defaultValue)).to.equal(1)
  })

  it('should return the default value if value is undefined', () => {
    expect(defaultTo(undefined, defaultValue)).to.equal(defaultValue)
  })

  it('should return the default value if value is null', () => {
    expect(defaultTo(null, defaultValue)).to.equal(defaultValue)
  })

  it('should return NaN if the value is NaN', () => {
    expect(defaultTo(NaN, defaultValue)).to.be.NaN
  })
})
