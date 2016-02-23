## $http

Now we are ready to start making HTTP calls from our Angular app.

While AngularJS provides a service called `$resource` for interacting with
RESTful APIs, we won't be using it, because use of `$resource` often leads to
an "optimistic" approach to asynchronous code, which results in bugs that are
hard to track. Instead, we will be using a more basic Angular server, `$http`.

Let's start by just getting a list of tasks:

```javascript
...
export class TaskListComponent {

  ...
    
  static $inject = ['$log', '$http'];
  
  constructor(private $log, private $http) {

    this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .success((data, status) => {
        this.$log.info(data);
        this.tasks = data;
      })
      .error((data, status) => this.$log.error(status, data));
  }

  public addTask(task) {

  }
};
```

Here we are making an HTTP GET request and providing two callbacks: one to
handle successful responses (200-level status codes or redirects that
eventually lead to a 200-level status code) and another to handle errors (400-
and 500-level status codes).

When the callbacks are called, they will be passed the data, expanded into a
full JavaScript object or array and the specific status code.

We'll focus on a somewhat different different approach, though:

```javascript
  ...
    this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => {
        this.$log.info(response.data);
        this.tasks = response.data;
      })
      .then(null, 
        error => this.$log.error(status, error));
  ...      
```

This takes advantage of the fact that `$http.get()` returns an object that can
act as a standard "promise".

In addition to `$http.get()`, there is also `$http.post()`, `$http.put()`,
`$http.delete()`, etc. They all return promises. To get more mileage out of
those methods, we'll have to spend some time looking closely at promises.