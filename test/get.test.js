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
    it('should return undefined if given path is something else than Array|string', () => {
      expect(get(object, 2)).to.be.undefined
      expect(get(object, undefined)).to.be.undefined
      expect(get(object, { a: 2})).to.be.undefined
    })
  })

})
