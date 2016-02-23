## Asynchronous Requests Using Observables

A lot of the time the asynchronous nature of our application will surface when dealing with UI events as illustrated in examples above, or making asynchronous server requests. Observables are well equipped to deal with both.

We have already seen the code below in Chapter 8 about REST APIs.

```javascript

  this.$http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
    .then((response) => {
      this.$log.info(response.data);
      this.tasks = response.data;
    })
    .then(null, 
      (error) => this.$log.error(status, error));

```

Let's see how we can make an asynchronous server call using an Observable instead.

```javascript
  let responseStream = Rx.Observable.create(observer => {
    $http.get('http://ngcourse.herokuapp.com/api/v1/tasks')
      .then(response => observer.onNext(response))
      .then(null, error => observer.onError(error));
  });
  
  responseStream.subscribe(
    (response) => $log.info('Data: ', response),
    (error) => $log.info('Error: ', error)
  );
```

In the code snippet above we are creating a custom response data stream, and notifying the observers of the stream when the data arrived.

```javascript
  let responseStream = Rx.Observable.fromPromise(
    $http.get('http://ngcourse.herokuapp.com/api/v1/tasks'));
    
  responseStream.subscribe(
    (response) => $log.info('Data: ', response),
    (error) => $log.info('Error: ', error)
  );
```
