import { expect } from 'chai'
import get from '../src/get.js'

describe('get', () => {

  const object = { a: [{ b: { c: 3 } }] }

  describe('happy cases', () => {
    it('should retrieve a nested property using a string path', () => {
      expect(get(object, 'a[0].b.c')).to.equal(3)
    })
  
    it('should retrieve a nested property using an array path', () => {
      expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
    })

    it('should return undefined if the path does not exist and no default is provided', () => {
      expect(get(object, 'a[-1].a.c')).to.be.undefined
      expect(get(object, 'a[0].x')).to.be.undefined
    })
  
    it('should return default value for undefined resolved values', () => {
      expect(get(object, 'a[0].x', 'default')).to.equal('default')
      const object2 = { a: [{ b: { c: undefined } }] }
      expect(get(object2, 'a[0].b.c', 'default')).to.equal('default')
    })
  })

  describe('unhappy cases', () => {
    it('should return undefined if object is null or undefined', () => {
      expect(get(null, 'a[0].b.c',)).to.be.undefined
      expect(get(undefined, 'a[0].b.c',)).to.be.undefined
    })

    it('should return undefined if path is null or undefined', () => {
      expect(get(object, null)).to.be.undefined
      expect(get(object, undefined)).to.be.undefined
    })

    it('should return undefined if path is a Number', () => {
      expect(get(object, 2)).to.be.undefined
      expect(get(object, 5.1)).to.be.undefined
    })

    it('should return undefined if path is an Array-like object', () => {
      expect(get(object, { length: 4, 0: 'a', 1: '0', 2: 'b', 3: 'c'})).to.be.undefined
    })
  })

})
