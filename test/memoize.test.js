import { expect } from 'chai'
import memoize from '../src/memoize.js'

describe('memoize', () => {
    it('should memoize a function without a resolver', () => {
        const add = (a, b) => a + b
        const memoizedAdd = memoize(add)

        expect(memoizedAdd(1, 2)).to.equal(3)
        expect(memoizedAdd(1, 2)).to.equal(3) // Should return cached result
    })

    it('should memoize a function with a custom resolver', () => {
        const multiply = (a, b) => a * b
        const resolver = (a, b) => `${a},${b}`
        const memoizedMultiply = memoize(multiply, resolver)

        expect(memoizedMultiply(2, 3)).to.equal(6)
        expect(memoizedMultiply(2, 3)).to.equal(6) // Should return cached result
    })

    it('should use the resolver to determine the cache key', () => {
        const identity = (x) => x
        const resolver = (x) => x.length
        const memoizedIdentity = memoize(identity, resolver)

        expect(memoizedIdentity('foo')).to.equal('foo')
        expect(memoizedIdentity('bar')).to.equal('bar') // Different length, not cached
    })

    it('should return new results when cache keys are different', () => {
        const multiply = (a, b) => a * b
        const memoizedMultiply = memoize(multiply)

        expect(memoizedMultiply(2, 3)).to.equal(6)
        expect(memoizedMultiply(3, 4)).to.equal(12) // Different args, not cached
    })

    it('should throw an error if the first argument is not a function', () => {
        expect(() => memoize(123)).to.throw(TypeError, 'Expected a function')
    })

    it('should expose the cache property and allow modification', () => {
        const subtract = (a, b) => a - b
        const memoizedSubtract = memoize(subtract)

        expect(memoizedSubtract(5, 3)).to.equal(2)

        // Modify the cache manually
        memoizedSubtract.cache.set(5, 'manually set value')
        expect(memoizedSubtract(5, 3)).to.equal('manually set value')
    })

    it('should not share cache between different memoized functions', () => {
        const fn1 = (x) => x + 1
        const fn2 = (x) => x + 2

        const memoizedFn1 = memoize(fn1)
        const memoizedFn2 = memoize(fn2)

        expect(memoizedFn1(1)).to.equal(2)
        expect(memoizedFn2(1)).to.equal(3)
        expect(memoizedFn1.cache.has(1)).to.be.true
        expect(memoizedFn2.cache.has(1)).to.be.true
    })

    it('should handle cache miss correctly', () => {
        const concat = (a, b) => `${a}${b}`
        const memoizedConcat = memoize(concat)

        expect(memoizedConcat('Hello', 'World')).to.equal('HelloWorld')
        expect(memoizedConcat('Hello', 'Everyone')).to.equal('HelloEveryone') // Cache miss
    })
})
