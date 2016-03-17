## Using Stores within Components

Our Store is one part of a bigger picture, let's use our store within our `TaskListComponent` class.

```javascript
export class TaskListComponent {

  tasks: Task[];
  users: {};
  user;
  errorMessage: String;

  ...

  constructor(
    private tasksStore: TasksStore
    ...
  ) {

    this.tasks = [];

    tasksStore.tasks
      .subscribe(tasks => this.tasks = tasks);
  }

  ...
}
```

All we are doing here is providing an observer to listen to store change events or error coming from the store. When a change occurs within the Store our Component gets notified and updates it's own (view related) list of tasks. If an error has occurred within the store the component get notified as well and can display it to the user (in some friendly form).

Since we used a `ReplaySubject` with a buffer of 1, we are guaranteed to get notified of the data within the store. Even if our component got instantiated after this event has already occurred.

Note, we did not have to change our `TaskComponent` implementation. This is because the `TaskListComponent` is passing it data down to it. It is recommended that only top level components subscribe to stores. Then pass that data down to other components.
