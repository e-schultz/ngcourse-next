## Mocha's Support for Promises

Mocha's tests can alternatively just accept a promise. In most case this is
what you want to use.

```javascript
  ...
  it('should get tasks', () => {
    let tasksService = new TasksService(_mockServerService);
    return tasksService.getTasks()
      .then(tasks => chai.expect(tasks).to.deep.equal(_mockTasks));
  });
  ...
```
