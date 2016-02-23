# Services

In the previous section we wrote functions that call `$http` methods and process resulting
promises. We started by putting those functions in our controller. This,
however, is a poor practice. Those functions are working with business logic
and they should be kept out of controllers.
