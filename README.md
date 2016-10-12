# test-flowtype-vs-typescript

> :ledger: Test project, which shows major differences between: [FlowType](https://flowtype.org/) and [TypeScript](https://www.typescriptlang.org/)

## Why?

A couple of days ago, I read comments in a blog post http://michalzalecki.com/typescript-vs-flow/
and decided to run tests to show the major differences between *FlowType* and *TypeScript*.

## Source

1. *FlowType* source file.
    
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

3. After compilation when I run the line
    
    ```javascript
    new Person(123);
    ```

* in the **FlowType** strategy I **got an error** &#x26D4; 

    Hello BDD! Runtime error occur! &#x1F60E;

* following the **TypeScript** way **nothing happens** ...

    Eh... no runtime errors? Why? &#x1F631; 

## How to run?

```bash
$ npm install     # install Jasmine (for unit tests)
$ npm run build   # build basic scaffold
$ npm test        # trigger unit tests!
```

## Conclusions

**FlowType** was created to keep proper type during **runtime** (life application)

**TypeScript** was created to keep proper type during **translation process**.
    
## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016
