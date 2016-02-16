### Template Cache

First let's talk about `import '../../template-cache';`. The first time a template is used within AngularJS context, it is put into the template cache for quick retrieval on subsequent requests.  


So importing our template cache, and defining a mock tasks module with a 'ngcourse.templates' as it's dependency gives us access to our component's template within the test.
