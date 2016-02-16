## A Simplified Use of done()

If all we want to do in case of error is to pass it to done, we don't
actually need to define a new function in the handler. We can just provide
`done` as the handler.

```javascript
  .then(null, error => done(error));
```

is equivalent to:

```javascript
  .then(null, done);
```
