class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }

  update(obj) {
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || Array.isArray(obj)) {
      throw new TypeError('not an object')
    }
    if (!('name' in obj) || !('age' in obj)) {
      throw new TypeError('needs name and age keys.')
    }
    this.name = obj.name;
    this.age = obj.age;
  }
}

module.exports = Person;
