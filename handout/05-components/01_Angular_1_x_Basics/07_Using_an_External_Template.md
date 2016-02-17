## Using an External Template

Our templates are usually too complex to include as a string. So, instead we often provide a URL to the template file by using `templateUrl` instead of the `template` option in our Directive Definition Object (DDO).

Let's create a new directory *app/src/components/main/* and extract our template into a html file called *main-component.html*. Our templateUrl option should now point to *components/main/main-component.html*.
