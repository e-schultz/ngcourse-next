### Import and Export

Moving the controller class into a separate file is not enough as we need to reference it within our main *app.ts* file. That is what the ES6 import/export syntax is useful for.

Change the controller class definition in the *main-component.ts* file to include the export keyword as follows:

```javascript
export class MainDirectiveCtrl {
  private userDisplayName;
  constructor() {
    this.userDisplayName = 'Mike Tyson';
  }
}
```

Now in *app.ts* lets import our class as follows:

```javascript
import {MainDirectiveCtrl} from './components/main/main-component';
...
angular.module('ngcourse', []);

angular.module('ngcourse')
  .directive('ngcMain', () => ({
      restrict: 'E',
      scope: {},
      template: require('./main-component.html'),
      controller: MainDirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    })
  );

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
...
```
