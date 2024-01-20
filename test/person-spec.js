const {expect} = require('chai') 
const Person = require('../problems/person')

describe('CONSTRUCTOR', function() {
    let person = new Person('Gavin', 30);
    it ('should have name and age property', function() {
        expect(person).to.have.property('name');
        expect(person).to.have.property('age');
    })
})

describe('sayHello', function() {
    let person = new Person('Gavin', 30);
    it('should return a string of the person instances name and a greeting', function() {
        expect(person.sayHello()).to.equal('Gavin says hello')
    })
})

describe('visit(otherPerson)', function() {
    let person = new Person('Gavin', 30);
    let person2 = new Person('Royce', 32);
    it('should return a string stating that person one visited person two', function () {
        expect(person.visit(person2)).to.equal('Gavin visited Royce');
    })
})

describe('switchVisit(otherPerson)', function() {
    let person = new Person('Gavin', 30);
    let person2 = new Person('Royce', 32);
    it('should invoke visit(otherPerson) passing in the current instance as the arg', function(){
       expect(person.switchVisit(person2)).to.equal('Royce visited Gavin');
    })
}) 

describe('update(obj)', function() {
    let person = new Person('Ty', 25);
    
    it('If incoming arg is not an object throw a new typeError', function() {
        expect(() => person.update('string')).to.throw(TypeError);
        expect(() => person.update(false)).to.throw(TypeError);
        expect(() => person.update(['nope'])).to.throw(TypeError);
        expect(() => person.update(943)).to.throw(TypeError);
        
    })

    it('If incoming arg is a object then the instances properties should be updated to match the passed in objs values', function() {
       person.update({name: 'Gavin', age: 30})
        expect(person.name).to.equal('Gavin');
        expect(person.age).to.equal(30);
    })

    it('If the object does not have a name or age keys', function() {
        expect(() => !person.name && !person.age).to.throw(TypeError);
    })
})


