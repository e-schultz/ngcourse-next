# Principals

## 0. When in doubt, ask for help.

Security is hard and it is easy to make a mistake. If you find yourself in the
slightest doubt about a security topic, ask for assistance or a second
opinion.

## 1. Code-review all security-related code.

All security-related code should be reviewed. This means that such code should
be written to be easy to audit.

In other words, it is not enough for the code to _be_ secure. It should also
be easy to _see_ that it is in fact secure.


## 2. Avoid DIY security.

When it comes to security, do-it-yourself is rarely a good idea, since it is
very hard to verify that your solution actually delivers. It's better to go
with battle-tested third-party solutions.

## 3. Choose third-party software wisely.

Third-party software brings the risk of security vulnerabilities. Keep this in
mind when choosing third-party software, and choose solutions that are
well-regarded by security experts. If you are not sure whether a piece of
software is secure, ask someone who does.

## 4. Keep third-party software up to date.

Established solutions only offer more security if you keep up with security
fixes. For this reason, keep third-party software up to date.

You can use tools such as "[retire.js](https://www.npmjs.com/package/retire)"
to check for vulnerable NPM packages. Consider adding this check to your CI
setup.

## 5. Ensure authentication and authorization.

Most apps require a method for establishing who the user is (authentication)
and what they are allowed to do (authorization). You need to ensure that
those methods actually work and cannot be circumvented.

## 6. Do not trust the client.

Anything that is stored in the browser's memory can be accessed by the user.
Proceed with this assumption.

When you send JavaScript to a browser, you have no way of knowing if the
browser will run this code unmodified. So, any security that you implement
client-side can be easily circumvented. Do not send to the browser any data
the user should not see. Do not accept from a browser any requests that the
user should not be able to make.


## 7. Practice "courtesy security" client-side.

Client-side security is "courtesy security". It's not there to stop the user
from misbehaving – that should be done by the server. The client's role is to
guide the user towards choices that won't lead to a disappointingly rude
response from the server.

E.g., disable the button that the user shouldn't click. They can still go into
the console and use it to ask the server to do something they are not allowed
to do. But at that point, a 400-level response is fair game. A well-behaved
user, however, should be guided away from prohibited actions.

Client-side "courtesy security" frees your server from the need to be polite
and simplifies your architecture.


## 8. Secure data in transit.

Data should be encrypted when traveling along channels where someone could
intercept it. There are good, standard solutions for that.

## 9. Secure data at rest.

Data should be secure while it is being stored.

## 10. Secure the keys.

If you encrypt the data, it is only secure as long as the keys are secure.
Consider how keys are being managed in your system.

## 11. Protect data from yourself.

In many cases, users' data needs to be protected not only from outsiders or
other users, but also from our own and client's staff. Among other things,
this usually means that you need to set things up in such a way that _you_
wouldn't have access to that data either.

## 12. Plan to deploy to the cloud.

Leveraging cloud infrastructure makes it easier to ensure security compared to
running your own servers. Our preferred cloud provider is Amazon AWS.

Note that we love Heroku for _development_, but prefer Amazon AWS for
production deployment because of the wider set of security options. This means
that when developing with Heroku it is important to avoid making too many
commitments to it.
