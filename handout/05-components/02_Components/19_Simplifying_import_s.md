## Simplifying `import`s

We can simplify our `import` statements further to make our life, just a little bit easier.
Let's create a new file, *app/src/components/index,ts* and put the following code in there.

```javascript
  export * from './task-list/task-list-component';
  export * from './main/main-component';
```

Now in our app.ts we can change our import statement to the following:

```javascript
  import {MainComponent, TaskListComponent} from './components/index';
...
```

ES6's module system is smart enough to figure out that *index.ts* is the default file in the directory.
So we can simplofy this even further.

```javascript
  import {MainComponent, TaskListComponent} from './components';
  ...
```
