## Using `.constant()` and `.value()`

We could decompose yet more, though:

```javascript
  angular.module('ngcourse', [])
    ...
    .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
    .service('serverService', ServerService);
```

and 

```javascript

export class ServerService {

  static $inject = ['$http', 'API_BASE_URL'];
  
  constructor(private $http, private API_BASE_URL) { }
    
  public get(path) {
    return this.$http.get(this.API_BASE_URL + path)
      .then(response => response.data);
  }
}
```

Alternatively, we can use `.value()` instead of `.constant()`. However, when
in doubt, use `.constant()`.
