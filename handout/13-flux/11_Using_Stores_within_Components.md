## Using Stores within Components

Our Store is only a part of a bigger picture, let's use our store within our `TaskListComponent` class.

```javascript
export class TaskListComponent {

  ...

  private _tasks;
  private _errorMessage;

  static $inject = ['$log', 'tasksStore'];
  constructor(
    private $log,
    private tasksStore
    ) {

    this.tasksStore.tasksSubject.subscribe(
      tasks => this._tasks = tasks,
      error => this._errorMessage = error);
  }
  ...
```

All we are doing here is providing an observer to listen to store change events or error coming from the store. When a change occurs within the Store our Component gets notified and updates it's own (view related) list of tasks. If an error has occurred within the store the component get notified as well and can display it to the user (in some friendly form).

Since we used a `ReplaySubject` with a buffer of 1, we are guaranteed to get notified of the data within the store, even if our component got instantiated after this event has already occurred. This reduced the need to call `this.tasksStore.tasks` on each components instantiation.

Note, how we did not have to change our `TaskComponent` implementation, as a result of `TaskListComponent` passing it data from above. An important guideline with the stores, is that for the most part only top level components within your application should subscribe to them, and then pass it down to components below.
