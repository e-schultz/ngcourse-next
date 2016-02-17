## Models in Services

AngularJS does provide us with a great way to implement our data models at
arm's length from the views using a mechanism called "services".

![Simple MVC](https://raw.githubusercontent.com/rangle/ngcourse/master/handout/images/mvvm-final.gif)

Services are singleton objects that normally do not concern themselves with
the DOM but instead take care of your data. The bulk of your application's
business logic should belong in services. We'll spend a lot of time talking
about this.

Services get linked together through an approach that AngularJS calls
"dependency injection". This is also how they are exposed to view models
(controllers and custom directives, or "components" going forward).

In the case of Angular, what "dependency injection" practically means is that components do not get to create and define their dependencies. Instead, services are created _first_, before any components are instantiated. Each component's definition specifies what dependencies should be provided to the component.

Angular's dependency injection is one of the best things about the framework.
This approach makes your code more modular, reusable, and easier to test.
Those features are essential when building larger applications.
