## UI-Router

Angular's built in routing solution ('ng-route') has been de facto superseded
by [ui-router](https://github.com/angular-ui/ui-router/blob/master/README.md). We'll be using that. To use UI-Router you'll need to update your `app/src/app.ts` to inject the new module into your main module:

```javascript
  angular.module('ngcourse', [
    'ngcourse.tasks',
    'ngcourse.server',
    'ngcourse.router'
  ])
```
