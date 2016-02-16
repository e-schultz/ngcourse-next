## Adding "Resolves"

We'll add a resolve: parameter to our state to demonstrate the user of resolves. Note that resolves isn't used to often and we'll remove this once we've learned the functionality.

```javascript
  .state('account', {
      url: '/my-account',
      template: 'My account',
      resolve: {
        greeting: function($timeout) {
          return $timeout(function() {
            return 'Hello';
          }, 3000);
        }
      }
    });
```

The "resolve" property in a state configuration allows us to specify a set of
dependencies that will need to resolved prior to transitioning to the new
state. Those dependencies become injectable in the route's controller. In the
example above, `greeting` property of the resolve is set to a function that
returns a promise that resolves to 'Hello' after 3000 msec. (We generate this
property using `$timeout`.) The UI-Router will wait until the promise
resolves, then make the transition. The state's controller will be able to
dependency-inject 'greeting', which will be set to 'Hello' by the time the
controller is initialized.

This approach can simplify controller code, but does so at the cost of
terrible user experience: after the user clicks on a button, nothing happens
for 3 seconds, leaving the user wondering what happened.

A better approach is to not rely on "resolve" and instead make the transition
immediately. The receiving controller can then decide what parts of the view
can be displayed right away and what parts will need to be displayed with a
short delay. For example, if the state involves displaying a list of objects
that need to be retrieved from the server, the app can display everything
other than the list, then make add the list items when they arrive. This
usually produces a more natural experience for the user.
