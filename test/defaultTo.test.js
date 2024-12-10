import { expect } from 'chai'
import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {
  const defaultValue = 0

  it('should return the value if it is not null or undefined', () => {
    expect(defaultTo(1, defaultValue)).to.equal(1)
    expect(defaultTo('test', defaultValue)).to.equal('test')
    expect(defaultTo(true, defaultValue)).to.equal(true)
    expect(defaultTo(false, defaultValue)).to.equal(false)
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

  it('should handle edge cases where the default value is complex', () => {
    const complexDefault = { key: 'value' }
    expect(defaultTo(undefined, complexDefault)).to.equal(complexDefault)
    expect(defaultTo(null, complexDefault)).to.equal(complexDefault)
  })

  it('should not use the default value if the value is falsy but not null/undefined', () => {
    expect(defaultTo(0, defaultValue)).to.equal(0)
    expect(defaultTo('', defaultValue)).to.equal('')
  })

  it('should handle cases where both value and defaultValue are objects', () => {
    const value = { key: 'actual' }
    const defaultValueObject = { key: 'default' }
    expect(defaultTo(value, defaultValueObject)).to.equal(value)
    expect(defaultTo(undefined, defaultValueObject)).to.equal(defaultValueObject)
  })
})
