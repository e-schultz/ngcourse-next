## Function Chaining / Fluent interfaces

If we look at files that make up an AngularJS application, a typical file
would often consist of a single giant JavaScript statement where multiple
method calls are chained together: we call a method on an object, get another
object, then call a method on that object, get another method, etc. JavaScript
allows us to insert white space before the `.` that precedes a method
invocation, so this:

In the previous example,

```javascript
  angular.module('ngcourse')

  .controller(...);
```

is equivalent to this:

```javascript
  angular.module('ngcourse').controller(...);
```

To support this `fluent` programming style, Angular ensures that methods such
as `.controller()` return the object to which the method belongs. This allows
us to define another controller after the first one, while still working with
the same expression:

```javascript
  angular.module('ngcourse')

  .controller('MainCtrl', function($scope) {
    ...
  })

  .controller('TaskListCtrl', function($scope) {
    ...
  });
```

To understand what is happening here, let's consider an alternative style
where we actually save the objects in variables:

```javascript
  var ngCourseModule  = angular.module('ngcourse');

  ngCourseModule.controller('MainCtrl', function($scope){ ... });

  ngCourseModule.controller('TaskListCtrl', function($scope){ ... });
```

Note that the return value of `ngCourseModule.controller()` is the same object
as `ngCourseModule`.

This style may seem more intuitive to those coming to JavaScript from other
languages. There is a reason, however, why we do not use this style. The
example above defines a new variable `ngCourseModule`. Unfortunately, a
variable defined outside of a function becomes _global_ in JavaScript. We'll
come back to global variables and ways to avoid them in a short while.

For now, however, let's note that chained method calls provide us with a way to
avoid defining new variables. We will see this pattern often in AngularJS
applications, for example when defining services or directives.
