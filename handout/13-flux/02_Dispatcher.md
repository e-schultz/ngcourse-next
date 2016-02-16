### Dispatcher

Dispatcher acts as a central message bus responsible for distributing the incoming Actions to the appropriate stores. It has no logic of its own and simply acts as a hub for Action creator methods to push Actions to. Store will listen on the dispatcher for incoming Actions responding to relevant ones.
