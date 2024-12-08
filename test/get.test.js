import { expect } from 'chai'
import get from '../src/get.js'

describe('get', () => {
  const obj = { a: [{ b: { c: 3 } }] }

  it('should retrieve a nested property using a string path', () => {
    expect(get(obj, 'a[0].b.c')).to.equal(3)
  })

  it('should retrieve a nested property using an array path', () => {
    expect(get(obj, ['a', '0', 'b', 'c'])).to.equal(3)
  })

  it('should return default value if the path does not exist', () => {
    expect(get(obj, 'a[0].x', 'default')).to.equal('default')
  })

  it('should return undefined if the path does not exist and no default is provided', () => {
    expect(get(obj, 'a[0].x')).to.be.undefined
  })

  // TODO add test cases for undefined functionality.

})
