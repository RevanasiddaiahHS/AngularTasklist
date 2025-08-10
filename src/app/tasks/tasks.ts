import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { newTask, type ITask } from './task/task.model';
import { TaskService } from './task';
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userID!: string;
  clicked: boolean = false;
  constructor(private taskservice: TaskService) {}
  get userSpecificTask() {
    return this.taskservice.userSpecificTask(this.userID);
  }

 
  addTask() {
    this.clicked = true;
  }
  onCloseTask() {
    this.clicked = false;
  }
}
