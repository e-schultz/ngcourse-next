# Authorization

## 0. Do not confuse authorization and authentication.

Just the fact that the user is authenticated (you know who they are) doesn't
mean you should do whatever they ask you to do.

## 1. Consider resource-based authorization.

In many cases it makes sense to model authorization as a matter of certain
users having special access to specific resources. E.g., we could designate
some users as being "owners" or a particular resource and give them special
access to this resource based on that fact.

## 2. Consider role-based authorization.

In other cases it makes more sense to assign users to "roles" and link
permissions with those roles.

It's usually hard to get away from resource-based authorization entirely, so
in practice role-based authorization often ends up being used in combination
with resource-based authorization.
