## Modules

At this point we may want to consider breaking our code up into modules. E.g.,
let's make `server` its own module:

```javascript
  angular.module('ngcourse.server', [])
    ...
    .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
    .service('serverService', ServerService);
```

We can then make it a dependency in our `ngcourse` module (in `app.ts`):

```javascript
  angular.module('ngcourse', [
    'ngcourse.server'
  ]);
```

Note that an Angular "app" is basically just an Angular module.

Each module can define `.config()` and `.run()` sections. You will rarely see
`.config()` except when setting up routes. (We'll discuss it in that context.)
Your `.run()` is essentially you modules's equivalent of the "main" block.

```javascript
  angular.module('ngcourse', [
    'ngcourse.server'
  ])

  .run($log => $log.info('All ready!'));
```

Keep in mind, though, that Angular's modules are somewhat of a fiction.