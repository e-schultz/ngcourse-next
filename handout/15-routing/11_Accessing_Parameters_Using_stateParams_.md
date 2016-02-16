## Accessing Parameters Using `$stateParams`

`$stateParams` can be injected into your components using the `$inject` and used as follows:

```javascript
  $stateParams._id
```

But again, let's wrap it:

```javascript
  ...
  getTaskId() {
    return this.$stateParams._id;
  };
```
