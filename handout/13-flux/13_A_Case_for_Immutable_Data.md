## A Case for Immutable Data

It is important that Stores, provide read-only access to its data. Stores should not provide setters to change their state. In our app so far we aren't actually maintaining state in the store. We fetch data from the server and publish it as is. In a more real world scenario you might actually want to maintain some data in the store. And then a reference to that state is pushed to the observers. This introduces certain complexities.

What if a component wants to make a change to the data retrieved from a store. This could be for UI purposes, re-shaping, etc. If that were to happen it would change the state of the store.

This is why our stores should maintain their state in immutable data structures. To illustrate on how this can be achieved, let's refactor our `TasksStore` to use immutable for it's model. Even though there could be several ways we could achieve this, for the purposes of this example we are going to be using the `Immutable.js` library: https://facebook.github.io/immutable-js/

```javascript
...
import {fromJS} from 'immutable';

export class TasksStore {

  private _tasks: Rx.ReplaySubject<Task[]>;
  private _error: Rx.ReplaySubject<any>;
  private _data;

  static $inject = ['dispatcher'];

  constructor(private dispatcher: Rx.Subject<any>) {

    this._tasks = new Rx.ReplaySubject<Task[]>(1);
    this._error = new Rx.ReplaySubject(1);
    this._data = fromJS([]);

    this.registerActionHandlers();
  }

  ...
  
  private registerActionHandlers() {
    this.dispatcher.filter(
      action => action.actionType === TASK_ACTIONS.GET_TASKS_RESPONSE)
        .subscribe(action => {
          this._data = fromJS(tasks);
          this._tasks.onNext(_data)
        });
    ...
  }

  ...

}
```
