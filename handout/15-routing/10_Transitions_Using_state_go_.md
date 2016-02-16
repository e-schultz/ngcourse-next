## Transitions Using `$state.go()`.

We can also transition using `$state.go()`:

```javascript
  $state.go('tasks.details', {_id: taskId});
```

However, let's wrap this in a service, we can use the same *router-service.ts* file for convinience:

```javascript
  ...
  export class RouterService {

    static $inject = ['$state'];
    constructor(private $state) { }

    goToTask(taskId) {
      this.$state.go('tasks.details', {
        _id: taskId
      });
    }

    goToTaskList() {
      this.$state.go('tasks', {}, {
        reload: true
      });
    }
  };

```
