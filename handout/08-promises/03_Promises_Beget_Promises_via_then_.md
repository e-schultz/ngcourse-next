## Promises Beget Promises (via `.then()`)

A key point to remember: unless your promise library is buggy, `.then()`
always returns a promise. Always.

```javascript
  p1 = getDataAsync(query);

  p2 = p1.then(
    results => transformData(results));
```

`p2` is now a promise regardless of what transformData() returned. Even if
something fails.

If the callback function returns a value, the promise resolves to that value:

```javascript
  p2 = p1.then(results => 1);
```

`p2` will resolve to “1”.

If the callback function returns a promise, the promise resolves to a
functionally equivalent promise:

```javascript
  p2 = p1.then(results => {
    let newPromise = getSomePromise();
    return newPromise;
  });
```

`p2` is now functionally equivalent to newPromise. It's not the same object,
however. Let's discuss why not.

```javascript
  p2 = p1.then(
    results => throw Error('Oops'));

  p2.then(results => {
    // You will be wondering why this is never
    // called.
  });
```

`p2` is still a promise, but now it will be rejected with the thrown error.

Why won't the second callback ever be called?
