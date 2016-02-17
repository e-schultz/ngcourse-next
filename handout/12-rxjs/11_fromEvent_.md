### `fromEvent`

```javascript
  Rx.Observable.fromEvent(document, 'click').subscribe(
    clickEvent => console.info(
      clickEvent.clientX + ', ' + clickEvent.clientY
    )
  );
```

The first line in the example above creates an observable of mouse click events on our document, ordered in time. Another way to refer to an observable is to call it an asynchronous collection.

**The point to take home from this, is that EVERYTHING can be made into a stream using observables.**
