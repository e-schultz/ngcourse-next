import {TaskListComponent} from '../../components/index';

export class RouterConfig {

  static $inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  constructor(
    private $stateProvider: angular.ui.IStateProvider,
    private $urlRouterProvider: angular.ui.IUrlRouterProvider,
    private $locationProvider: angular.ILocationProvider
  ) {

/*    this.$urlRouterProvider.otherwise('/tasks');
    this.$locationProvider.html5Mode(false);

    this.$stateProvider
      .state('tasks', {
        url: '/tasks',
        views: {
          '': {
            template: '<ngc-tasks></ngc-tasks>'
          }
        }
      })
      .state('tasks.details', {
        url: '/{_id:[0-9a-fA-F]{24}}',
        views: {
          'actionArea@tasks': {
            template: '<ngc-task-edit></ngc-task-edit>'
          }
        }
      })
      .state('tasks.add', {
        url: '/add',
        views: {
          'actionArea@tasks': {
            template: '<ngc-task-add></ngc-task-add>'
          }
        }
      })
      .state('account', {
        url: '/my-account',
        template: 'My account',
        resolve: {
          timeout: function($timeout) {
            return $timeout(function() { 
              // delay
            }, 3000);
          }
        }
      });*/
  }
}

export class RouterService {

  static $inject = ['$router'];

  constructor(private $router: any) { }

  goToAddTask() {
    
    this.$router.navigate(['TassAdd']);
  }

  goToTask(taskId) {
    this.$router.navigate(['TassDetails',{id: taskId}]);
  }

  goToTaskList() {
    this.$router.navigate(['Tasks']);
  }
};
