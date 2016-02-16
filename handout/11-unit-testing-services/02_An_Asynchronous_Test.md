## An Asynchronous Test

So, we want to check what the promise resolves too, but this only will happen
*later*. So, we need to use an asynchronous test that would wait for the promise to resolve.

```javascript
  ...
  beforeEach(() => { 
    _mockServerService = {
      get: () => Promise.resolve(_mockTasks)
    };
  });

  it('should get loaded', function() {
    let tasksService = new TasksService(_mockServerService);
    chai.expect(tasksService.getTasks()).to.not.be.undefined;
  });
  
  it('should get tasks', (done) => {
    // Notice that we've specified that our function takes a 'done' argument.
    // This tells Mocha this is an asynchronous test. An asynchronous test will
    // not be considered 'successful' until done() is called without any
    // arguments. If we call done() with an argument the test fails, treating
    // that argument as an error.
    let tasksService = new TasksService(_mockServerService);
    
    return tasksService.getTasks()
      .then(tasks => {
        // Assertions thrown here will result to a failed promise downstream.
        expect(tasks).to.deep.equal(_mockTasks);
        done();
      })
      // Remember to call done(), otherwise the test will time out (and fail).
      .then(null, error => {
        done(error);
      });
  });
  ...
```

Note the use of `deep.equal` assertion to check that the tasks received by calling `TasksService.getTasks()` method. Let's run.
