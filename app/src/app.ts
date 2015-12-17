// note
// weird issue - https://github.com/angular/angular/issues/5292
// had to modify the angular_1_router file myself

import 'reflect-metadata';
import 'angular-ui-router';
import 'lodash-compat';
import 'koast-angular';

import 'basscss/css/basscss.css';
import 'font-awesome/css/font-awesome.css';
import '../css/styles.css';
import {Component, View} from 'angular2/core';
import * as angular from 'angular';
import * as Rx from 'rx';
import {UpgradeAdapter} from 'angular2/upgrade';
//import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';

import '@angular/router/angular1/ng_route_shim'
import  '@angular/router/angular1/angular_1_router';
//console.log('what the duce',x);




let adapter = new UpgradeAdapter();

import {
ServerService,
RouterService,
RouterConfig
} from './services';

import {
TasksStore,
UsersStore,
AuthenticationStore
} from './stores';

import {
LoginFormComponent,
TaskListComponent,
TaskComponent,
TaskAddComponent,
TaskEditComponent,
MainComponent
} from './components';

import {
TaskActions,
UserActions,
AuthenticationActions
} from './actions';


angular.module('ngcourse.router', ['ngComponentRouter','ngRouteShim','app.home'])
  .directive('app', () => {
    return {
      restrict: 'E',
      template: `<ngc-main></ngc-main><ng-outlet><ng-outlet>`,
      controller: function AppControllerDirective($router) {
        $router.config([
          {
            path: '/',
            component: 'home',
            as: 'Home',
            useAsDefault: true
          },
          {
            path: '/tasks',
            component: 'tasks',
            as: 'Tasks'
          },
          {
            path: '/tasks/add',
            component: 'tasks-add',
            as: 'TasksAdd'
          },
          {
            path: '/tasks/:id',
            component: 'tasksDetails',
            as: 'TasksDetails'
          }
        ]);

      }
    };
  }).service('router', RouterService);

angular.module('app.home', ['ngcourse.main'])
.directive('home', () => {
  return {
    template: '',
  };
}).directive('tasks',() => {
  return {
    
    template: '<ngc-tasks></ngc-tasks>'
  };
}).directive('tasksAdd',() => {
  return { template: '<ngc-task-add></ngc-task-add>' }
}).directive('tasksDetails',() => {
  return { template: '<ngc-task-edit></ngc-task-edit>' }
})

//.config(RouterConfig)

angular.module('ngcourse.main',[]).directive(
  MainComponent.selector,
  MainComponent.directiveFactory);
  
angular.module('ngcourse.authentication', [])
  .service('authenticationStore', AuthenticationStore)
  .service('authenticationActions', AuthenticationActions)
  .directive(
  LoginFormComponent.selector,
  LoginFormComponent.directiveFactory);

angular.module('ngcourse.tasks', ['ngcourse.router'])
  .service('tasksStore', TasksStore)
  .service('tasksActions', TaskActions)
  .directive(
  TaskListComponent.selector,
  TaskListComponent.directiveFactory)
  .directive(
  TaskComponent.selector,
  TaskComponent.directiveFactory)
  .directive(
  TaskAddComponent.selector,
  TaskAddComponent.directiveFactory)
  .directive(
  TaskEditComponent.selector,
  TaskEditComponent.directiveFactory);

angular.module('ngcourse.users', [])
  .service('usersStore', UsersStore)
  .service('usersActions', UserActions);

angular.module('ngcourse.server', [])
  .service('server', ServerService);

angular.module('ngcourse.dispatcher', [])
  .service('dispatcher', Rx.Subject);

angular.module('ngcourse', [
  'ngcourse.authentication',
  'ngcourse.tasks',
  'ngcourse.users',
  'ngcourse.server',
  'ngcourse.router',
  'ngcourse.dispatcher',
  'koast'])
  
  .constant('API_BASE_URL', 'http://ngcourse.herokuapp.com')
  .run((koast, API_BASE_URL) => {
    koast.init({
      baseUrl: API_BASE_URL
    });
    koast.setApiUriPrefix('/api/v2/');
    koast.addEndpoint('tasks', ':_id', {
      useEnvelope: true
    });
    koast.addEndpoint('users', ':_id', {
      useEnvelope: true
    });
  })//.factory('RouteParams', adapter.downgradeNg2Provider(RouteParams));

/*
angular.element(document).ready(function() {
  angular.bootstrap(document, ['ngcourse']);
});
*/

//adapter.addProvider(RouteParams);
adapter.bootstrap(document.body, ['ngcourse']);
