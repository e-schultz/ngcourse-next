### Inject

Also, we're using `inject()` to get access to two Angular services:

* $compile - used for evaluating the directive's template HTML.
* $rootScope - used to create an isolated $scope object for passing test data into the directive. Each time a new test is run (defined using it), a new isolated scope for our component will be created using `$rootScope.$new()`.
