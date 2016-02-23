### Converting from Cold to Hot Observables

A useful method within RxJS API, is the `publish` method. This method takes in a cold observable as it's source and returns an instance of a `ConnectableObservable`. In this case we will have to explicitly call `connect` on our hot observable to start broadcasting values to its subscribers.

```javascript
  let source = 
      Rx.Observable.interval(1000).take(7).publish();

  setTimeout(() => {
    source.connect();
  }, 1000);

  setTimeout(() => {
    source.subscribe(
      value => console.log('subscription A: ' + value));
  }, 0);

  setTimeout(() => {
    source.subscribe(
      value => console.log('   subscription B: ' + value));
  }, 5000);
```

In the case above, the live performance starts at 1000ms, subscriber A arrived to the concert hall 1000ms early to get a good seat, and our subscriber B arrived to the performance 4000ms late and missed a bunch of songs.

Another useful method to work with hot observables instead of `connect` is `refCount`. This is auto connect method, that will start broadcasting as soon as there are more than one subscriber. Analogously, it will stop if the number of subscribers goes to 0, in other words no performance will happen if there is no one in the audience.

[View Example](http://jsbin.com/fewotud/3/edit?js,console)
