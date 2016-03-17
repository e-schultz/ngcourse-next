# Restricting Views and Functionality

* Depending on how granular your roles are, you may want to be able to re-use the same views and controllers for all users, but restrict which fields are visible, or which actions can be taken
* Can create a directive that hooks into your permission system to enable/disable, or hide parts of the UI
* Keep in mind, this is to help with the UI/UX

Possible implementation:

```js
'use strict';
angular
  .module('ngcCourse', [
    'ngcCourse.permissions'
  ])
  .directive('ngcRequires', function () {
    return {
      restrict: 'EA',
      transclude: true,
      replace: false,
      template: `<span
                  ng-if="ngcRequires.hasPermission"
                  ng-transclude></span>
`,
      scope: {
        permissions: '=',
        anyPermission: '='
      },
      controller: 'NgcRequiresController',
      controllerAs: 'ngcRequires'
    };
  })
  .controller('NgcRequiresController', function ($scope, contentPermissionFilter) {

    (function init(vm) {
      angular.extend(vm, {
        hasPermission: false,
      });

      $scope.$watchGroup(['permissions','anyPermission'], function (newValue) {
        if (newValue) {

          var permissionRequest = {
            requiredPermissions: newValue[0],
            anyPermissions: newValue[1]
          };
          // Create a custom service that can handle checking
          // permissions based on your needs. Could be done
          // client side, or possibly make an API request

          contentPermissionFilter.checkPermissionRequest(permissionRequest)
            .then(function (permissionCheckResult) {
                vm.hasPermission = permissionCheckResult;
            });
        }
      });
    })(this);
  });
```

Example use:

```html
<button ngc-requires permissions="['tasks.canAdd']" ng-click="addTask()">
Add Task
</button>
```
