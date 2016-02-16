## Cold vs. Hot Observables

Observables in RxJS can be classified into 2 main groups, Hot and Cold Observables. Let's start with a cold observables

```javascript
  let source = Rx.Observable.interval(1000).take(7);

  setTimeout(() => {
    source.subscribe(
      value => console.log('subscription A: ' + value));
  }, 0);

  setTimeout(() => {
    source.subscribe(
      value => console.log('   subscription B: ' + value));
  }, 2000);
```

In the above case subscriber B subscribes 2000ms after subscriber A. Yet subscriber B is starting to get the value from 0 to 6 just like subscriber A only time shifted. This behaviour is referred to as a **Cold Observable**. A useful analogy is watching a pre-recorded video, let's stay on Netflix. You press play and the movie starts playing from the beginning. Someone else, can start playing the same movie in their own home 25 minutes later.

On the other hand there is also a **Hot Observable**, which is more like a live performance. You attend a live band performance from the beginning, but someone else might be 25 minutes late to the show. The band will not start playing from the beginning and you have to start watching the performance from where it is. 

We have already encountered both kind of observables, the example above is a cold observable, while an example that uses `fromEvent` on our mouse clicks is a hot observable.
