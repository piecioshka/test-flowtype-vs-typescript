# test-flow-vs-typescript

> :ledger: Test project two static technics: [Flow](https://flowtype.org/) and [TypeScript](https://www.typescriptlang.org/)

## Why?

I was read comments under blog post http://michalzalecki.com/typescript-vs-flow/
and decide make some test to show the difference between *Flow* and *TypeScript*.

## Source

1. *Flow* source file.
    
    ```javascript
    /* @flow */
    
    'use strict';
    
    function Person(name: string) {
        this.name = name;
    }
    
    module.exports = Person;
    ```
    
2. *TypeScript* source file
    
    ```javascript
    'use strict';
    
    class Person {
        private name: string;
    
        constructor(name: string) {
            this.name = name;
        }
    }
    
    export default Person;
    ```

3. After compilation when I run line
    
    ```javascript
    new Person(123);
    ```

    with *Flow* I **got an error**. Hello BDD!
    
    But when I run the same line with source build from *TypeScript*
    **nothing go happen**.
    
## Conclusions

*Flow* is build to keep type in runtime.

*TypeScript* is build to keep type in translation process.
    
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
