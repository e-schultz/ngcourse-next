### `fromArray`

```javascript
  Rx.Observable.fromArray([1, 2, 3]).subscribe(
    element => console.info(element),
    error => console.info(error),
    () => console.info('I am done!')
  );
```
