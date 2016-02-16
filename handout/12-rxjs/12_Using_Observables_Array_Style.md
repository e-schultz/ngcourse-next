## Using Observables Array Style

In addition to simply iterating over an asynchronous collection, we can perform other operations such as `filter` or `map` and many more as defined in RxJS [a API](https://github.com/Reactive-Extensions/RxJS). This is what bridges observable with the Iterable pattern, and lets us conceptualize them as collections.

Let's expand our example and do something a little more with our stream:

```javascript
  Rx.Observable.fromEvent(document, 'click')
    .filter(clickEvent: MouseEvent => clickEvent.altKey)
    .subscribe(clickEvent: MouseEvent => console.info(
      clickEvent.clientX + ', ' + clickEvent.clientY
    )
  );
```

Note the chaining function style, and the optional static typing that comes with TypeScript we have used in this example.

**Most Importantly** functions like `filter` return an observable, as in *observables beget other observables*, similarly to promises.
