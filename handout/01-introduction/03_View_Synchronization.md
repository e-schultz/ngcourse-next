## View Synchronization

Most introductions to Angular start with a look at the "front-end" of the
framework. Let's do the same here, even though most of your AngularJS code
should be in the model layer.

![Simple MVC](https://raw.githubusercontent.com/rangle/ngcourse/master/handout/images/mvvm-front-end.gif)

AngularJS views are HTML templates that are extended with custom elements and
attributes called "directives". AngularJS provides you with a lot of
directives and you will also be developing some yourself.

Views are linked with view models that take the form of "controllers" and
custom "directives". In either case we are looking at some code that controls
JavaScript objects (the actual "view model") that are referenced in the
templates. Angular 2 merges "controllers" and "directives" into a single
concept of a "component". In this course we will be building our application
as a collection of components, though we will be practically implementing each
component as a combination of a controller and a directive.

AngularJS automatically synchronizes DOM with view models when the view model changes. It also allows us to associate function handlers with DOM events. Both of those methods are preserved and generalized in Angular 2. Angular 1.x also has a concept of "two-way databinding", where properties of the view model can be automatically changed to reflect changes to DOM properties. This approach is deprecated in Angular 2 and we will avoid it.

Angular's approach to view synchronization makes it very "designer-friendly": designers can modify HTML templates without worrying too much about the code. The reverse is also true: as long as there is a designer on the team, developers are largely freed from worrying about HTML and CSS. Angular 2 preserves this feature.

Angular 1.x allows you to organize your view models into a hierarchy of "scopes" that partly mirrors DOM structure. This approach has proven problematic and we've usually recommended against it. It is being dropped entirely in Angular 2. For this reason, we will avoid it completely in this course. Instead, we will aim to make our components fully isolated. We'll also aim to have them do as little work as possible. Instead, most of the work (in particular, all of the business logic) should be moved to the lower "model" level.

More generally, it is important to understand that view models are a temporary staging area for your data on the way to the view. They should not be used as your primary model.
