## More States

```javascript
  $stateProvider
    .state('tasks', {
      url: '/tasks',
      template: 'my tasks'
    })
    .state('tasksDetail', {
      url: '/tasks/details',
      template: 'task details'
    })
    .state('account', {
      url: '/my-account',
      template: 'my account'
    });
```
