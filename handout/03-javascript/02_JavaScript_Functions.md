## JavaScript Functions

To define a controller we call module's `.controller` method with two
arguments. The first is the name of the controller, the second one is a
function that implements it:

```javascript
  angular.module('ngcourse')
  .controller('MainCtrl', function($scope) {...});
```

In languages such as Java, arguments to functions and methods can be objects
or primitives, but not functions. In JavaScript, however, functions are first
class citizens. A function can be passed into another function as a parameter.
A function can return a function. Functions can also be assigned to variables.

JavaScript allows two ways of defining a function. In the first method, called
"function declaration", a new function is defined in the current
scope and is given a name:

```javascript
  function foo() {
    // do something
  }
```

We will be able to refer to this function as `foo` in the current scope. It is
worth noting that functions defined using function declarations are "hoisted"
in JavaScript. Regardless of where you define a function in the current scope,
JavaScript would act as if the function was defined up front. So, this is
perfectly valid:

```javascript
  // Call a function.
  foo();

  // Now provide a definition.
  function foo() {
    // do something
  }
```

An alternative method of defining a function is a "function expression". In
this case, provide a function definition in a context where JavaScript would
expect to see an expression:

```javascript
  var foo = function foo() {
    // do something
  }
```

Functions defined this way are _not_ hoisted, so this would be invalid:

```javascript
  // This call will fail because the value of "foo" is undefined at this point.
  foo();

  // The function is defined, but it's too late.
  var foo = function foo() {
    // do something
  }
```

Functions defined as function expressions do not need to have names:

```javascript
  var foo = function() {
    // do something
  }
```

If we do provide a name in a function expression, we won't be able to call the
function by this name, but the function will use name when reporting errors.

```javascript
  var foo = function bar() {
    // This function thinks it's called "bar" and will use this name when
    // reporting errors. We cannot call it by this name, however.
  }

  bar(); // This will fail.
```

In our case of defining an Angular controller, we use a function expression to define an anonymous function and then pass it as the second argument argument to `controller()`:

```javascript
  .controller('MainCtrl', function($scope) {
    ...
  })
```
