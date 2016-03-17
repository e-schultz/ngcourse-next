# JSON Web Tokens - JWT

JWT is a specification for storing in a stateless way the information about a user, and what permissions a user can have within a system. Since JWT is a JSON object, it provides a great deal of flexibility in how you store, manage and make use of this information.

Since JWTs can be signed and encrypted, it is also possible to store them on the client side. A JWT is a Base64 encoded string that consists  of three parts - a header that describes a token, a body with the details of the user, their roles, token expiry information, and a third section that is a has that verifies the integrity of the token.

However, where and how to store your JWT, handling expiry and token refresh are still areas that need to be considered. Incorrect use of JWT can leave your tokens vulnerable to man in the middle attacks, cross-site forgery attacks. In the next section, we will discuss the security considerations of where to store your tokens, and how to handle refresh and/or revocation.

## Storing Tokens

The options available for storing your JWTs are

* HTML5 sessionStorage/localStorage
* Cookies

## HTML5 session/localStorage

When using sessionStorage or localStorage, once a user has authenticated the response body would contain the token, and you could persist this to local storage, and have it sent out with every request with your application.

However, HTML5 storage is vulnerable to XSS attacks where it is possible for a malicious script to read the the entirety of what is stored in localStorage, and is becoming [recommended to not store sensitive information](https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Local_Storage)

## Cookies

The other option to storing JWT information in Cookies, this however comes with its own set of security challenges, such as still being vulnerable to CSRF attacks. If storing your JWT in a Cookie, it is a good idea to have them be HTTPS only to ensure they are not transmitted across an insecure connection. However, when making a Cookie HTTPS only - your JavaScript application can no longer read the security details from it.

One approach to work around this, is generating a token that can give access to an endpoint such as `/user/whoami` which will contain the payload of the JWT in the response body. This can be used during the bootstrapping of your application.

## Token Revoke & Expiry

Once a token is generated, it is not a good idea to let token live forever. If someone else is able to gain access to the token somehow, it can allow unauthorized users to gain and maintain access to the system. Another consideration is when a users roles and permissions have changed - you do not want to allow a stale token with now incorrect permissions to still have access to the system.

## Token Refresh

One approach is to have the access token have a shorter duration, and another refresh token that can be used to generate a new JWT to automatically refresh.

However, the implementation of this approach can be clunky, as once a request fails - you will need to issue a request for a new token, and then attempt the request again.

## Token Revoke

Another approach is to revoke the token. While this does add some state to your JWT tokens, it might be the appropriate compromise to help ensure the security of your system.

For example, you could attach a status field to the account attached to user, and when verifying the token - see if the user is still active and grant access depending on that.

Or, you could leverage the `jti` - [JWT ID Claim](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#rfc.section.4.1.7) of the token.

The `jti` should be a unique identifier for the token, and should also be stored in a database in a way that associates a user with the token. When a users access has been changed, or revoked - the `jti` should be added to a blacklist of tokens, and prevent access to the system.
