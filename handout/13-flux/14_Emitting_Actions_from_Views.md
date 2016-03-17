## Emitting Actions from Views

So far we have responded to changes within our Stores. Let's make a view that emits an Action.

Create a new file in *app/src/components/task-add/task-add-component.ts*

```javascript

export class TaskAddComponent {

  static selector = 'ngcTaskAdd';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {},
      controller: TaskAddComponent,
      template: require('./task-add-component.html')
    };
  };

  static $inject = ['$log', 'tasksActions'];
  constructor(
    private $log,
    private tasksActions
   ) {
     //
  }

  save(task) {
    this.tasksActions.addTask(task);
  }
}
```

and a corresponding *task-add-component.html*

```html
<div>
  <div>
    <h4>Add Task</h4>
  </div>
  <form>
    <label>Owner</label>
    <input
      type="text"
      ng-model="newTask.owner">
    <label>Description</label>
    <input
      type="text"
      ng-model="newTask.description">
    <button
      ng-click="ctrl.save(newTask)">
      Save
    </button>
  </form>
</div>
```

define a new action in *app/src/actions/task-actions.ts*

```javascript
  ...
  addTask(newTask) {
    this.tasksService.addTask(newTask)
      .then(() => this.getTasks())
      .then(null, error => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR,
        error: error
      }));
  }
  ...
```

Note that we are calling `getTasks()` method from within `addTask()`, which will fetch the new tasks data from the server and emit a change on successful retrieval.

We should also take this time to go and add `addTasks` to *app/src/services/tasks/tasks-service.ts*

```js
...
addTask(task) {
   return this.serverService.post('/api/v1/tasks', task);
  }
...
```  

And also add the ability to post data in *app/src/services/server/server-service.ts*
```js
...
  public post(path, data) {
   return this.$http.post(`${this.API_BASE_URL}${path}`, data);
 }
...
```
