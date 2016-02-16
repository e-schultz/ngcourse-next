# Components

As directive in Angular 1.x, in Angular 2, components are the building blocks of your application. As a matter of fact what we built in the previous section is referred to as **Component Directive** within Angular 1.x context. 

Angular 2's components are conceptually similar to component directives from Angular 1.x. The structure of Angular 2 application can be viewed as the tree of components, with a root element of that tree being the entry point of your application.

In summary, component is an object that structures and represents a UI element. It consists of two parts, component **controller** in charge of view logic and component **template** representing the view.

With that in mind let's define a basic component in a separate typescript file 
located in *app/src/components/main/main-component.ts*:

```javascript
export class MainComponent {

  private username;
  private numberOfTasks;

  static selector = 'ngcMain';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./main-component.html'),
      controller: MainDirectiveCtrl,
      controllerAs: 'ctrl',
      bindToController: true
    };
  };
  
  constructor() {
    this.username = 'alice';
    this.numberOfTasks = 0;
  }
}
```

