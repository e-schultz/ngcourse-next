## A Case for Immutable Data

The important part is that Stores, provide read-only access to its data. As Stores should not provide setters to change their state. In our app so far we aren't actually maintaining state in the store. We fetch data from the server and publish it as is. In a more real world scenario you might actually want to maintain some data in the store. And then a reference to that state is pushed to the observers.

Technically if our `TaskListComponent` decided to change the array of `tasks` it received from the store, it in effect would change the state of the store's domain. What if a component wants to make a change to this data for some UI purposes?

This is why our stores should contain their state in the immutable data structures. To illustrate on how this can be achieved, let's refactor our `TasksStore` to use immutable for it's model. Even though there could be several ways we could achieve this, for the purposes of this example we are going to be using the `Immutable.js` library: https://facebook.github.io/immutable-js/

```javascript
  import {List, fromJS} from 'immutable';

  export class TasksStore {

    private _tasksSubject;
    private _tasks;

    constructor(
      ...
      ) {
      this._tasks = List();
      this._tasksSubject = new Rx.ReplaySubject(1);
      ...
    }
    
    get tasks() {
      return this._tasks.toJS();
    }

    ...
    private getTasks() {
      Rx.Observable.fromPromise(
        this.server.get('/api/v1/tasks'))
          .subscribe(
            tasks => {
              this._tasks = fromJS(tasks);
              this.emitChange();
            },
            error => this.emitError(error));
    }
  }
```
