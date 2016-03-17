### Notifying Store Subscribers of State Change

So far we have managed to get the data we need from the server and make it available to the store. The next step is to publish this data to for our components. The components will also be listening to the changes to the store. We will implement this mechanism using what we learned about RxJS.

```javascript
export class TasksStore {

  private _tasks: Rx.ReplaySubject<any[]>;
  private _error: Rx.ReplaySubject<any>;

  static $inject = ['dispatcher'];

  constructor(private dispatcher: Rx.Subject<any>) {

    this._tasks = new Rx.ReplaySubject<any[]>(1);
    this._error = new Rx.ReplaySubject(1);

    this.registerActionHandlers();
  }

  get tasks() {
    return this._tasks;
  }

  get error() {
    return this._error;
  }

  ...

}
```


Let go through this code step by step:

1. We created two `Rx.ReplaySubject(1)`s: `_tasks` & `_error`. These will be used as our change notification subjects. One for the data and the other for any errors.

2. `ReplaySubject` is a special subject that will replay a value from its buffer when a new subscriber is added.

3. We have added getters for both `_tasks` and `_error`. These can be used by an observer to subscribe to and be notified whenever a change occurs to our store.

The last step is to notify our observer of changes within the store. For this we modify the action handlers as follows:

```javascript
  ...
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE)
        .subscribe(action => this._tasks.onNext(action.tasks));

    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR)
        .subscribe(action => this._error.onNext({
          type: action.actionType,
          error: action.error
        }));
  }
  ...
```
