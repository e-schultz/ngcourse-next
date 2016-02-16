## Status Codes

An HTTP response must contain a numeric status code that indicates whether the
request was handled successfully. Legacy web applications often use such
codes in a sloppy way, responding to all requests with the same code "200
Success." REST APIs usually approach status codes more seriously. This allows
your application to rely on them to determine what happened and how to
proceed.

There are many status codes in use and not all servers use them in the same
way. The most important thing is to properly handle codes in each of the
distinct _ranges_ show below:

__200-299__: All codes in this range signify that the server did what it
thought you asked it to do. The most common success codes are "200 Success"
and "201 Created" (usually sent in response to a successful POST request).
Some servers will just use "200" for all success responses.

__400-499__: All codes in this range mean that the server didn't do what you
asked because it found some flaw with your request. This normally indicates
that _you_ (or the user of the application) are doing something wrong. The
most common 400-level codes are "400 Bad Request" (generic), "401
Unauthorized" (the client needs to be authenticated), "403 Forbidden" (you are
not authorized to do what you are asking to do), and "404 Not Found" (the
resource you are asking for does not exist, or you are not allowed to know
whether it exists). Some servers will send additional 400-level status code
for certain specific problems, while others will fall back on "400" if none of
the options above apply. It is important for your application to identify the
different 400-level codes used by your server, since they may help you
determine what to do next. For example, a 401 response would normally require
that you ask the user to re-login, while a 403 response would usually mean
telling the user that they aren't allowed to do whatever they were trying to
do.

__500-599__: These codes indicate _server_ errors. The server cannot do what
you asked because something is wrong on the server. Normally, this means that
it's _not_ your application's fault and there is little you can do other than
try again later (or get in touch with the administrators for the server).
There are many specific 500-level status codes, but from your application's
perspective it usually doesn't matter what exactly happened. You do, however,
want to handle such errors somehow, perhaps by showing an error message saying
"Sorry, we are having trouble talking to the server. Let's try again in a
little bit."
