### Handling Errors

So far we created a basic observable example and attached the `onError` callback. Let's see how it can be put to better use.

```javascript
  let source = Rx.Observable.create(observer => {
    setTimeout(() => {
      try {
        //throw 'My Error';
        observer.onNext(42);
        observer.onCompleted();
      } 
      catch (error) {
        observer.onError(error);
      }
    }, 2000);
    
    console.log('Starting Observable Sequence!');
  });

  let subscription = source.subscribe(
    value => console.log('Value: ' + value),
    error => console.log(error),
    () => console.log('Completed Observable Sequence!')
  );
```

Running the above example without the `try...catch` and throwing an error will produce an uncaught error. Adding the try catch and handling the error by using the `onError` method allows us to emit the error via an observable and propagate it properly to the observer end.
