## Using an Existing Function As a Handler

```javascript
    .then(null, error => $log.error(error));
```

can be replaced with:

```javascript
    .then(null, $log.error);
```

Let's make sure we understand why.
