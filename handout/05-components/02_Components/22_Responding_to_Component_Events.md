### Responding to Component Events

Let's restructure our code further and create a new component to handle the login form for us. We will put this component in a new file *app/src/components/login-form/login-form-component.ts* and create an html template file for it as well.

```javascript

  export class LoginFormComponent {

    static selector = 'ngcLoginForm';

    static directiveFactory: ng.IDirectiveFactory = () => {
      return {
        restrict: 'E',
        scope: {},
        controllerAs: 'ctrl',
        bindToController: {
          fireSubmit: '&onSubmit'
        },
        controller: LoginFormComponent,
        template: require('./login-form-component.html')
      };
    };
    
    private username;
    private password;
    private fireSubmit: Function;

    constructor() {
      //
    }

    public submit() {
      this.fireSubmit({
        data: this
      });
    }
  }
```

```html
  <div>
    <form>
      <h1>ngCourse App</h1>

      <label>Enter username</label>
      <input
        type="text"
        ng-model="ctrl.username">

      <label>Password</label>
      <input
        type="password"
        ng-model="ctrl.password">

      <button
        type="submit"
        ng-click="ctrl.submit()">
        Login
      </button>
    </form>
  </div>
```

Note the use of 

```javascript
  bindToController: {
    fireSubmit: '&onSubmit'
  }
```

This is how we will pass data out of the component, through events.

And change our wiring in `app.ts`

```javascript
  ...
  .directive(
    LoginFormComponent.selector,
    LoginFormComponent.directiveFactory)
  ...
```

Let's change *main-component.ts* and its template to accomodate this change:

```javascript

  export class MainComponent {

    static selector = 'ngcMain';
    
    static directiveFactory: ng.IDirectiveFactory = () => {
      return {
        transclude: true,
        restrict: 'E',
        scope: {},
        controllerAs: 'ctrl',
        bindToController: true,
        controller: MainComponent,
        template: require('./main-component.html')
      };
    };
  
    private isAuthenticated;
    private username;

    constructor(private $log) {
      this.isAuthenticated = false;
    }

    public login(data) {
      this.username = data.username;
      this.isAuthenticated = true;
    }

  };
```

```html
  <div>
    <div ng-hide="ctrl.isAuthenticated">
      <ngc-login-form on-submit="ctrl.login(data)"></ngc-login-form>
    </div>
    <div ng-show="ctrl.isAuthenticated">
      <ngc-tasks username="ctrl.username"></ngc-tasks>
    </div>
  </div>
```
