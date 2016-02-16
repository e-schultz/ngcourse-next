## Postponing the Requests

```javascript
  ...
  export class ServerService {

    private baseUrl = 'http://ngcourse.herokuapp.com';

    static $inject = ['$http', 'userService'];
    constructor(
      private $http,
      private userService) { }
      
    public get(path) {
      return this.userService.whenAuthenticated()
        .then(() => this.$http.get(API_BASE_URL + path))
        .then(response => response.data);
    }
  }
```
