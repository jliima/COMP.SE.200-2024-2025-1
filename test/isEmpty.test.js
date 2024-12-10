import { expect } from 'chai'
import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  describe('happy cases', () => {
    it('should return true for null', () => {
      expect(isEmpty(null)).to.be.true
    })
  
    it('should return true for undefined', () => {
      expect(isEmpty(undefined)).to.be.true
    })
  
    it('should return true for boolean values', () => {
      expect(isEmpty(true)).to.be.true
      expect(isEmpty(false)).to.be.true
    })
  
    it('should return true for numbers', () => {
      expect(isEmpty(0)).to.be.true
      expect(isEmpty(1)).to.be.true
      expect(isEmpty(1.5)).to.be.true
      expect(isEmpty(NaN)).to.be.true
    })
  
    it('should return true for an empty object', () => {
      expect(isEmpty({})).to.be.true
    })
  
    it('should return true for an empty array', () => {
      expect(isEmpty([])).to.be.true
    })

    it('should return true for a empty buffer', () => {
      expect(isEmpty(Buffer.alloc(0))).to.be.true
    })

    it('should return true for an empty string', () => {
      expect(isEmpty('')).to.be.true
    })

    /*
    // TBD if this is correctly defined.
    it('should return true for array-like object with length = 0', () => {
      const arrayLike = { length: 0 }
      expect(isEmpty(arrayLike)).to.be.true
    })
    */
   
    it('should return true for an empty Map', () => {
      expect(isEmpty(new Map())).to.be.true
    })
  
    it('should return true for an empty Set', () => {
      expect(isEmpty(new Set())).to.be.true
    })

    it('should return true for empty prototype object', () => {
      function Constructor() {}
      const prototypeObject = Constructor.prototype
      expect(isEmpty(prototypeObject)).to.be.true
    })
  
    it('should return false for a non-empty object', () => {
      expect(isEmpty({ a: 1 })).to.be.false
    })

    it('should return false for an non-empty array', () => {
      expect(isEmpty([1, 2])).to.be.false
    })

    it('should return false for a non-empty buffer', () => {
      expect(isEmpty(Buffer.from([1, 2, 3]))).to.be.false
    })

    it('should return false for a non-empty string', () => {
      expect(isEmpty('abc')).to.be.false
    })

    it('should return false for array-like object with length > 0', () => {
      const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
      expect(isEmpty(arrayLike)).to.be.false
    })

    it('should return false for a non-empty Map', () => {
      const map = new Map()
      map.set('key', 'value')
      expect(isEmpty(map)).to.be.false
    })
  
    it('should return false for a non-empty Set', () => {
      const set = new Set()
      set.add(1)
      expect(isEmpty(set)).to.be.false
    })

    it('should return false for non-empty prototype object', () => {
      function Constructor() {}
      Constructor.prototype.someProp = 'value'
      const prototypeObject = Constructor.prototype
      expect(isEmpty(prototypeObject)).to.be.false
    })
  })

  describe('uhappy cases', () => {
    // TODO (?)
  })
  
})
