## States with Parameters

```javascript
  .state('tasksDetailById', {
    url: '/tasks/{_id}',
    template: 'task details with id'
  })
```

This can include regular expressions:

```javascript
  .state('tasksDetailByRegex', {
    url: '/tasks/{_id:[A-Za-z0-9-_]{0,}}',
    template: 'task details with regex'
  })
```

Now we are going to rebuild our view around ui-router. First, let's do tasks.
