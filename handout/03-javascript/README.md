# Part 3: EcmaScript 5 for AngularJS Developers

JavaScript is an untyped, interpreted programming language that can accomodate
a variety of  programming paradigms. Among other things, a lot of modern
JavaScript code heavily leverages functional programming style. The
combination of weak typing and functional methods can make JavaScript code a
bit hard to understand for those coming from strongly typed object-oriented
languages such as  Java.

This module is intended for an audience who is new to JavaScript, or one that
simply needs a refresher. We will walk through the basic JavaScript
constructs that make up an AngularJS application.

Let's begin by dissecting the following example of AngularJS code:

```javascript
  angular.module('ngcourse')

  .controller('MainCtrl', function($scope) {
    $scope.username = 'alice';
    $scope.numberOfTasks = 0;
  });
```

This code defines an AngularJS controller called `MainCtrl` as a part of a
module `ngcourse`. The way it does it may seem counterintuitive at first.
