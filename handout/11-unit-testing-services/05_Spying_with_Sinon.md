## Spying with Sinon

A test spy is a function that records arguments, return value, the value of
`this`, and exception thrown (if any) for all its calls. A test spy can be an
anonymous function or it can wrap an existing function. When using Sinon,
we'll wrap the existing function with `sinon.spy()`:

```javascript
  ...
  beforeEach(() => { 
    _mockServerService = {
      get: sinon.spy(() => Promise.resolve(_mockTasks))
    };
    _mockServerService.get.reset();
  });
  ...
```

When spying on existing functions, the original function will behave as
normal, but we will be proxied through the spy, which will collect information
about the calls. For example, we can check if the function has been called:

```javascript
  ...
  it('should only call server service get once', () => {
    let tasksService = new TasksService(_mockServerService);
    return tasksService.getTasks() // Call getTasks the first time.
      .then(() => tasksService.getTasks())
      .then(() => chai.expect(_mockServerService.get.calledOnce).to.be.true);
  });
  ...
```

Note that here we created a new test to verify that `serverService.get` is only
getting called once. In between each test we are resetting the data gathered by the spy with `_mockServerService.get.reset()`. 

Finally, we do not attempt to verify in this test that the promise returned by `getTasks()` actually resolves to the value we expect, since this is already being verified by another test. Keeping tests small and
focused greatly facilitates test maintenance.
