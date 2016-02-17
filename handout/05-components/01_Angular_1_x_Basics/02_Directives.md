## Directives

In Angular 1.x, directives are the building blocks of your application. Directives can be described as markers on the DOM tree that allow to define custom behaviour and/or transformations on that DOM element.

Let's define a basic directive in our *app/src/app.ts* file to see this in action,

```javascript
  ...
  angular.module('ngcourse', [])
    .directive('ngcMain', () => ({
        restrict: 'E', // vs 'A', 'AE'
        replace: true,
        scope: {}, // vs 'true', 'null'
        template: '<span>Hello World from Directive!</span>'
      })
    );
  ...
```

Note the way `angular.module()` is invoked in these two files. The `module` function can be used in two ways.

1. `angular.module('ngcourse', ['ngcourse.directives'])` defines a new module with a name of 'ngcourse' that has dependencies on other modules specified in the dependency array pointing to other modules by name. *(More on AngularJS' dependency injection will be covered later)*.
2. `angular.module('ngcourse')` which accesses a module that has already been defined.

We already saw code that is similar, so we recognize JavaScript's "fluent" chaining style and the use of a function expression in the second argument to `directive()`.

And now we can use our directive in our *index.html* as follows:

```html
...
  <body>
    <ngc-main></ngc-main>
    ...
  </body>
```

Note that we used "camelCase" when we defined this directive in our Angular application, but we used hyphens when inserting them into the HTML.

Angular will figure out that `<ngc-main></ngc-main>` refers to the directive that we defined as `ngcMain`.
