# Escaping Inputs

When displaying user-entered input onto a page, Angular will escape the markup for you which can help avoid most XSS attacks.
For example, if the value of userInput below was `<b>Hello</b>`

```HTML
<!-- if userInput was <b>Hello World</b> -->
<div>{{userInput}}</div>
```

Angular would escape the HTML, and display it as:

```HTML
<div><b>Hello World</b></div>
```

And not actually apply the bold markup. In cases where you do want to allow user-provided values, or values retrieved from an external source to be rendered as HTML, you can use the `ng-bind-html` directive.

```HTML
<div ng-bind-html="userInput"></div>
```

And it will display the formatted input. In newer versions of Angular, it will throw an error unless you have included the `ngSanitize` module, and the most current version of the `angular-sanatize` script for your application.
