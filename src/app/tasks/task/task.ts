import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { type ITask } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: ITask;
  private taskService = inject(TaskService);
  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
