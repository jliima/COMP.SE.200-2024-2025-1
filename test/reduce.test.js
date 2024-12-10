import { expect } from 'chai'
import reduce from '../src/reduce.js'

describe('reduce', () => {

  describe('happy cases', () => {
    it('should reduce an array with an initial value', () => {
      const result = reduce([1, 2], (sum, n) => sum + n, 7)
      expect(result).to.equal(10)
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

    it('should reduce an array-like object with length > 0', () => {
      const result = reduce({ length: 3, 0: 'a', 1: 'b', 2: 'c' }, (sum, n) => sum + n)
      expect(result).to.equal('abc')
    })

  })

  describe('unhappy cases', () => {
    it('should return undefined if input is not Array|Object', () => {
      expect(reduce(undefined, (sum, n) => sum + n)).to.be.undefined
      expect(reduce(1, (sum, n) => sum + n)).to.be.undefined
      expect(reduce(NaN, (sum, n) => sum + n)).to.be.undefined
    })
  })

})
