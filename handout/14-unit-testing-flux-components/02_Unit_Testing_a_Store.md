## Unit Testing a Store

There are some similarities between testing services and stores. Let's have a look at the store test below, and copy the code into *app/src/stores/tasks/tasks-store.test.ts*.

```javascript
  import {TasksStore} from '../../stores/tasks/tasks-store';
  import {TASK_ACTIONS} from '../../actions/action-constants';

  import 'rx.testing';
  import 'rx.virtualtime';

  describe('TasksStore', () => {
    
    let _scheduler;
    let _mockDispatcher;
    let _mockServerService;
    let _$log;
    
    let _mockTasks;
    let _mockNewTask;
    
    beforeEach(() => {
      
      _mockTasks = [{
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
      
      _mockNewTask = {
        owner: 'alice',
        description: 'Kill Bill.',
        done: false
      };
      
      _mockServerService = {
        get: () => Promise.resolve(_mockTasks),
        post: (newTask) => Promise.resolve(
          _mockTasks.push(_mockNewTask))
      };
      
      inject($log => _$log = $log);
      
      _scheduler = new Rx.TestScheduler();
    });

    it('should add a new task', (done) => {

      _mockDispatcher = _scheduler.createColdObservable(
        Rx.ReactiveTest.onNext(10, {
          actionType: TASK_ACTIONS.ADD_TASK,
          newTask: _mockNewTask
        }));
      
      let tasksStore = new TasksStore(_$log, _mockServerService, _mockDispatcher);

      tasksStore.tasksSubject.subscribe(
        tasks => {
          chai.expect(tasks).to.not.be.undefined;
          chai.expect(tasks).to.contain(_mockNewTask);
          done();
        }
      );
      
      _scheduler.advanceTo(25);
    });
  });
}

```

Most of the code above should be familiar by this point. The main goal of the unit test is to instantiate a store while creating a mock dispatcher using RxJS to schedule an action to be piped into a store. Note that we are using an asynchronous test here, since we are working with observable streams.