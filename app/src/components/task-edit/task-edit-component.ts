import {TaskActions} from '../../actions/task/task-actions';
import {RouterService} from '../../services/router/router-service';
import {TasksStore} from '../../stores/tasks/tasks-store';

export class TaskEditComponent {

  private _task: any;
  private _errorMessage: String;

  static selector = 'ngcTaskEdit';

  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'E',
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


    let tasksSubscription =
      this.tasksStore.tasksSubject.subscribe(
        tasks => {

          this._task = this.tasksStore.getTaskById(this.$routeParams.id);
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
}
