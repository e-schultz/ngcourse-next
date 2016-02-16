## Promise Chains Considered Harmful

A better approach is to break them up into meaningful functions.

```javascript
  function getTasks() {
    return $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => response.data);
  }

  function getMyTasks() {
    return getTasks()
      .then(tasks => filterTasks(tasks, {owner: user.username}));
  }

  getMyTasks()
    .then(tasks => {
      $log.info(tasks);
      vm.tasks = tasks;
    })
    .then(null, $log.error);
```