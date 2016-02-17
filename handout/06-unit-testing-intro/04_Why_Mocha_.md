## Why Mocha?

While we see this as the best combination of tools, a common alternative is Jasmine, a somewhat older tool that combines features of Mocha, Chai and Sinon.

Mocha provides better support for asynchronous testing by adding support for the `done()` function. If you use it, your test doesn't pass until the `done()`function is called. This is a nice to have when testing asynchronous code. Mocha also allows for use of any assertion library that throws exceptions on failure, such as Chai.
