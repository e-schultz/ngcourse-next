### `interval` and `take`

```javascript
  Rx.Observable.interval(1000).take(5).subscribe(
    element => console.info(element),
    error => console.info(error),
    () => console.info('I am done!')
  );
```

The observable above will produce a value every 1000ms, only the first 5 values will be emitted due to the use of `take`, otherwise the sequence will emit values indefinitely. There are many more operators available within the API, such as `range`, `timer` etc.
