## A Refresher on `this`

Inside a JavaScript class we'll be using `this` keyword to refer to the instance of the class. E.g., consider this case:

```js
class LoginFormController {
  ...
  submit() {
    var form = {
      data: this
    };
    this.fireSubmit(form);
  }
}
```

Here `this` refers to the instance of the class, assuming that submit method is called using the dot notation, such as `myComponent.submit()`. In this case, `this.fireSubmit(form)` invokes `fireSubmit()` method defined on the instance of the class. This will also ensure that inside `fireSubmit` we'll also have `this` referring to the same instance.

However, `this` can also refer to other things. This can get very confusing.

There are two basic cases that you would want to remember.

The first is "method invocation":

```js
  someObject.someMethod();
```

Here `this` used inside `someMethod` will refer to `someObject`. This is usually what you want.

The second case is "function invocation":


```js
  someFunction();
```

Here `this` used inside `someFunction` can refer to different things depending on whether we are in "strict" mode or not. Without using the "strict" mode, `this` refers to the context in which `someFunction()` was called. This rarely what you want, and it can be extremely confusing. In strict mode, `this` would be undefined, which is slightly less confusing.

One of the implications of this is that you cannot easily detach a method from its object. E.g., consider this example:

```js
  var log = console.log;
  log('Hello');
```

In many browsers this will give you an error. That's because `log` expects `this` to refer to `console`, but this reference is lost when you detach it from `console`.

This can be fixed by specifying this explicitly. One way to do this is by using `bind()` method, which fixes the function's this to a particular value.

```js
  var log = console.log.bind(console);
  log('Hello');
```

You can also achieve the same using `Function.call` and `Function.apply`, but we won't discuss this here.
