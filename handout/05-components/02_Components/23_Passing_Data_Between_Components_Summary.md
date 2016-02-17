### Passing Data Between Components Summary

In the above sections we have seen 2 ways to pass data between components using the `bindToController` options. 

`=` to pass variables from the current component into the component.

`&` to register a callback for component to invoke (with data if necessary) in order to pass data out of the component.

`=` and `&` are the mechanism that allow our component to have a "public API".

Note, if the attribute name and the property of the component class match the name can be omitted. i.e instead of `username: '=username'` we can just write `username: '='`, with the same shortcut applying to `&`.
