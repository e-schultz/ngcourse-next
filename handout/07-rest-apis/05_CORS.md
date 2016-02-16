## CORS

Most browsers today follow a "same-origin policy", which stops your web
application from making HTTP requests to servers other than the one from which
the application itself was loaded. In our case right now, the web app is being
loaded from localhost, so under this policy it would only be allowed to send
HTTP requests to localhost. While this made sense in the past, in most modern
single-page applications this is impractical. Usually, your app will need to
talk to a server on some other host. (In our case, it's
"ngcourse.herokuapp.com.") When you try to do this, however, you may get an
error that would look roughly like this:

> XMLHttpRequest cannot load [some URL]. Origin [some domain] is not allowed
> by Access-Control-Allow-Origin.

There are two solutions to this problem.

__CORS__. The correct solution is for your server to implement "CORS", which
is a mechanism for telling your web browser that it's ok for your application
to talk to this server. It's a fairly simple thing to enable with most modern
server technologies, and once it's done on the server, there is nothing more
for you to do on the client if you are using AngularJS and a modern web
browser.

__Disable web security.__ The second option is to disable cross-origin
security policy (among other things) in the browser. This makes sense if
same-origin policy is not going to be a problem in deployment and the server is not
going to support CORS. If using Google Chrome, you can achieve this by running
it with `--disable-web-security` flag. For example, on OSX:

```bash
  open -a /Applications/Google\ Chrome.app --args --disable-web-security
```

Or on Windows:

```
  chrome.exe --disable-web-security
```

Same-origin policy does _not_ apply to apps built with Cordova. However, you
will run into this option when testing those apps in a web browser.
