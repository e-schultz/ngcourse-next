## Implementing "Login"

Let's modify our component's template to hide the login form upon login and show the task counter.

```html
  <div>
    <div ng-hide="ctrl.isAuthenticated">
      Enter username: <input ng-model="ctrl.username"/><br/>
      Password: <input type="password" ng-model="ctrl.password"/><br/>
      <button ng-click="ctrl.login()">Login</button>
    </div>
    <div ng-show="ctrl.isAuthenticated">
      Hello, {{ ctrl.username }}!
      You've got {{ ctrl.numberOfTasks }} tasks<br/>
      <button ng-click="ctrl.addTask()">Add task</button>
    </div>
  </div>
```

Note the use of `ng-hide` and `ng-show` directives here.

We'll also need to modify our component's controller as follows:

```javascript
  export class MainComponent {
    ...
    private isAuthenticated: any;
    private numberOfTasks: any;
    ...
    constructor(private $log ) { 
      this.numberOfTasks = 0;
      this.isAuthenticated = false;
    }

    public login() {
      this.isAuthenticated = true;
    }

    public addTask() {
      this.$log.debug('Current number of tasks:', this.numberOfTasks);
      this.numberOfTasks += 1;
    }

  };
```
