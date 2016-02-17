### Passing Data Between Components

We have introduced a bug during our re-factoring, the username is not displayed when  `TaskListComponent` is shown. Let's modify *task-list-component.ts* and fix it:

```javascript
  ...
  export class TaskListComponent {
    
    static directiveFactory: ng.IDirectiveFactory = () => ({
      restrict: 'E',
      controllerAs: 'ctrl',
      scope: {},
      bindToController: {
        username: '=username'
      },
      controller: TaskListComponent,
      template: require('./task-list-component.html')
    });
    ...
  }
```

and in *main-component.ts* let's change our template as follows:

```html
  ...
  <ngc-tasks username="ctrl.username"></ngc-tasks>
  ...
```

Now the `username` property is passed from `MainComponent` to `TaskListComponent` and this is how we can pass data "into" a child component.
