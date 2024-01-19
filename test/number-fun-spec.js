const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree function', function() {
    it('should return three', function() {
        expect(returnsThree()).to.equal(3);
    })
});

describe('reciprocal function', function() {
    context('valid arguments', function() {
        it('should take a number and return the reciprocal of that number', function() {
            expect(reciprocal(5)).to.equal(0.2);
            // expect(reciprocal(-8)).to.equal(-0.125);
            expect(reciprocal(20)).to.equal(0.05);
        })

    })
    context('invalid arguments', function() {

        it('should throw range error if given argument is less than 1 or greater than 100', function() {
            expect(() => reciprocal(0)).to.throw(RangeError)
            expect(() => reciprocal(1000001)).to.throw(RangeError)
        })
        it('should throw type error if anything other than number is passed in.', function() {
            expect(() => reciprocal('hi')).to.throw(TypeError);
            expect(() => reciprocal([5])).to.throw(TypeError);
            expect(() => reciprocal(true)).to.throw(TypeError);
        }) 
    })

       
        
})
