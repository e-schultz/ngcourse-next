## Classes

ES5 has objects, but it has no concept of class. ES6 introduces classes.

```js
class LoginFormController {
  constructor() {
    // This is the constructor.
  }
  submit() {
    // This is a method.
  }
}
```

This is pretty straightforward, until we run into the oddities of how `this` keyword works in JavaScript.
