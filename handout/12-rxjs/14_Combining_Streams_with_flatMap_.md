## Combining Streams with `flatMap`

A case for FlatMap:

- [A simple observable stream](http://jsbin.com/nutegi/36/edit?js,console)
- [A stream of arrays](http://jsbin.com/lerake/3/edit?js,console)
- [Filter the items from each event](http://jsbin.com/widadiz/2/edit?js,console)
- [Stream of filtered items](http://jsbin.com/reyoja/2/edit?js,console)
- [Filter + map simplified with flatMap](http://jsbin.com/sahiye/2/edit?js,console)

We want to make something a bit more useful and attach our server request to a button click. How can that be done with streams? Let's observe the example below.

```javascript
  let eventStream = 
    Rx.Observable.fromEvent(document.getElementById('refreshBtn'), 'click');
    
  let responseStream = eventStream  
    .flatMap(() => Rx.Observable.fromPromise(
      $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')));

  responseStream.subscribe(
    (response) => $log.info('Async Data: ', response),
    (error) => $log.info('Async Error: ', error)
  );
```

First we create an observable of button click events on some button. Then we use the `flatMap` function to transform our event stream into our response stream.

Note that `flatMap` flattens a stream of observables (i.e observable of observables) to a stream of emitted values (a simple observable), by emitting on the "trunk" stream everything that will be emitted on "branch" streams.

Alternatively, if we were to use `map` instead, we would create a meta stream, i.e. a stream of stream.

```javascript
  ...      
  let metaStream = eventStream  
    .map(() => Rx.Observable.fromPromise(
      $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')));

  // We would have to subscribe to each stream received below
  // to achieve the behaviour we want
  metaStream.subscribe(
    (stream) => $log.info('Async Data: ', stream),
    (error) => $log.info('Async Error: ', error)
  );
```

This is not very useful in our current example as we would have to subscribe to an observable received from an observable stream. 

[View Example](http://jsbin.com/bufawuxatu/edit?js)