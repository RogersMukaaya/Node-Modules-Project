class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return this.name;
    }
}

module.exports = Person;