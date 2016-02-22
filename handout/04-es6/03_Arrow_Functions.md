## Arrow Functions

ES6 offers some new syntax for dealing with this madness: "arrow functions".

The new "fat arrow" notation can be used to define anonymous functions in a simpler way.

Consider the following example:

```js
  items.forEach(function(x) {
    console.log(x);
    incrementedItems.push(x+1);
  });
```

This can be rewritten as an "arrow function" using the following syntax:

```js
  items.forEach((x) => {
    console.log(x);
    incrementedItems.push(x+1);
  });
```

Functions that calculate a single expression and return its values can be defined even simpler:

```js
  incrementedItems = items.map((x) => x+1);
```

The latter is _almost_ equivalent to the following:

```js
  incrementedItems = items.map(function (x) {
    return x+1;
  });
```

There is one important difference, however: arrow functions share the value of `this` with the function in the context of which they are defined. Consider the following example:

```js
class LoginFormController {
  constructor() {
    this.errorMessage = 'All good.';
  }
  submit() {
    [1, 2].forEach(function() {
      console.log(this.errorMessage); // this is undefined here
    })
  }
}

var ctrl = new LoginFormController();

ctrl.submit();
```

Let's try this code on ES6 Fiddle ([http://www.es6fiddle.net/](http://www.es6fiddle.net/)). As we see, this gives us an error, since `this` is undefined inside the anonymous function.

Now, let's change the method to use the arrow function:

```js
class LoginFormController {
  constructor() {
    this.errorMessage = 'All good.';
  }
  submit() {
    [1, 2].forEach(() => console.log(this.errorMessage));
  }
}
```

Here `this` inside the arrow function refers to the instance variable.
