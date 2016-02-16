## Iteration with `ng-repeat`

When we have a list of items, we can use `ng-repeat` directive within our component's template to create identical DOM element for each item.

Let's modify the temaplate in *task-list-component.ts*

```html
  <div>
    <span>
      Hello, {{ ctrl.username }}!
      You've got {{ ctrl.tasks.length }} tasks.
    </span>
    <button ng-click="ctrl.addTask()">Add task</button>
  </div>

  <div>
    <div ng-repeat="task in ctrl.tasks" >
      <p>{{ task.owner }} | {{ task.description }}</p>
    </div>
  </div>
```

In the TaskListComponent all we do is set `tasks` to an array:

```javascript
...
  export class TaskListComponent {
    ...
    private tasks;

    constructor(private $log) {
      this.tasks = [
        {
          owner: 'alice',
          description: 'Build the dog shed.'
        },
        {
          owner: 'bob',
          description: 'Get the milk.'
        },
        {
          owner: 'alice',
          description: 'Fix the door handle.'
        }
      ];
    }

    public addTask() {
      this.$log.debug('Current number of tasks:', this.tasks.length);
    }
  };
```

Note that in the template of this component we also change `{{ ctrl.numberOfTasks }}` to `{{ ctrl.tasks.length }}`.
