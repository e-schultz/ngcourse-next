## Implementing a Store

Now that we have a dispatcher and actions defined, lets start on our first Store. Let's create a new file for it in *app/src/stores/tasks/tasks-store.ts*

```javascript
  export class TasksStore {

    private _tasks;

    static $inject = ['dispatcher'];
    constructor(private dispatcher) {

    }
  }
```

Our Store's will be responsible for providing the list of tasks that we will receive from the server. The Dispatcher is available to us from the `constructor` injection.

Before we do anything we need to listen to incoming Actions relevant to this store. Let's listen to incoming actions from our Dispatcher.

```javascript
import {TASK_ACTIONS} from '../../actions/action-constants';

export class TasksStore {

  private _tasks;

  static $inject = ['dispatcher'];
  constructor(private dispatcher) {
      this.registerActionHandlers();
  }

  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE)
        .subscribe(
          (tasks) => /* Handle action here */);
  }

  private getTasks() {
    // TODO
  }
}
```

For convenience we have created a new method on our Store called `registerActionHandlers()` where we will listen to incoming actions.
Notice how we use `filter()` method to filter the actions that are relevant to this store, in this case we are only responding to `TASK_ACTIONS.GET_TASKS`.
