## Variable Scope

In JavaScript, variables are _global_ unless declared inside a function.
Global variables can make code very hard to debug and maintain, so you must
always be careful not to create them unintentionally.

The only way to create local variables in JavaScript is to define them inside
a function. Doing so, however, requires defining a function. If we were to use
a function declaration, we would end up poluting the global name space with
the function itself.

Consider this example:

```javascript
  function foo() {
    var bar = 1;
    // do something with bar;
  }
```

Here we succeeded in making `bar` local, but we created a global function `foo()`!

We can solve this "catch-22" situation by using a function expression:

```javascript
  (function() {
    var bar = 1;
    // do something with bar;
  })();
```

Here we defined `bar` inside an _anonymous_ function that we call right away.
This pattern is very common in JavaScript and is called "a immediately-invoked
function expression" or "IIFE". We do _not_ usually use this style in
AngularJS, however. Instead, we normally rely on functions that we define as
arguments to module methods:

```javascript
  .controller('MainCtrl', function($scope) {
    var bar = 1; // This will be local to this function.
    ...
  })
```

It is worth noting that unlike some languages, JavaScript does not support
"lexical scoping": variable are defined at the level of a function, not a
block. (This is being fixed in ES6 with the keyword "let".)
