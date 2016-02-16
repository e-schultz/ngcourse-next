## HTTP Methods

An HTTP client interacts with server resources using HTTP methods:

__GET__ to retrieve some resource (or resources). E.g.:

```
  GET http://ngcourse.herokuapp.com/api/v1/tasks/5491e9da995e33455a7307e2
```

The server will respond with the a set of objects representing matching resources:

```js
[{
  "_id":"5491e9da995e33455a7307e2",
  "owner":"alice",
  "description":"Create the horse shed.",
  "__v":0
}]
```

GET requests often also include a query, encoded as a query string.

__POST__ to create a new resource.

```
  POST http://ngcourse.herokuapp.com/api/v1/tasks/ + data
```

__PUT__ to update an existing resources.

```
  PUT http://ngcourse.herokuapp.com/api/v1/tasks/5491e9da995e33455a7307e2 + data
```

__DELETE__ to delete an existing resource.

```
  DELETE http://ngcourse.herokuapp.com/api/v1/tasks/5491e9da995e33455a7307e2
```
