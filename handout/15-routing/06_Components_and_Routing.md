## Components and Routing

The rule of thumb when using routing is that routes should be defined for top-level components. Generally, micro components should not be used in routing but instead used within the templates of macro component who pass data into them from above.

So in our case, `TaskListComponent` is a good candidate while `TaskComponent` is not.

There are 2 ways we can add a component as a routing state:

The inline template way

```javascript
  .state('tasks', {
    url: '/tasks',
    views: {
      '': {
        template: '<ngc-tasks></ngc-tasks>'
      }
    }
  })
  ...
```

or the "controller" way

```javascript
  import {TaskListComponent} from 'components/task-list/task-list-component';
  ...

  .state('tasks', {
    url: '/tasks',
    views: {
      '': {
        controller: TaskListComponent,
        controllerAs: 'ctrl',
        template: TaskListComponent.template
      }
    }
  })
  ...
```

Both are equivalent, but with the former approach there is no need to define this component on a module using `.directive()`

Let's take a moment to review a few other aspects of ui-router.
