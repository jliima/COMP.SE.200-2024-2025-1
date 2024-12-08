import { expect } from 'chai'
import reduce from '../src/reduce.js'

describe('reduce', () => {
  it('should reduce an array with an initial value', () => {
    const result = reduce([1, 2], (sum, n) => sum + n, 0)
    expect(result).to.equal(3)
  })

  it('should reduce an object', () => {
    const obj = { a: 1, b: 2 }
    const result = reduce(obj, (sum, n) => sum + n, 0)
    expect(result).to.equal(3)
  })

  it('should use the first element as accumulator if none is provided', () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n)
    expect(result).to.equal(6)
  })

  // TODO add more tests
})
