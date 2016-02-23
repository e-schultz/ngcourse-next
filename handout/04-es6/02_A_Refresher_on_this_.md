## A Refresher on `this`

Inside a JavaScript class we'll be using the `this` keyword to refer to an instance of the class. E.g., consider this case:
 
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

Here `this` refers to an instance of the `LoginFormController` class. As long as the submit method is called using dot notation, like `myComponent.submit()`, then `this.fireSubmit(form)` invokes the `fireSubmit()` method defined on the instance of the class. This will also ensure that inside `fireSubmit`, that `this` refers to the same instance.

However, `this` can also refer to other things.

There are two basic cases that you would want to remember.

The first is "method invocation":

```js
  someObject.someMethod();
```

Here, `this` used inside `someMethod` will refer to `someObject`, which is usually what you want.

The second case is "function invocation":

```js
  someFunction();
```

Here, `this` used inside `someFunction` can refer to different things depending on whether we are in "strict" mode or not. Without using the "strict" mode, `this` refers to the context in which `someFunction()` was called. This rarely what you want, and it can be confusing when `this` is not what you were expecting, because of where the function was called from. In "strict" mode, `this` would be undefined, which is slightly less confusing.

[View Example](http://jsbin.com/vekawimihe/2/edit?js,console)

One of the implications of this is that you cannot easily detach a method from its object. E.g., consider this example:

```js
  var log = console.log;
  log('Hello');
```

In many browsers this will give you an error. That's because `log` expects `this` to refer to `console`, but the reference was lost when the function was detached from `console`.

This can be fixed by setting `this` explicitly. One way to do this is by using `bind()` method, which allows you to specify the value to use for `this` inside the bound function.

```js
  var log = console.log.bind(console);
  log('Hello');
```

You can also achieve the same using `Function.call` and `Function.apply`, but we won't discuss this here.
