## Unit Testing a Component that depends on a Store

Let's start by having a look at out test for `TaskListComponent`. Create a new file *app/src/components/task-list/task-list-component.test.ts*, and copy the code below.

```javascript
import {TaskListComponent} from './task-list-component';
import {TaskActions} from '../../actions/task/task-actions';

import 'angular';
import 'angular-mocks';
import * as Rx from 'rx';


let _$scope;
let _tasksStoreMock;

let _tasksMock = [{
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

describe('TaskListComponent', () => {

  beforeEach(() => {
    angular.mock.inject($rootScope => {
      _$scope = $rootScope.$new();
    });

  });

  it('should get data from stores', () => {

    let scheduler = new Rx.TestScheduler();

    _tasksStoreMock = {
      tasks: scheduler.createHotObservable(
        Rx.ReactiveTest.onNext(200, _tasksMock))
    };

    let taskListComponent = new TaskListComponent(_$scope, _tasksStoreMock);

    scheduler.advanceTo(220);

    chai.expect(taskListComponent.tasks).to.equal(_tasksMock);
  });

});
```

The top part of the test should be familiar, we are just creating mock data to use within our test. We should look at the anatomy of the test defined in our only `it` block:

1. First, we create a TestScheduler object. TestScheduler is a virtual scheduler that allows us to control the timing of our test. 

2. Then we create a mock `tasks` observable using the test scheduler. And define a virtual time for the `onNext` to be called with our mock data at 200 "ticks".

3. The code from (1) and (2) above allows us to create a mock store and instantiate our `TaskListComponent` class to be tested.

4. Then we advance out test scheduler to 220 ticks and test the state of our `TaskListComponent` instance at that time.

Note, that `done` callback is not required here, as our test is purely synchronous.
