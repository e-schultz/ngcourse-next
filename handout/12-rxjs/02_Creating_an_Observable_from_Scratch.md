## Creating an Observable from Scratch

First let's jump into a basic example to illustrate the concepts behinds RxJS observables.

```javascript
  let source = Rx.Observable.create(observer => {
    setTimeout(() => {
      observer.onNext(42);
      observer.onCompleted();
    }, 2000);
    
    console.log('Starting Observable Sequence!');
  });

  let subscription = source.subscribe(
    value => console.log('Value: ' + value),
    error => console.log(error),
    () => console.log('Completed Observable Sequence!')
  );
```

First, we create an observable sequence `source`. This sequence emits a single value asynchronously using `setTimeout()` and then completes.

The second part of the code subscribes to the observable sequence `source`, and provides an *Observer* represented by the 3 callbacks provided. Those callbacks are:

1. `onNext`: represents a function to be invoked when a new value is emitted onto an observable sequence `source`.
2. `onError`: represents a function to be invoked if an error occurs within an observable sequence.
3. `onComplete`: represents a function to be invoked when the observable sequence completes.
