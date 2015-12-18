import {TaskActions} from '../../actions/task/task-actions';
import {RouterService} from '../../services/router/router-service';
import {TasksStore} from '../../stores/tasks/tasks-store';

export class TaskEditComponent {

  private _task: any;
  private _errorMessage: String;

  static selector = 'ngcTaskEdit';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'AE',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: true,
      controller: TaskEditComponent,
      template: require('./task-edit-component.html')
    };
  };

  static $inject = [
    '$scope',
    'tasksActions',
    'tasksStore',
    '$routeParams',
    '$router',
    'router',
  ];

  constructor(
    private $scope: angular.IScope,
    private tasksActions: TaskActions,
    private tasksStore: TasksStore,
    private $routeParams: any,
    private $router: any,
    private router: any
  ) {

    console.log('this',this);
    console.log('$scope',$scope)
    console.log('$routeParams',$routeParams);
    
    let tasksSubscription =
      this.tasksStore.tasksSubject.subscribe(
        tasks => {
          //console.log('whut',this.$router._outlet.controller.$$routeParams.id)
          this._task = this.tasksStore.getTaskById(this.$router._outlet.controller.$$routeParams.id);
        },
        error => this._errorMessage = error);

    this.$scope.$on('$destroy', () => {
      tasksSubscription.dispose();
    });
  }

  updateTask(task) {
    this.tasksActions.updateTask(task);
    this.router.goToTaskList();
  }

  cancel() {
    this.router.goToTaskList();
  }

  get task() {
    return this._task;
  }

  get errorMessage() {
    return this._errorMessage;
  }
  
  $onActivate() {
    console.log('oh hai!',this.$routeParams);
  }
  
  $onInit() {
    console.log('oh hai!',this.$routeParams);
  }
}
