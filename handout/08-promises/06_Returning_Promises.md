## Returning Promises

There is one (common) case when it's ok to not catch the rejection:

```javascript
  return $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then(response => response.data);
```

That's passing the buck. But remember: the buck stops with the component's
function that is triggered by Angular.
