## Reusing Promises

```javascript
  ...
  export class TasksService {

    private taskPromise;
    static $inject = ['serverService'];
    constructor(private serverService) { }

    public getTasks () {

      this.taskPromise = this.taskPromise || 
        this.serverService.get('/api/v1/tasks');
      return taskPromise;
    };
  }
```
