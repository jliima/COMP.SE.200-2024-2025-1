import { expect } from 'chai'
import add from "../src/add.js";

const defaultValue = 0

describe('add', () => {
  describe('happy cases', () => {
    it('should add two positive numbers', () => {
      expect(add(6, 4)).to.equal(10)
    })
  
    it('should add a positive number and zero', () => {
      expect(add(5, 0)).to.equal(5)
    })
  
    it('should add two negative numbers', () => {
      expect(add(-3, -7)).to.equal(-10)
    })
  
    it('should add a positive and a negative number', () => {
      expect(add(10, -4)).to.equal(6)
    })
  })

})
