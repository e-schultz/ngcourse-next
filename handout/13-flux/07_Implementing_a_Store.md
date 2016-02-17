## Implementing a Store

Now that we have a dispatcher and actions defined, lets start on our first Store. Let's create a new file for it in *app/src/stores/tasks/tasks-store.ts*

```javascript
  export class TasksStore {

    private _tasks;

    static $inject = ['$log', 'server', 'dispatcher'];
    constructor(
      private $log,
      private server,
      private dispatcher
      ) {

    }
  }
```

Our Store's domain object will be a list of tasks that we will receive from the server and our Dispatcher is available to us from constructor injection.

Before we do anything we need to listen to incoming Actions relevant to this store. Let's listen to incoming actions from our Dispatcher.

```javascript
import {TASK_ACTIONS} from '../../actions/action-constants';

export class TasksStore {

  private _tasks;

  static $inject = ['$log', 'server', 'dispatcher'];
  constructor(
    private $log,
    private server,
    private dispatcher
    ) {
      this._tasks = [];
      this.registerActionHandlers();
  }
  
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS)
        .subscribe(
          () => this.getTasks());
  }
  
  private getTasks() {
    // TODO
  }
}
```

For convenience we have created a new method on our Store called `registerActionHandlers()` where we will listen to incoming actions.
Notice how we use `filter()` method to filter the actions that are relevant to this store, in this case we are only responding to `TASK_ACTIONS.GET_TASKS` and invoking a method called `getTasks()` to process this action.
