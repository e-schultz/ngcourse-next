### `fromPromise`

```javascript
  let promise = new Promise((resolve, reject) => resolve(42));

  Rx.Observable.fromPromise(promise)
    .subscribe((value) => console.log(value));
```
