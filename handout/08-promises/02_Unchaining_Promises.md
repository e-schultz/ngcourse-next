## Unchaining Promises

You might have seen chained promises:

```javascript
  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => response.data)
    .then(tasks => {
      $log.info(tasks);
      vm.tasks = tasks;
    })
    .then(null, error => $log.error(error));
```

We could also make this more complicated:

```javascript
  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => {
      let tasks = response.data;
      return filterTasks(tasks);
    })
    .then(tasks => {
      $log.info(tasks);
      vm.tasks = tasks;
    })
    .then(null, error => $log.error(error);
```

Or even:

```javascript
  $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => response.data)
    .then(tasks => filterTasksAsynchronously(tasks))
    .then(tasks => {
      $log.info(tasks);
      vm.tasks = tasks;
    })
    .then(null, error => $log.error(error));
```

To make sense, let's "unchain" this using variables:

```javascript
  let responsePromise = $http.get('http://ngcourse.herokuapp.com/api/v1/tasks');
  let tasksPromise = responsePromise.then(
    response => response.data);

  let filteredTasksPromise = tasksPromise.then(
    tasks => filterTasksAsynchronously(tasks));

  let vmUpdatePromise = filteredTasksPromise.then(tasks => {
    $log.info(tasks);
    vm.tasks = tasks;
  })

  let errorHandlerPromise = vmUpdatePromise.then(
    null, error => $log.error(error));
```

Let's work through this example.
