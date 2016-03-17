# Restricting Angular Routes

There may be routes in your application that you want to restrict based on user roles and permissions. To help restrict access to routes in your application, you can use the `resolve` hook of ui-router.

```js
// ....

$stateProvider.state('admin', {
  url: '/admin',
  template: 'Secured Area, requires role admin.' +
    '<a ui-sref="home">Home</a><br/>' +
      '<ui-view></ui-view>',
  resolve: {
    hasAccess: function(securityCheck) {
      return securityCheck.checkAccess('admin')
    }
  })
```

While resolve can be used to prefetch data before loading a controller, if one of the resolved dependencies is rejected it will raise a `$stateChangeError` event and not navigate to the route.

The implementation of `checkAccess` will depend on your needs, but it could consume an API to check for permissions, or make use of the user session object.

If a user does not have permissions, you should provide a rejection reason so you can inspect this in your `$stateChangeError` handler and do the appropriate logging, and redirection to an error page.

```js
angular
.module('ngCourse')
.service('securityCheck', function($q, $window) {
    this.checkAccess = function(permissions) {

      if ($window.userRoles.indexOf(permissions) >= 0) {
        return $q.when(true)
      } else {
        return $q.reject({
          type: 'ACCESS_DENIED'
        })
      }
    }
  })
/// ...
.run(function($rootScope, $state, $log, $window) {

    $rootScope.$on('$stateChangeError', function(
      event,
      toState,
      toParams,
      fromState,
      fromParams,
      error) {
      if (error && error.type === 'ACCESS_DENIED') {
        $log.error('User attempted to navigate to a restricted route')
        $state.go('error')
      }

    })

```
[example](http://plnkr.co/edit/ok4oPF65GCyF3ZTH9YRl?p=preview)

When `ui-router` is resolving the routes, it will attempt to resolve the parents dependencies before loading the child-routes, so you can easily perform a permission check for an entire area of the application.

However, keep in mind that users may be able to bypass these checks and navigate to the routes. The API requests that these secured areas use will need to have the appropriate server side checks in place.
