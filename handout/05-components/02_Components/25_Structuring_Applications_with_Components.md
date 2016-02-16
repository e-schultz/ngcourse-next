## Structuring Applications with Components

For the sake of a simple application our `TaskListComponent` class is fine, but as the complexity and size of our application grow we want to divide responsibilities among our components further.

How should we divide responsibilities between our components? Let's start with our task list example above.

`TaskListComponent` will be responsible with retrieving and maintaining the list of tasks from the domain model. It should be able to retrieve the tasks, and it should be able to add a new task to the domain model (abstracted our in later sections).

`TaskComponent` will be responsible for a single task and displaying just that task interacting with it's parent through it's "public API"

With the above in mind, let's create the `TaskComponent` class.

```javascript
  ...
  export class TaskComponent {

    static selector = 'ngcTask';
  
    static directiveFactory: ng.IDirectiveFactory = () => {
      return {
        restrict: 'E',
        scope: {},
        controllerAs: 'ctrl',
        bindToController: {
          task: '='
        },
        controller: TaskComponent,
        template: require('./task-component.html')
      };
    };
  
    private task;
    constructor(private $log) {

    }
  };
```

and its corresponding template

```html
  <p>{{ ctrl.task.owner }} | {{ ctrl.task.description }}</p>
```

What is left is to modify our *task-list-component.html*

```html
  <div>
    <span>
      Hello, {{ ctrl.username }}!
      You've got {{ ctrl.tasks.length }} tasks.
    </span>
    <button ng-click="ctrl.addTask()">Add task</button>
  </div>

  <div>
    <ngc-task ng-repeat="task in ctrl.tasks" 
        task="task">
    </ngc-task>
  </div>
```

The refactoring above illustrates and important categorization between components, as it allows us to think of components in the following ways.

**Macro Components:** which are application specific, higher-level, container components, with access to the application's domain model.

**Micro Components:** which are components responsible for UI rendering and/or behaviour of specific entities passed in via components API (i.e component properties and events). Those components are more inline with the upcoming Web Component standards.