## Handling Events with Components

If we put functions onto the component's scope, we can attach those functions to DOM events.

Let's add a `addTask()` method to our `MainComponent` class:

```typescript
  ...
  export class MainComponent {
    ...
    public addTask() {
      this.numberOfTasks += 1;
    }
  };
  ...
```

We need to modify our component's template and add a button element with an `addTask()` function attached to it's click event:

```html
  <div>
    <span>
      Hello, {{ ctrl.username }}!
      You've got {{ ctrl.numberOfTasks }} tasks.
      <button ng-click="ctrl.addTask()">Add task</button>
    </span>
  </div>
```

Note the use of `ng-click` directive here.
