# Data in Transit

## 0. Use strong SSL in production between server and client.

Use of HTTPS/SSL/TLS is essential for communication between the browser and
the server and should make use of the latest version of SSL/TLS available.
This does not necessarily need to be done in the server code - it can be done
with an SSL proxy in production. It does need to be done, however.

This is not necessarily something we need to provide, since this can be
handled in production by the operations team via a HTTPS proxy or a load
balancer that handles SSL termination. However, we need to ensure that the
client understands this. Also, in cases where rangle.io is handling
deployment, we absolutely need to enable SSL. Some applications may require an
SSL connection between the server and the load balancer.

SSL and TLS are basically the same thing. Strictly speaking, TLS is a
newer version of SSL. In practice, people usually say SSL when they mean TLS.
HTTPS is HTTP with TLS.



## 1. Enable HTTP Strict Transport Security in production.

HTTP Strict Transport Security (HSTS) is a mechanism by which a server can
tell the client that the client should never connect to this server without
SSL. This can be done in production but we need to ensure that it's done.

This can be done by a proxy. We need to verify that client's operations team
is aware of this. In cases where we do deployment, we need to make sure this
is done correctly.

This can be easily done using [helmet](https://github.com/helmetjs/hsts).



## 2. Ensure a private connection to the database in production.

To ensure privacy of the data passing between the server and the database,
either use SSL or put the two on a secure network. Better yet do both.

MongoDB can now support SSL connections, but this requires a custom build and
is not supported by all providers. When not using SSL, ensure that the traffic
between the server and the database only passes through a private network.

This can also be set up in production, but we need to ensure that the client's
operations teams understands this requirement.
