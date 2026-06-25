# test-flowtype-vs-typescript

:ledger: Test project, which shows major differences between: [FlowType](https://flowtype.org/) and [TypeScript](https://www.typescriptlang.org/)

## Why?

A couple of days ago, I read comments in a blog post <http://michalzalecki.com/typescript-vs-flow/>
and decided to run tests to show the major differences between _FlowType_ and _TypeScript_.

## Source

1. _FlowType_ source file.

   ```javascript
   /* @flow */

   "use strict";

   function Person(name: string) {
     this.name = name;
   }

   module.exports = Person;
   ```

2. _TypeScript_ source file

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

- in the **FlowType** strategy I **got an error** &#x26D4;

  Hello BDD! Runtime error occur! &#x1F60E;

- following the **TypeScript** way **nothing happens** ...

  Eh... no runtime errors? Why? &#x1F631;

## How to run?

```bash
npm run build   # build basic scaffold
npm test        # trigger unit tests!
```

> **Correction (see [#3](https://github.com/piecioshka/test-flowtype-vs-typescript/issues/3)):** the original conclusion below was wrong.
> Flow does **not** perform any runtime type checking — it is a static analysis tool, exactly like TypeScript.
> The runtime error in the "FlowType" example above does **not** come from Flow; it comes from
> [`babel-plugin-tcomb`](https://github.com/gcanti/babel-plugin-tcomb), which is enabled in
> [`src/flowtype/.babelrc`](src/flowtype/.babelrc) and injects `tcomb` runtime assertions.
> Flow's role here is only stripping the type annotations (`transform-flow-strip-types`).

## Conclusions

Both **Flow** and **TypeScript** are **static** type checkers: they verify types ahead of time and
emit plain JavaScript with the annotations removed. Neither adds runtime type checks on its own.

The runtime error in the **FlowType** example comes from `babel-plugin-tcomb`, not from Flow.

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2026
