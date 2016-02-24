import {ServerService, AuthenticationService} from '../../services';

export interface Task {
  _id: string;
   owner: string;
   description: string;
}

export class TasksService {

  static $inject = ['serverService', 'authenticationService'];

  tasksPromise: Promise<Task[]>;

  constructor(
    private serverService: ServerService,
    private authenticationService: AuthenticationService) { }

  getTasks() {
    return this.serverService.get('/api/v1/tasks');
  }

  addTask(task) {
   return this.serverService.post('/api/v1/tasks', task);
  }

  updateTask(task) {
    return this.serverService.put('/api/v1/tasks', task._id, task);
  }

  getTask(task) {
    return this.serverService.get('/api/v1/tasks/', task._id);
  }

  deleteTask(task) {
    return this.serverService.delete('/api/v1/tasks', task._id);
  }
}
