/* @flow */

'use strict';

function Person(name: string) {
    this.name = name;
}

let p = new Person('asd');
console.log(p);
