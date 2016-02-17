## Catch and Release

Or you can catch, do something, and still pass the exception onwards:

```javascript
  .then(null, error => {
    $log.error(error); // Log the error
    throw error; // Then re-throw it.
  });
```

Sometimes we may want to re-throw conditionally.
