## More Services

When it comes to services, the more the better. Let's refactor some of the
code from our `tasks` service into a new `server` service *app/src/services/server/server-service.ts*.

```javascript

  export class ServerService {

    private baseUrl = 'http://ngcourse.herokuapp.com';

    static $inject = ['$http'];
    
    constructor(private $http) { }
      
    public get(path) {
      return this.$http.get(this.baseUrl + path)
        .then(response => response.data);
    }
  }
```

Again, let's add a new definition in *app.ts*.

```javascript
  ...
  import {ServerService} from './services/server/server-service';
  ...
  angular.module('ngcourse', [])
    ...
    .service('server', ServerService);
  ...    
```

While our `TaskService` code gets simplified to:

```javascript

  export class TasksService {

    static $inject = ['serverService'];
    constructor(private serverService) { }

    public getTasks () {
      return this.serverService.get('/api/v1/tasks');
    };
  }
```

And we have a layered service architecture with the tasks service calling the server service.

But why bother, you might ask? Lets go over some of the benefits.
