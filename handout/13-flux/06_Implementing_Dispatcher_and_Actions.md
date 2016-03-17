## Implementing Dispatcher and Actions

Our dispatcher is very simple, let's modify our *app/src/app.ts* file

```javascript
  angular.module('ngcourse.dispatcher', [])
    .service('dispatcher', Rx.Subject);
```

In Chapter 13 - RxJS we have subscribed to Observables with Observers that implemented the `onNext`, `onError` and `onCompleted` methods. [Rx.Subject](http://reactivex.io/documentation/subject.html) is a combination of an Observer and Observable in one class. It is used here for convenience as you will see later.

Now, let add some actions to push onto our dispatcher later. Create a new file in *app/src/actions/task-actions.ts*

```javascript
  import {TASK_ACTIONS} from '../action-constants';

  export class TaskActions {

    static $inject = ['dispatcher', 'tasksService'];
    constructor(
      private dispatcher: Rx.Subject<any>,
      private tasksService: TasksService
    ) { }

    getTasks() {
      this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS_RESPONSE,
        tasks: []
      })
    }
  }
```

It is a poor practice to use hard-coded strings like `'GET_TASKS'`. Therefore, we extracted our constants into a separate file, *app/src/actions/action-constants.ts* and are using those constants in *task-actions.ts* instead.

```javascript
export const TASK_ACTIONS = {
  GET_TASKS_RESPONSE: 'GET_TASKS_RESPONSE',
  GET_TASKS_RESPONSE_ERROR: 'GET_TASKS_RESPONSE_ERROR'
};
```

Great! Now we can create our first store.
