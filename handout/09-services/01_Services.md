## Services

Instead, we'll put those functions in an AngularJS service. Let's put this in *src/services/tasks/tasks-service.ts*

```javascript

export class TasksService {

  static $inject = ['$log', '$http'];
  
  constructor(private $log, private $http) { }

  public getTasks () {
    return this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => response.data);
  };
}
```

Note we have added a new module definition and need to update *app.ts*.

```javascript
  ...
  import {TasksService} from './services/tasks/tasks-service';
  ...
  angular.module('ngcourse', [])
    ...
    .service('tasksService', TasksService)
    .directive(
      makeSelector(TaskListComponent),
      makeDirective(TaskListComponent))
    .directive(
      makeSelector(TaskComponent),
      makeDirective(TaskComponent))
  ...    
```

We can now simplify our code to use this service:

```javascript
  ...
  export class TaskListComponent {
    ...
    static $inject = ['$log', 'tasksService'];
  
    constructor(private $log, private tasksService) {
        this.tasksService.getTasks()
          .then(tasks => this.tasks = tasks);
    }
```

Note that we've injected our newly created service.
