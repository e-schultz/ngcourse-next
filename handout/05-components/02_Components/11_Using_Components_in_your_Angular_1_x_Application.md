## Using Components in your Angular 1.x Application

As a result of important similarities between components in Angular 2 and component directives from Angular 1.x, we can write Angular 2 style components today and future proof our applications.

In the previous section we learned how to define a component, now we need to use this component within our Angular 1.x application context. Components in Angular 2 share many of important similarities with component directives from Angular 1.x, and as a result it only makes sense to use `.directive()` function to instantiate them today. 

Lets change our *app.ts* and let Angular know about our component via the `.directive()` function.

```javascript
...
angular.module('ngcourse')
  .directive(
    MainComponent.selector,
    MainComponent.directiveFactory);
});
```

Note, the use of the utility functions we have created in *component-utils.ts*, allowing for a cleaner syntax when defining components. Let's look at the implementation of the function `makeSelector` and `makeDirective`.

Finally, we can now use this component in our *index.html* as follows:

```html
  <body>
    <ngc-main></ngc-main>
    ...
  </body>
```
