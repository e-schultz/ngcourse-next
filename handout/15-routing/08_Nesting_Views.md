## Nesting Views

One of the most powerful features of ui-router versus the out-of-the-box AngularJS router is nested views. To allow `ui-router` to know what view it's updating, we can add a name to the view as seen in `ui-view="child@parent"` below.

```javascript
  .state('parent', {
    url: '/parent',
    views: {
      'parent': {
        template: 'parent view <div ui-view="child@parent"></div>'
      }
    },
  })
  .state('parent.child1', {
    url: '/child1',
    views: {
      'child@parent': {
        template: 'child 1'
      }
    }
  })
  .state('parent.child2', {
    url: '/child2',
    views: {
      'child@parent': {
        template: 'child 2'
      }
    }
  });
```

Update the parent index.html to be named using `<div ui-view="parent"/>`.

Nesting views allows sophisticated routing where parts of the view are defined
by the parent state and parts are defined (or, overridden) by child states.
Note that states get nested implicitly, based on names: "parent.child1" will be
a child of "parent". (UI-Router also provides a facility for nesting states
explicitly.) Child state's URL is understood to be relative to the parents.
So, since "parent.child1" is a child of "parent" and parent's URL is "/parent",
the URL for "child1" is "/parent/child1".

In the example above, the parent view provides part of the view (the text
"parent view") and a placeholder where child states would go. When we visit
child1 and child2, the parent's part of the view remains unchanged, while the
child's section changes.

Alternatively, however, the child can override the parent's part of the view:

```javascript
  .state('parent.child2.grandchild', {
    url: '/grandchild',
    views: {
      'child@parent': {
        template: 'parent overriden'
      }
    }
  })
```

In this case the "grandchild" overrides the view earlier defined by child2.

When overriding parents views we need to refer to them using the ..@.. which allows us to specify an absolute path to the view.
