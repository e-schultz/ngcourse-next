## Talking to a RESTful Server via Postman

In most cases, the Angular application and the server will not be exchanging
HTML. Instead, they will be exchanging data using an approach that is usually
referred to as "RESTful". The key idea is that each URL is normally understood
to represent a data "resource" in some collection of resources. The
application can use HTTP to create a resource, retrieve an existing one,
update it, or delete it.

Before we begin talking to the server from our web application, let's get
comfortable interacting with the REST API using Postman.

If you do not have Postman installed, get it here: <http://http://www.getpostman.com/>

Our server is setup at http://ngcourse.herokuapp.com/. Here is our `tasks` endpoint:

    http://ngcourse.herokuapp.com/api/v1/tasks
