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

Let's modify our *app/src/actions/actions-constants.ts* file to add our new action.

```javascript
  export const TASK_ACTIONS = {
    GET_TASKS: 'GET_TASKS',
    ADD_TASK: 'ADD_TASK',
  };
```

define a new action in *app/src/actions/task-actions.ts*

```javascript
  ...
  addTask(newTask) {
    this.dispatcher.onNext({
      actionType: TASK_ACTIONS.ADD_TASK,
      newTask: newTask
    });
  }
  ...
```

and finally modify our *TaskStore* to listen on a new action and call the corresponding `addTask` method.

```javascript
  ...
  private registerActionHandlers() {
    this.dispatcher.filter(
      (action) => action.actionType === TASK_ACTIONS.GET_TASKS)
        .subscribe(
          () => this.getTasks());

    this.dispatcher.filter(
      (action) => action.actionType === TASK_ACTIONS.ADD_TASK)
        .subscribe(
          (action) => this.addTask(action.newTask));
  }

  private addTask(newTask) {
    Rx.Observable.fromPromise(
      this.server.post('/api/v1/tasks', newTask))
        .subscribe(
          () => this.getTasks(),
          error => this.emitError(error));
  }
  ...
```

Note that we are calling `getTasks()` method from within `addTask()`, which will fetch the new tasks data from the server and emit a change on successful retrieval.
