'use strict';

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let p = new Person('asd');
console.log(p);
