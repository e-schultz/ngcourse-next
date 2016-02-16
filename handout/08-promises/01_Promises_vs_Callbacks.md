## Promises vs Callbacks

JavaScript is single threaded, so we can't really ever "wait" for a result of
a task such as an HTTP request. Our baseline solution is callbacks:

```javascript
  request(url, (error, response) => {
    // handle success or error.
  });
  doSomethingElse();
```

A few problems with that. One is the "Pyramid of Doom":

```javascript
  queryTheDatabase(query, (error, result) => {
    request(url, (error, response) => {
      doSomethingElse(response, (error, result) => {
        doAnotherThing(result, (error, result) => {
          request(anotherUrl, (error, response) => {
            ...
          })
        });
      })
    });
  });
```

And this is without any error handling! A larger problem, though: hard to decompose.

The essence of the problem is that this pattern requires us to specify the
task and the callback at the same time. In contrast, promises allow us to
specify and dispatch the request in one place:

```javascript
  promise = $http.get(url);
```
and then to add the callback later, and in a different place:

```javascript
  promise.then(response => {
    // handle the response.
  });
```

This also allows us to attach multiple handlers to the same task:

```javascript
  promise.then(response => {
    // handle the response.
  });
  promise.then(response => {
    // do something else with the response.
  });
```
