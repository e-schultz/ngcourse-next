# Security with Angular $http

As with any SPA application, network requests consuming your restful API will be exposed to users that know how to monitor the network traffic in their browser. As such, it is still important to implement appropriate security checks on the server side to prevent users from being able to make requests for data that they should not have access to.

However, Angular does provide the ability to help prevent against cross-site request forgery - CSRF, or sometimes referred to as XSRF. If you are using the [lusca](https://github.com/krakenjs/lusca) middleware that was described in the [node modules](./node-modules.md) section, it will set the appropriate defaults for the header and cookie settings.

This will create an JavaScript readable `XSRF-TOKEN` cookie on the first HTTP GET request, and this will then be sent as an `X-XSRF-TOKEN` header with subsequent requests.

The Angular `$http` service does this as part of the default transform request and response transforms. If you have the need to create your own custom request and response transformations, it is important to append your transformations instead of overwriting the default ones provided.

```js
function appendTransform(defaults, transform) {

  // We can't guarantee that the default transformation is an array
  defaults = angular.isArray(defaults) ? defaults : [defaults];

  // Append the new transformation to the defaults
  return defaults.concat(transform);
}

$http({
  url: '...',
  method: 'GET',
  transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
    return doTransform(value);
  })
});
```
[source](https://docs.angularjs.org/api/ng/service/$http#overriding-the-default-transformations-per-request)
