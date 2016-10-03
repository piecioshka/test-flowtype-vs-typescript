# test-flow-vs-typescript

> :ledger: Test project, which show major difference between: [Flow](https://flowtype.org/) and [TypeScript](https://www.typescriptlang.org/)

## Why?

Couple day ago I was read comments under blog post http://michalzalecki.com/typescript-vs-flow/
and I'm decided to make some test to show the major difference between *Flow* and *TypeScript*.

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

* in **Flow** strategy I **got an error** &#x26D4; 

    Hello BDD! Runtime error occur! &#x1F60E;

* in **TypeScript** way **nothing go happen** ...

    Eh... no runtime errors? Why? &#x1F631; 

## How to run?

```bash
npm install     # install Jasmine (for unit tests)
npm run build   # build basic scaffold
npm test        # trigger unit tests!
```

## Conclusions

**Flow** is invented to keep correct type in **runtime** (life application)

**TypeScript** is invented to keep proper type in **translation process**.
    
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
