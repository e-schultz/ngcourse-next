# Node Modules

Keeping in mind with the principles of _Avoid DIY Security_ and _Choose third-party software wisely._, there are two commonly used node modules that can be used to help secure your node servers - [helmet](https://github.com/helmetjs/helmet), and [lusca](https://github.com/krakenjs/lusca) by PayPal.  Both of these offer similar, but different sets of functionality.

## Helmet

Helmet is a collection of middleware that can be included with your express server to help protect against a few common attack vectors, and consists of.

* [contentSecurityPolicy](https://github.com/helmetjs/csp) for setting Content Security Policy
* [dnsPrefetchControl](https://github.com/helmetjs/dns-prefetch-control) controls browser DNS prefetching
* [frameguard](https://github.com/helmetjs/frameguard) to prevent clickjacking
* [hidePoweredBy](https://github.com/helmetjs/hide-powered-by) to remove the X-Powered-By header
* [hpkp](https://github.com/helmetjs/hpkp) for HTTP Public Key Pinning
* [hsts](https://github.com/helmetjs/hsts) for HTTP Strict Transport Security
* [ieNoOpen](https://github.com/helmetjs/ienoopen) sets X-Download-Options for IE8+
* [noCache](https://github.com/helmetjs/nocache) to disable client-side caching
* [noSniff](https://github.com/helmetjs/dont-sniff-mimetype) to keep clients from sniffing the MIME type
* [xssFilter](https://github.com/helmetjs/x-xss-protection) adds some small XSS protections
[source](https://github.com/helmetjs/helmet)

Helmet out of the box without an extra configuration will make use of most of the above middleware with the exception of
* contentSecurityPolicy
* dnsPrefetchControl
* hpkp
* noCache

Which require some additional configuration, and/or may not be appropriate in all environments.


## Lusca

[lusca](https://github.com/krakenjs/lusca) is another collection of middleware to protect against some common attacks, and is part of the [Kraken](http://krakenjs.com/) framework by PayPal. However, it can be used independently of Kraken, as Kraken is a framework that is built on-top of Express.

While there is some overlap between Lusca and Helmet, the features provided by Lusca include:

* [Cross Site Request Forgery (CSRF)](https://github.com/krakenjs/lusca#luscacsrfoptions)
* [X-Frame for clickjacking](https://github.com/krakenjs/lusca#luscaxframevalue)
* [P3P Headers](https://github.com/krakenjs/lusca#luscap3pvalue)
* [HTP Strict Transport Security](https://github.com/krakenjs/lusca#luscahstsoptions)
* [X-XSS-Protection headers](https://github.com/krakenjs/lusca#luscaxssprotectionoptions)

For all of the features of Lusca to work, you will also need to use either [express-session](https://github.com/expressjs/session), or [cookie-session](https://github.com/expressjs/cookie-session).

### Lucsa and CSRF

One of the noteworthy features of Lucasa, and their CSRF support, is an Angular specific that will et lusca up to use the default settings for CSRF validation according to the [AngularJS docs](https://docs.angularjs.org/api/ng/service/$http#cross-site-request-forgery-xsrf-protection).
