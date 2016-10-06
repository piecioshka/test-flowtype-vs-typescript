'use strict';

let Person = require('../../../source/flow/bundle');

describe('Flow - BDD', () => {
    it('should not throw an error when proper argument passed', () => {
        expect(() => {
            return new Person('123');
        }).not.toThrow();
    });

    it('should throw an error when bad argument passed', () => {
        expect(() => {
            return new Person(123);
        }).toThrow();
    });
});
