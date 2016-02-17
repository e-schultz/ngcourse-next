## Testing Services

Our tests are not really "unit tests" if they make use of many layers of dependencies - and especially if they make server calls. So, we need to "mock" our dependencies.

Since our services are classes with all of their dependencies injected through their constructors, testing them is simple. We just need to mock out all of their dependencies and pass them to our service class.

Let's create some unit tests for our `TasksService` class, starting by mocking out it's only dependency, `ServerService`.

```javascript
import {TasksService} from './tasks-service';

describe('TasksService', () => {
  
  let _mockServerService;
  
  let _mockTasks = [{
    owner: 'alice',
    description: 'Build the dog shed.',
    done: true
  }, {
    owner: 'bob',
    description: 'Get the milk.',
    done: false
  }, {
    owner: 'alice',
    description: 'Fix the door handle.',
    done: true
  }];

  beforeEach(() => { 
    _mockServerService = {
      get: () => Promise.resolve(_mockTasks)
    };
  });

  it('should get loaded', function() {
    let tasksService = new TasksService(_mockServerService);
    chai.expect(tasksService.getTasks()).to.not.be.undefined;
  });
});

```

Let's save this to `app/src/services/tasks/tasks-service.test.js`.

The sad truth, though, is that we have only established that `tasksService.getTasks()` does return a promise. We can't really judge the success of this test until we know what that promise resolves to.
