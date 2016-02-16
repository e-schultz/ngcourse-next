## Update Param Without a Reload

If we want to change the value of the parameters _without_ triggering a state
transition, we need to update the values in thre three different places where
the UI route keeps them.

```javascript
  // Updates a state param without triggering a reload.
  function quietlyUpdateParam(key, value) {
    $state.params[key] = value;
    $stateParams[key] = value;
    $state.$current.params[key] = value;
  }
```

An example of where this would be useful is a Google Maps style UI, where the
URL is continuously updated as the user moves around the map.