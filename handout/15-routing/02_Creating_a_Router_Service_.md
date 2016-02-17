## Creating a Router Service.

Let's start by adding our own "router" module which will serve as a wrapper
around ui-router. Our module will have a `.config()` section.

This goes in `app/src/services/router/router-service.js`

```javascript

export class RouterConfig {

  static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  constructor(
    private $stateProvider,
    private $urlRouterProvider,
    private $locationProvider
  ) {

    $urlRouterProvider.otherwise('/tasks');
    $locationProvider.html5Mode(false);

    $stateProvider
      .state('tasks', {
        url: '/tasks',
        views: {
          '': {
            template: 'my tasks'
          }
        }
      });
  }
}
```

Let's configure the router within our *app.ts* file as follows:

```javascript
angular.module('ngcourse.router', ['ui.router'])
  .config(RouterConfig);
```

We'll also need to add a directive for ui-router in index.html:

```html
  <div ui-view></div>
```

Your index.html main section should now look like this:

```html
  ...
  <ngc-main>
    <div ui-view></main>
  </ngc-main>
  ...
```

`ui-view` is a directive that `ui-router` uses to manage its views. It will be replaced by the template or templateURL that is configured for each ui-router state.

`ui-router` will insert the content in the `ui-view` element based on the current application state defined in `$stateProvider` above.

Let's talk about why this need to happen in the "config" section.
