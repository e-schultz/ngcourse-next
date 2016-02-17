### Disposing Subscriptions

In some cases we might want to unsubscribe early from our observable. To achieve that we need to dispose of our subscription. Luckily, our call to `subscribe` on our observable actually returns an instance of a `Disposable`. This allows us to call `dispose` on our subscription should we decide to stop listening.

When we call `dispose` method on our subscription, our observer will stop listening to observable for data. In addition, we can return a function within our observable's implementation (i.e. `create` method above) that will be invoked when we call the `dispose` method on our subscription. This is useful for any kind of clean-up that might be required. 

Let's modify our example and see how it works out.

```javascript
  let source = Rx.Observable.create(observer => {
    setTimeout(() => {
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
    
    return onDispose = () => console.log('Stoping to Listen to this Observable Sequence');
    
  });

  let subscription = source.subscribe(
    value => console.log('Value: ' + value),
    error => console.log(error),
    () => console.log('Completed Observable Sequence!')
  );

  setTimeout(() => subscription.dispose(), 1000);
```

The last line of the code above, calls `dispose` method on our subscription after 1000ms (our observable is supposed to emit after 2000ms). If you run this example you will notice that this observable did not emit any values since we have called `dispose` method.

In most of the cases we will not need to explicitly call the `dispose` method on our subscription unless we want to cancel early or our observable has a longer life span than our subscription. The default behaviour of an observable operators is to dispose of the subscription as soon as `onCompleted` or `onError` messages are published. Keep in mind that RxJS was designed to be used in a "fire and forget" fashion most of the time. 
