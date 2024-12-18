import { expect } from 'chai'
import map from '../src/map.js'

describe('map', () => {
  function square(n) {
    return n * n
  }
  describe('happy cases', () => {
    it('should map an array of numbers', () => {
      expect(map([4, 8], square)).to.deep.equal([16, 64])
    })
  
    it('should return an empty array for null or undefined', () => {
      expect(map(null, square)).to.deep.equal([])
      expect(map(undefined, square)).to.deep.equal([])
    })
  
    it('should pass index and array as additional arguments to the iteratee', () => {
      map([1], (value, index, array) => {
        expect(value).to.equal(1)
        expect(index).to.equal(0)
        expect(array).to.deep.equal([1])
      })
    })
  })

  describe('unhappy cases', () => {
    it('should throw TypeError for undefined iteratee', () => {
      expect(() => map([4, 8], undefined)).to.throw(TypeError, 'iteratee is not a function')
    })
  })
})
