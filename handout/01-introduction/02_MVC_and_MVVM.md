## MVC and MVVM

AngularJS is often described as an MVC ("Model-View-Controller") framework.
Here is how this is often illustrated:

![Simple MVC](https://raw.githubusercontent.com/rangle/ngcourse-next/master/handout/images/simple-mvc.gif)

This picture, however, is far too simple.

First, only the most trivial applications can be understood as
consisting of a single model, a single view and a single controller. More
commonly, an application will include multiple views, multiple controllers,
and multiple data models. So, it might look more like this:

![Simple MVC](https://raw.githubusercontent.com/rangle/ngcourse-next/master/handout/images/mvvm-initial.gif)

The figure above makes another important substitution, however. "Controllers"
are replaced with "view models". Angular can be better understood as a "MVVM"
("Model-View-ViewModel") framework. In this approach, we have "view models"
mediating between views and (data) models. While this may seem like just a
minor change of terminology, the idea of "view model" helps clarify the path
towards better AngularJS architecture. A view model is a mediating object that
takes data from a data model and presents it to a view in a "digested" form.
Because of that, the view model superficially looks like a model. It should
not be confused with the application's real data models. Misusing the view
model as the model is one of the most common sources of problems in AngularJS.

Now let's see how MVVM model is realized in AngularJS.
