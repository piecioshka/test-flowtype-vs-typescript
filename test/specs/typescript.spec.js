'use strict';

const Person = require('../../source/typescript/bundle').default;

describe('TypeScript - static typed', () => {
    it('should not throw an error when proper argument passed', () => {
        expect(() => {
            return new Person('123');
        }).not.toThrow();
    });

    it('should throw an error when bad argument passed (but is not)', () => {
        expect(() => {
            return new Person(123);
        }).not.toThrow();
    });
});
