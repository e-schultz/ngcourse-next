### Getting the tasks from the server

We start by modifying the `getTasks` method in the `TaskActions` service:

```javascript
export class TaskActions {
  ...

  getTasks() {
    this.tasksService.getTasks()
      .then(tasks => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS_RESPONSE,
        tasks: tasks
      }))
      .then(null, error => this.dispatcher.onNext({
        actionType: TASK_ACTIONS.GET_TASKS_RESPONSE_ERROR,
        error: error
      }));
  }
}
```

Here we trigger the `TasksService` to make the `GET` request. When the 

Notice the use of `Rx.Observable.fromPromise` that we have covered in the previous chapter to wrap our Promise base server. This is not required and you could achieve a similar result using `then()` methods of the underlying promise. Also, we have added a call to `getTasks()` method within the constructor to initialize our store with the data at the beginning of it's lifecycle.
