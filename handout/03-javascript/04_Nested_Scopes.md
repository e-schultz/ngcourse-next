## Nested Scopes

In JavaScript, a function can be declared within another function.  The
function has a local (function) scope, it has access to the scope of the outer
function, and it also has access to a global scope.

Here is a pure JavaScript example with multiple scopes:

```javascript
  var x = 1;
  var y = 2;

  console.log('in global scope: ', x, y);

  function func() {
    var x = 2;
    y = 2;
    console.log('in func(): ', x, y);

    function innerFunc() {
      var x = 3;
      y = 3;
      console.log('in innerFunc(): ', x, y);
    }
    innerFunc();

    console.log('in func() again: ', x, y);
  };
  func();  
  console.log('in global scope again: ', x, y);
```
Executing the code above will produce the following:

```
  in global scope:  1 2
  in func():  2 2
  in innerFunc():  3 3
  in func() again:  2 3
  in global scope again:  1 3
```

Notice that here we declare `x` again in each scope. This makes `x` act as
different variables in different scopes. Changing the value of `x` in inner
scopes does not affect its value in the outer scopes.

For `y`, the behavior is quite different. We do not declare it again in the
nested scopes, which means the outer scope's variable is used. Setting the
value of `y` inside a nested scope changes its value in the outer scope.