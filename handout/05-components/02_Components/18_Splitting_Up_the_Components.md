## Splitting Up the Components

By this point our component is getting unwieldy. Let's split it into two separate components. 

The first component will be located in *app/src/components/task-list/task-list-component.ts* and will implement our simple task counter.

```javascript

  export class TaskListComponent {
    
    private numberOfTasks;
    
    static selector = 'ngcTasks';

    static directiveFactory: ng.IDirectiveFactory = () => ({
      restrict: 'E',
      controllerAs: 'ctrl',
      scope: {},
      bindToController: true,
      controller: TaskListComponent,
      template: require('./task-list-component.html')
    });
  
    constructor(private $log ) {
      this.numberOfTasks = 0;
    }

    public addTask() {
      this.$log.debug('Current number of tasks:', this.numberOfTasks);
      this.numberOfTasks += 1;
    }

  };
```

We should also create a template file for this component with the familiar markup:

```html
<div>
  <span>
    Hello, {{ ctrl.username }}!
    You've got {{ ctrl.numberOfTasks }} tasks.
  </span>
  <button ng-click="ctrl.addTask()">Add task</button>
</div>
```

The second component will be remain at *components/main/main-component.ts* and will be responsible for user authentication. 

```javascript

  export class MainComponent {
    
    private isAuthenticated;
    ...
    constructor(private $log) { 
      this.isAuthenticated = false;
    }

    public login() {
      this.isAuthenticated = true;
    }

  };

```

```html
  <div>
    <div ng-hide="ctrl.isAuthenticated">
      Enter username: <input ng-model="ctrl.username"/><br/>
      Password: <input type="password" ng-model="ctrl.password"/><br/>
      <button ng-click="ctrl.login()">Login</button>
    </div>
    <div ng-show="ctrl.isAuthenticated">
      <ngc-tasks></ngc-tasks>
    </div>
  </div>
```

The last thing remaining is to wire up our components within Angular application context.

```javascript
  ...
  import {MainComponent} from './components/main/main-component';
  import {TaskListComponent} from './components/task-list/task-list-component';
  ...
  angular.module('ngcourse')
    .directive(
      MainComponent.selector,
      MainComponent.directiveFactory)
    .directive(
      TaskListComponent.selector, 
      TaskListComponent.directiveFactory);

  angular.element(document).ready(
    () => angular.bootstrap(document, ['ngcourse'])
  );
```