# Part 06: Introduction to Unit Testing

## The Rationale

Why bother with unit tests?

## Unit Tests vs Integration Tests

A **unit test** is used to test individual components of the system. An
**integration test** is a test which tests the system as a whole, and how it
will run in production.

Unit tests should only verify the behaviour of a specific unit of code. If
the unit's behaviour is modified, then the unit test would be updated as well.
Unit tests should not make assumptions about the behaviour of _other_ parts of
your codebase or your dependencies. When other parts of your codebase are
modified, your unit tests **should not fail**. (If they do fail, you have
written a test that relies on other components, it is therefore not a unit
test.) Unit tests are cheap to maintain, and should only be updated when the
individual units are modified.
