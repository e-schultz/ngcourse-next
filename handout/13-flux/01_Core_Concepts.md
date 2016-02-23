## Core Concepts

The core idea behind Flux pattern, is unidirectional data flow implemented using the four major "machines" in the Flux "pipeline": Actions, Dispatcher, Stores and the Views.

The diagram below illustrates the flow of data through the Flux "pipeline".

![alt tag](https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png)

When the user interacts with the View (i.e. a component), the view propagates an Action through a Dispatcher (i.e. a message bus) to the Stores where your domain model or state and the application logic are stored. Once the Store updates its domain model it propagates a "change" event to which Components in your application can subscribe, and re-render themselves accordingly to the new data.

Let's have a more in depth look at each of those parts in our "Flux machine".
