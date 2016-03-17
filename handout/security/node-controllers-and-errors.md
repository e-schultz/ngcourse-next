# Node

Error handling in Node applications is an important aspect to get right. One way of ensuring that all of the errors in your controllers are handled properly, is to create a controller factory that will handle the response for you, and allowing your controllers to simply return resolved or rejected promises.

The role of error handling and logging can then be delegated to the controller factory.

## controller factory
```js
'use strict';

const _ = require('lodash');

function logToConsole (data) {
  console.log('------------------');
  console.log(JSON.stringify(data, null, ' '));
}

module.exports = function (promiseFn, opts) {
  const _opts = _.merge({
    errorCode: 1000,
    successHTTPCode: 200,
    errorHTTPCode: 500,
    errorHTTPResponse: 'Internal error'
  }, opts);

  return function (req, res, next) {
    // Wrap every controller
    new Promise(function(resolve, reject){
      // Controllers are expected to return either a promise or value
      return promiseFn(req).then(resolve, reject);
    })
      .then(function (data) {

        if (process.env.NODE_ENV === 'development') {
          logToConsole(data);
        }

        res.status(_opts.successHTTPCode).json(data);

      }, function (e) {
        // Handled error
        if (e.safe) {

          const errCode = e.httpCode || _opts.errorHTTPCode;
          const errData = process.env.NODE_ENV === 'development' && e || {
            code: e.code || _opts.errorCode,
            msg: e.httpResponse || _opts.errorHTTPResponse
          };

          if (process.env.NODE_ENV === 'development') {
            logToConsole(errData);
          }

          res.status(errCode).json(errData);
        } else {
          // Unhandled error, let the error handling middleware do its job
          next(e);
        }
      });
  };
};
```

When setting up the routes for your express application, pass the controller code through the controller factory:

## Example Controller
```js
const error = require('./error-codes');
const build = require('./controller-factory');
const router = require('express').Router();
const routeController = function(req) {
  const ids = req.query.ids;

  if (!_.isArray(ids)) {
   throw new XError(error.generic.input);
 }

  return ExampleMongoQuery.find({'id': {$in: ids}}).lean().exec();
}

router.get('/route', build(routeController));
```

## error-codes

To help with handling errors, creating a file of common errors, the type of status code you want to return them as and if they are safe or not can be a useful approach to managing sending errors to the client, and for logging purposes.

An example of an `error-codes` file:

```js
module.exports = {
  // Generic errors
  generic: {
    internal: {
      code: 1001,
      httpCode: 500,
      httpResponse: 'Internal error',
      safe: true
    },
    input: {
      code: 1002,
      httpCode: 400,
      httpResponse: 'Invalid input',
      safe: true
    }
  }
}
```

This can give you a centralized way to handle expected errors within your application. If you recall in our controller factory, there is a check for `e.safe` - as these are errors that we have knowingly raised within our application, and trust that we can recover from.

If the source of the error is something that we have not anticipated or planned for, it can be considered an unsafe error. This is where the generic error handling middleware should take over, and return a status `500` and restart the system.

## Unhandled Errors

```js
// other middleware ...
// mount routes ...

// Catch-all error handler
app.use(function (err, req, res, next) {

  if (process.env.NODE_ENV === 'development') {
    console.log(err.message);
    console.log(err.stack);
  }

  res.status(500).json({
    code: 1000,
    msg: 'Internal error'
  });

  // Restart the server.
  setTimeout(function () {
    throw err;
  });
});
```

In the case of critical errors, and unhandled exceptions it is better to let the server restart, and have an external process monitor such as [forver](https://github.com/foreverjs/forever) or [pm2](http://pm2.keymetrics.io/) monitor and restart your node servers.

## In summary

This allows you to delegate the error handling code to one location, and ensure that all controllers will have the same error handling.
An important aspect of handling these errors, is knowing if you are in a production or development environment.

When in a development environment, you often want to have more robust logging details to help debug the source of the issue. However, when in production environments you do not want to leak details to the end user that could expose information that could compromise the security of your system.
