## TypeScript

As of right now, no browser comes even close to supporting all of ES6. Support for classes is especially poor. Instead, we will need to rely on a transpiler to convert our ES6 code to ES5.

Several ES6 transpilers are available. One popular option is Babel. However, we will be using TypeScript transpiler, which is what Angular team users to write Angular 2.

TypeScript transpiler is different from other ES6 transpilers in that it expects as input not standard EcmaScript 6, but rather TypeScript, an extension of ES6 that adds support for optional typing.

We can install the TypeScript transpiler using npm:

```bash
  npm install -g typescript
```

We can then use `tsc` to manually compile a TypeScript source file into ES5:

```bash
  tsc test.ts
  node test.js
```

Our earlier ES6 class won't compile now, however. TypeScript is more demanding than ES6 and it expects instance properties to be declared:

```ts
  class LoginFormController {
    errorMessage: string;
    constructor() {
      this.errorMessage = 'All good.';
    }
    submit() {
      [1, 2].forEach(() => console.log(this.errorMessage));
    }
  }
```

Note that now that we've declared `errorMessage` to be a string, TypeScript will enforce this. If we try to assign a number to it, we will get an error at compilation time.

If you want to have a property that can be set to a value of any type, however, you can still do this: just declare it's type to be "any":

```ts
  class LoginFormController {
    errorMessage: any;
    ...
  }
```
