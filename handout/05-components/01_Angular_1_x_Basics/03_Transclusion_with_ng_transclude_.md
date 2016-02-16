## Transclusion with `ng-transclude`

The way we defined our `ngc-main` directive above will ignore anything between the directive tags, as illustrated by example below.

```html
<ngc-main>This text will be thrown away.</ngc-main>
```

In some situation we would like the content to be preserved and shown on the DOM. To achieve this we will need to modify the transclude property of our directive like so:

```javascript
...
  .directive('ngcMain', () => ({
      ...
      transclude: true,
      template: '<span>Hello World from Directive! <div ng-transclude/></span>'
    })
  );
...  
```
