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

Here we trigger the `TasksService` to make the `GET` request. And based on whether the request resolves/rejects we dispatch the appropriate action.

Also, we have added a call to `getTasks()` method within the run block for the app module. This will initialize our store with the data at the beginning of it's life-cycle. 

```javascript
angular.module('ngcourse', [...])
  ...
  .run((tasksActions) => {
    tasksActions.getTasks();
  });
```
