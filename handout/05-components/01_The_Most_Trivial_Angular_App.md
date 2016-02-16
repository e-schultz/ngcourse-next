## The Most Trivial Angular App

Let's start by setting up a really simple angular app -- so simple in fact that it won't do anything at all. Here is what we'll put in our *index.html* file.

```html
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <title>NgCourse-Next Demo Application</title>
  </head>
  <body>
    <div>Hello World!</div>
  </body>
</html>
```

We'll also need a very simple TypeScript file - our "app":

```javascript
angular.module('ngcourse', []);

angular.element(document).ready(
  () => angular.bootstrap(document, ['ngcourse'])
);
```
