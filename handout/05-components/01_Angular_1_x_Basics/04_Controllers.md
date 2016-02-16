## Controllers

Our application still does not do very much. In order to add behaviour to our directive, lets define a controller class with some simple logic.

```javascript
class MainDirectiveCtrl {
  private userDisplayName;
  constructor() {
    this.userDisplayName = 'Mike Tyson';
  }
}

angular.module('ngcourse')
  .directive('ngcMain', () => ({
      restrict: 'E',
      replace: true,
      scope: {},
      template: '<span>Hello, {{ ctrl.userDisplayName }}.</span>',
      controller: MainDirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    })
  );
```

Note Angular's `{{ }}` syntax, referred to as the double moustache, used here
to bind controller's property to the template.

Let's recap:

### Template
The template is just an HTML snippet defining a view that represent this directive. Templates have access to any properties or functions defined on the directive's controller scope.

### Controller
The controller is just an ES6 class that backs component's view represented by a template. The template above binds the `userDisplayName` property defined on the `MainDirectiveCtrl` controller class using the double-moustache syntax `{{ ctrl.userDisplayName }}`.
