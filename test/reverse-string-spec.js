const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');


 describe('Problems', function() {
    it('when given word should return word reversed', function() {
        expect(reverseString('fun')).to.equal('nuf');
    });

    it('should throw TypeError if string not passed into function', function() {
        const bool = true;
        const arr = ['hello'];
        const obj = {a: 'hey'};
        const nothing = null;
        const notNum = NaN;

        expect(() => reverseString(bool)).to.throw(TypeError);
        expect(() => reverseString(arr)).to.throw(TypeError);
        expect(() => reverseString(obj)).to.throw(TypeError);
        expect(() => reverseString(nothing)).to.throw(TypeError);
        expect(() => reverseString(notNum)).to.throw(TypeError);
    });
})
        
 