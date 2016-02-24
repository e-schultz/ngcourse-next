### Notifying Store Subscribers of State Change

So far we have managed to get the data we need from the server and make it available to the store. The next step is to publish this data to for our components. The components will also be listening to the changes to the store. We will implement this mechanism using what we learned about RxJS.

```javascript
export class TasksStore {

  private _tasks: Rx.ReplaySubject<Task[]>;
  private _error: Rx.ReplaySubject<any>;

  static $inject = ['dispatcher'];

  constructor(private dispatcher: Rx.Subject<any>) {

    this._tasks = new Rx.ReplaySubject<Task[]>(1);
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

3. We have added a new getter property `get tasks()`, that can be used by an observer to subscribe to and be notified whenever a change occurs to our domain model.

3. We implemented 2 utility method that we will use within our store to notify our on change observer of change to the model within the store, or an error that occurred within the store with `emitChange()` and `emitError(error)` respectively.

Now that we have all the parts in place in order to notify our observer of changes within the store, let's modify our `getTasks()` method as follows.

```javascript
  ...
  private getTasks() {
    Rx.Observable.fromPromise(
      this.server.get('/api/v1/tasks'))
        .subscribe(
          tasks => {
            this._tasks = tasks;
            this.emitChange();
          },
          error => this.emitError(error));
  }
  ...
```
