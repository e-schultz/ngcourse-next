## Two-Way Data Binding with `ng-model`

We can also control our component's property value from within the HTML.
Modify the template of our component to include the following:

```html
  <div>
    Enter username: <input ng-model="ctrl.username"/>
    <br/>
    <span>
      Hello, {{ ctrl.username }}!
      You've got {{ ctrl.numberOfTasks }} tasks.
      <button ng-click="ctrl.addTask()">Add task</button>
    </span>
  </div>
```

In the above example, the `ng-model` directive bi-directionally binds an element to our component's class property. Note that if the property does not exist on the controller, it will be created.

**Important Note:** Two way binding in Angular 2 is one of the biggest changes compared to Angular 1.x. Angular 2 provides a mechanism allowing us to achieve 2-way data binding similarly to today, however this is mostly syntactic sugar while the underlying framework is different. A more detailed look into this will be provided in one of subsequent chapter of this course.
