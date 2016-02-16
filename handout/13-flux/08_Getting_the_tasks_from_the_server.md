### Getting the tasks from the server

Lets retrieve some tasks from the server using our *ServerService* implemented in earlier chapters.

```javascript
  ...
   constructor(
    ...
      this._tasks = [];
      this.registerActionHandlers();
      this.getTasks();
  }
  ...
  private getTasks() {
    Rx.Observable.fromPromise(
      this.server.get('/api/v1/tasks'))
        .subscribe(tasks => this._tasks = tasks);
  }
  ...
```

Notice the use of `Rx.Observable.fromPromise` that we have covered in the previous chapter to wrap our Promise base server. This is not required and you could achieve a similar result using `then()` methods of the underlying promise. Also, we have added a call to `getTasks()` method within the constructor to initialize our store with the data at the beginning of it's lifecycle.
