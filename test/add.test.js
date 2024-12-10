import { expect } from 'chai'
import add from "../src/add.js";

describe('add', () => {
  describe('happy cases', () => {
    
    it('should add two positive integers', () => {
      expect(add(6, 4)).to.equal(10)
    })
  
    it('should add two negative integers', () => {
      expect(add(-3, -7)).to.equal(-10)
    })
  
    it('should add an positive and an negative integer', () => {
      expect(add(10, -4)).to.equal(6)
      expect(add(-4, 10)).to.equal(6)
    })

    it('should add two large numbers', () => {
      expect(add(1000000000000000, 2000000000000000)).to.equal(3000000000000000)
      expect(add(1000000000000000, -1000000000000001)).to.equal(-1)
      expect(add(1000000000000000, -1000000000000000)).to.equal(0)
      expect(add(1000000000000000.1, 2000000000000000.1)).to.equal(3000000000000000.2)
      expect(add(1000000000000002, -1000000000000000.7)).to.be.closeTo(1.3, 0.1)
    })

    it('should add a number and zero', () => {
      expect(add(0, 4)).to.equal(4)
      expect(add(4, 0)).to.equal(4)
      expect(add(0, -4)).to.equal(-4)
      expect(add(-4, 0)).to.equal(-4)
      expect(add(0, 0)).to.equal(0)
    })

    it('should add two floats', () => {
      expect(add(10.5, 1.6)).to.equal(12.1)
      expect(add(10.5, -1.6)).to.equal(8.9)
      expect(add(10.51, 1.62)).to.be.closeTo(12.13, 0.001)
    })

  })

  describe('unhappy cases', () => {
    it('should add a string integer', () => {
      expect(add('6', '4')).to.equal('10')
      expect(add('10', '-4')).to.equal('6')
      expect(add('4', '0')).to.equal('4')
      expect(add('10.5', '1.6')).to.equal('12.1')
      expect(add('10.5', '-1.6')).to.equal('8.9')
    })

    it('should add two different types of numbers', () => {
      expect(add(1.0, 4)).to.equal(5)
      expect(add(1, 4.0)).to.equal(5)
      expect(add(1.5, 4)).to.equal(5.5)
      expect(add(1, 4.5)).to.equal(5.5)
    })

    it('a number and non-number should result in non-number', () => {
      expect(add(5, NaN)).to.be.NaN
      expect(add(NaN, 5)).to.be.NaN
      expect(add(5.1, NaN)).to.be.NaN
      expect(add(NaN, 5.1)).to.be.NaN
      expect(add(0, NaN)).to.be.NaN
      expect(add(NaN, 0)).to.be.NaN
      expect(add('5', NaN)).to.be.NaN
      expect(add(NaN, '5')).to.be.NaN
    })

    it('a number and non-number string should result in non-number', () => {
      expect(add(5, 'a')).to.be.NaN
      expect(add('a', 5)).to.be.NaN
      expect(add(5.1, 'a')).to.be.NaN
      expect(add('a', 5.1)).to.be.NaN

    })

    it('should add a number with undefined (default to 0)', () => {
      expect(add(7, undefined)).to.equal(7)
      expect(add(undefined, 7)).to.equal(7)
      expect(add(7.5, undefined)).to.equal(7.5)
      expect(add(undefined, 7.5)).to.equal(7.5)
      expect(add('7', undefined)).to.equal('7')
      expect(add(undefined, '7')).to.equal('7')
    })

    it('should add undefined and a non-number', () => {
      expect(add(undefined, NaN)).to.be.NaN
      expect(add(NaN, undefined)).to.be.NaN
    })
  
    it('should add with no parameters (default to 0)', () => {
      expect(add(undefined, undefined)).to.equal(0)
    })
  })

})
