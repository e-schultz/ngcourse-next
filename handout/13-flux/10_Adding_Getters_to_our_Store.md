## Adding Getters to our Store

Being notified of a change within the store is not enough. We need to provide our observers with a mechanism to get the data from the Store. Let's add a getter method to get our list of tasks.

```javascript
  ...
  get tasks() {
    return this._tasks;
  }
  ...
```
