## Clean up

Even though our application is relatively small, and RxJS subscriptions are relatively lightweight on resources, we should cleanup our subscription when it is no longer needed. How do we know if the subscription is no longer needed?

There is another part of Angular we need to cover, and that is component life cycle events accessible to us via the `$scope` service.

Let's inject this service into out component as shown below:

```javascript
  ...
  constructor(private $scope, ...)
  ...
```

since we will need to dispose of our subscription above we need to keep a reference to it when we subscribe:

```javascript
  ...
  let tasksSubscription = this.tasksStore.tasksSubject.subscribe(
    tasks => this._tasks = tasks,
    error => this._errorMessage = error);
  ...
```

Finally, let's use `$scope`'s `$on` method to subscribe to the `$destroy` even of the component in question:

```javascript
  ...
  constructor(
    private $log,
    private $scope,
    private tasksStore
    ) {

    let tasksSubscription = this.tasksStore.tasksSubject.subscribe(
      tasks => this._tasks = tasks,
      error => this._errorMessage = error);

    this.$scope.$on('$destroy', () => tasksSubscription.dispose());
  }
  ...
```
