## Content Type

RESTful APIs can exchange data using a variety of encoding formats. By far the
most common format today is JSON. In a typical Angular application, this is
the format used by the server for sending data in response to a GET request
and by the client when sending data with a POST or PUT request. Even though
JSON is quite common, the client and the server are supposed to notify each
other that this is the format being used by using header. For JSON, the proper
content-type is:

```
  Content-Type: application/json
```

for compatibility reasons, however, many servers will specify the type as:

```
  Content-Type: text/plain
```

The good news, however, is that Angular will assume that you are using JSON
and will handle the details for you.
