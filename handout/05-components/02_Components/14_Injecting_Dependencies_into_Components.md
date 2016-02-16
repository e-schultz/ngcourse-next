### Injecting Dependencies into Components

Let's start with injecting Angular's `$log` service into our component:

```javascript
  ...
  export class MainComponent {
    ...
    static $inject = ['$log'];
    ...
    constructor( private $log ) { 
      ...
    }

    public addTask() {
      this.$log.debug('Current number of tasks:', this.numberOfTasks);
      this.numberOfTasks += 1;
    }
  }
  ...
```

In the code above we are injecting a `$log` service into our component by adding `$inject` static property to our component class. The reference to `$log` is available in the constructor. 

Note that a `private $log` parameter in the constructor automatically creates a property of the same name on the class scope, accessible using `this.$log`.
