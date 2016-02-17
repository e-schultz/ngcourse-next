## Catching Rejections

So, catch rejections:

```javascript
  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => response.data)
    .then(tasks => filterTasksAsynchronously(tasks))
    .then(
      tasks => {
        $log.info(tasks);
        vm.tasks = tasks;
      }, 
      error => $log.error(error));
```

What's the problem with this code?

So, the following is better.

```javascript
  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => response.data)
    .then(tasks => filterTasksAsynchronously(tasks))
    .then(tasks => {
      $log.info(tasks);
      vm.tasks = tasks;
    })
    .then(
      null, 
      error => log.error(error)
    );
```

Note that one catch at the end is often enough.
