import {TaskActions} from '../../actions/task/task-actions';
import {RouterService} from '../../services/router/router-service';

export class TaskAddComponent {

  static selector = 'ngcTaskAdd';
  
  static directiveFactory: ng.IDirectiveFactory = () => {
    return {
      restrict: 'AE',
      scope: {},
      controllerAs: 'ctrl',
      bindToController: {},
      controller: TaskAddComponent,
      template: require('./task-add-component.html')
    };
  };
  
  static $inject = [
    'router',
    'tasksActions'
  ];
  
  constructor(
    private router: any,
    private tasksActions: TaskActions
   ) {}

  save(task) {
    this.tasksActions.addTask(task);
    this.router.goToTaskList();
  }

  cancel() {
    this.router.goToTaskList();
  }
}
