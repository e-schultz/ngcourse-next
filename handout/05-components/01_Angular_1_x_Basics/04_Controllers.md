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
