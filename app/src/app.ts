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


import '@angular/router/angular1/angular_1_router';
import '@angular/router/angular1/ng_route_shim';
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

/*
angular.module('ngcourse.router', ['ngComponentRouter','ngRouteShim','app.home'])
  .directive('app', () => {
    return {
      restrict: 'E',
      template: `<ng-outlet></ng-outlet>`,
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
            component: 'ngcTasks',
            as: 'Tasks'
          },
          {
            path: '/tasks/add',
            component: 'ngcTaskAdd',
            as: 'TasksAdd'
          },
          {
            aux: 'action',
            //path: '/tasks/:id',
            component: 'ngcTaskEdit',
            as: 'TaskDetails'
          }
          
        ]);

      }
    };
  }).service('router', RouterService);

angular.module('app.home', ['ngcourse.main'])
.directive('home', () => {
  return {
    template: 'hi <ng-outlet/>',
  };
});

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
*/
/*
angular.element(document).ready(function() {
  angular.bootstrap(document, ['ngcourse']);
});
*/

//adapter.addProvider(RouteParams);

angular.module('ngcourse', ['ngComponentRouter', 'components'])
  .controller('AppController', ($router) => {
    console.log('Hello')
    $router.config([
      {
        path: '/parent',
        useAsDefault: false,
        component: 'testParent',
        name: 'Parent'

      },
      {
        path: '/children/...',
        useAsDefault: false,
        component: 'children',
        name: 'Children'
      },
      /*{
        path: '/children/child',
        component: 'testChild',
        name: 'Child'
      }*/
    ]);
  });

angular.module('components', []).directive('children', Children)
  .directive('testParent', () => ({
    template: 'parent',
    controller: ($router) => {
      /*  $router.config([
          {
            path: '/child',
            component: 'testChild'
          }
        ]);*/
    }
  })).directive('testChild', () => ({
    template: 'Good Child',
    controller: () => {
      console.log('child controller');
    }
  })).directive('badChild', () => ({
    template: 'badChild',
    controller: () => {
      console.log('child controller');
    }
  }))
  
 function Children() {
   return {
     template: `Children Container <ng-outlet></ng-outlet>
     <a ng-link=['./Child']>Goto my child</a>
     <a ng-link=['./BadChild']>Goto my BadChild</a>
     `
   };
 }
 Children.$routeConfig = [{
   path: '/child',
   component: 'testChild',
   name: 'Child'
 },{
   path: '/badkid',
   component: 'badChild',
   name: 'BadChild'
 }];
 
adapter.bootstrap(document.body, ['ngcourse']);
