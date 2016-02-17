### Releasing Resources

Note, however that our log statement within `setTimeout` was still called. This implies that even though our subscription was disposed of, the code within the `setTimeout` was still executed. All that we achieved is that no values were emitted onto for the observer to see, but our code block was still put on the even queue to be executed. In other words we did not release our resources properly which is the main use of the function we are returning in our `create` block. We are half way there.

The correct implementation in this case would be to cancel the timeout instead, like so.

```javascript
  let source = Rx.Observable.create(observer => {
    let timeoutId = setTimeout(() => {
      try {
        
        console.log('In Timeout!');
        
        observer.onNext(42);
        observer.onCompleted();
      } 
      catch (error) {
        observer.onError(error);
      }
    }, 2000);
    
    console.log('Starting Observable Sequence!');
    
    return onDispose = () => {
      console.log('Releasing Resources of this Observable Sequence');
      clearTimeout(timeoutId);
    };
    
  });

  let subscription = source.subscribe(
    value => console.log('Value: ' + value),
    error => console.log(error),
    () => console.log('Completed Observable Sequence!')
  );

  setTimeout(() => subscription.dispose(), 1000);
```
