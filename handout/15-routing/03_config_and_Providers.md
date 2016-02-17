## .config() and Providers

Up until now, we've mostly been dealing with services and controllers.
However the example above introduces a couple of new concepts: providers and
`.config()` blocks.

When an AngularJS application starts up, it goes through several 'phases':

0. Angular executes your code that contains calls to methods such as
  `.service()`, `.constant()`, `.config()`, etc. However, at this point all of
  those entities are only defined. They are not yet instantiated. In other
  words, Angular takes note of the fact that will want to create a service
  'tasks' using the provided function. It does _not_ however, call this
  function at this point.

1. Constants defined in `.constant()` blocks are set.

2. Registered providers are created. The order is determined by dependencies
  between providers.

3. All `.config()` blocks are executed in order in which they were defined.
  The code in config blocks can refer to constants and can call methods on
  providers.

4. Values are set.

5. Services are instantiated. This includes services defined by `.factory()`
  and `.service()`, as well as those defined via providers. The order depends
  on the dependencies between the services.

6. All .run() blocks are executed in the order in which they were defined.

A provider is something Angular's dependency injector can use to create a
service. The provider can be configured with various data in the app's
`config` phase, _before any services are instantiated_. When services are
instantiated later, they can customize them based on configuration requests it
received in the config phase.

In practical terms, any JavaScript object that exposes a function called $get()
can serve as a provider.  We'll cover this in more detail in part 15 of this
course.

So in this example, we're configuring ui-router's `$stateProvider`,
`$urlRouterProvider`, and `$locationProvider` with settings that will later
be used to generate state, route, and location services with the correct path
and parameter data for use in our own controllers.
