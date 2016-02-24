### Notifying Store Subscribers of State Change

So far we have managed to get the data we need from the server and make it available to the store. In practice our stores will have component listening to the change on our domain model. We will implement this mechanism using what we learned about RxJS below.

```javascript
  ...
  private _tasksSubject;
  private _tasks;

  static $inject = ['$log', 'server', 'dispatcher'];
  constructor(
    private $log,
    private server,
    private dispatcher
    ) {
      this._tasks = [];
      this._tasksSubject = new Rx.ReplaySubject(1);
      this.registerActionHandlers();
      this.getTasks();
  }
  
  get tasksSubject() {
    return this._tasksSubject;  
  }
  
  private emitChange() {
    this._tasksSubject.onNext();
  }
  
  private emitError(error) {
    this._tasksSubject.onError(error);
  }

  private registerActionHandlers() {
  ...
```


Let go through this code step by step:

1. We created a `Rx.ReplaySubject(1)` as a private instance variable to be our change notification subject. This is a special subject that will replay a value from its buffer when a new subscriber is added.
2. We have added a new getter property `get tasksSubject()`, that can be used by an observer to subscribe to and be notified whenever a change occurs to our domain model.
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
